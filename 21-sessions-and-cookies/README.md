# Rails Sessions and Cookies
Today we'll examine ways to persist user actions across use of our app by introducing Rails sessions and cookies! 

## SWBATs
Session and Cookies
- Gain conceptual understanding of sessions and cookies

Authentication and Authorization
- Understand how authentication and authorization differ in a Rails app 
- Learn how to implement auth in an app

## Our Stateless World So Far 
So far in what we've been practicing with Rails, we've built user experiences based on where they are in our app, moving them through our app based on actions. 

What is state? It's the now moment that a user/app/thing exists in- what's happening right at this moment. What changes to move us into the next moment? How can we maintain state while moving through actions within our app? 

To understand how to capture a collection of now moments into a recorded user experience that happens from log in to sign out/navigate away, we'll need to understand sessions and cookies (and not the Cookie Monster variety). 

![Cookie Monster](https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif)


## What are sessions?
Sessions enable the application to maintain user-specific state while users interact with the application. It keeps track of how a user is logged in on page reload and remembers everything that happens within the 'logged-in' state. As an example, sessions allow users to authenticate once and remain signed in for future requests.

To identify session information, Rails creates a cookie on the user's client (browser) that assigns a 'session hash', that is, a unique identifier placed on the user's browser that remembers everything that happens until the browser is closed. When requests are made on your app, those requests are remembered and assigned to your time online with a session id. When you restart the app, you can access this session id to return to different states. 

![Session Diagram](https://machinesaredigging.com/blog-mad/wp-content/uploads/2013/10/how_does_a_session_work-1024x724.jpg)

### How to Implement Sessions in Rails

To implement sessions in Rails: 

You can set a session in a controller action:

```rb

app/controllers/sessions_controller.rb

def create
  # ...
  session[:current_user_id] = @user.id
  # ...
end

```

And read it in another:

```rb

app/controllers/users_controller.rb

def index
  current_user = User.find_by_id(session[:current_user_id])
  # ...
end

```

Or, you can use `flash`. `flash` is a special hash (okay, a method that acts like a hash) that persists only from one request to the next. You can think of it as a session hash that self destructs after it’s opened. It’s commonly used to send messages from the controller to the view so the user can see success and failure messages after submitting forms.

```rb
class PostsController < ActionController::Base
  def create
    # save post
    flash[:notice] = "Post successfully created"
    redirect_to @post
  end

  def show
    # doesn't need to assign the flash notice to the template, that's done automatically
  end
end

show.html.erb
  <% if flash[:notice] %>
    <div class="notice"><%= flash[:notice] %></div>
  <% end %>
```

Learn more about flash [here.](https://api.rubyonrails.org/classes/ActionDispatch/Flash.html)

For more on sessions, [check out this resource](https://machinesaredigging.com/2013/10/29/how-does-a-web-session-work/) and [this one.](https://www.justinweiss.com/articles/how-rails-sessions-work/)


## What are cookies?
Cookies are key-value data pairs that are stored in the user’s browser until they reach their specified expiration date. They can be used for pretty much anything, most commonly to “bookmark” the user’s place in a web page if she gets disconnected or to store simple site display preferences.

To work with cookies, Rails gives you access to a special hash called `cookies`, where each key-value pair is stored as a separate cookie on the user’s browser.


### How to Implement Cookies in Rails

Implementing cookies involves following simple configuration in Rails, with a lot of automagic behind the scenes. Note that the use of hashes 

```rb 
# Set a simple session cookie
cookies[:user_name] = "david" 

# Set a cookie that expires in 1 hour
cookies[:login] = { :value => "XJ12", :expires => Time.now + 3600}
```

#### Reading cookies:

```rb
cookies[:user_name]  # => "david"
cookies.size         # => 2 
```


#### Deleting cookies: 
```rb
cookies.delete :user_name
```


#### All the option symbols for setting cookies are:

- value − The cookies value or list of values (as an array).

- path − The path for which this cookie applies. Defaults to the root of the application.

- domain − The domain for which this cookie applies.

- expires − The time at which this cookie expires, as a +Time+ object.

- secure − Whether this cookie is a secure cookie or not (default to false). Secure cookies are only transmitted to HTTPS servers.


#### Security? 
Curious about the security of sessions and cookies? Read up [here.](https://guides.rubyonrails.org/security.html)
---

## Authentication and Authorization 
We've thrown around the word auth in regards to the steps of authentication and authorization, but what are they? The whole point of authentication is to make sure that the user is who they say they are, and authorization deals with what a user can access once they authenticate.

 The standard way of managing both authentication and authorization is through logging in your user via a sign-in form. Once the user is logged in, you keep track of that user using the session until the user logs out.


### What's the Difference? 
Authentication deals with user identity, and authorization deals with what a user can do after confirming their identity. 

e.g: 
Authentication: Lyn is Lyn, not Lin or Len.
Authorization: Lyn can delete all posts on MyBlogApp because she is an admin. 


### How to Authenticate with Rails 
Authentication with Rails can be created from scratch or is as easy as `Devise`! Let's walk through a 'from scratch' set of files before checking out Devise and understanding how to implement. 

```rb

# rails g controller users new
# rails g model user email:string password_hash:string password_salt:string
# rake db:migrate
# rails dbconsole
# rails g controller sessions new


# Gemfile
gem "bcrypt-ruby", :require => "bcrypt"


# models/user.rb
class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation
  
  attr_accessor :password
  before_save :encrypt_password
  
  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email
  
  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
  
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end


# users_controller.rb
def new
  @user = User.new
end

def create
  @user = User.new(params[:user])
  if @user.save
    redirect_to root_url, :notice => "Signed up!"
  else
    render "new"
  end
end


# sessions_controller.rb
def new
end

def create
  user = User.authenticate(params[:email], params[:password])
  if user
    session[:user_id] = user.id
    redirect_to root_url, :notice => "Logged in!"
  else
    flash.now.alert = "Invalid email or password"
    render "new"
  end
end

def destroy
  session[:user_id] = nil
  redirect_to root_url, :notice => "Logged out!"
end
application_controller.rb
helper_method :current_user

private

def current_user
  @current_user ||= User.find(session[:user_id]) if session[:user_id]
end


# routes.rb
get "log_out" => "sessions#destroy", :as => "log_out"
get "log_in" => "sessions#new", :as => "log_in"
get "sign_up" => "users#new", :as => "sign_up"
root :to => "users#new"
resources :users
resources :sessions


# users/new.html.erb
<h1>Sign Up</h1>

<%= form_for @user do |f| %>
  <% if @user.errors.any? %>
    <div class="error_messages">
      <h2>Form is invalid</h2>
      <ul>
        <% for message in @user.errors.full_messages %>
          <li><%= message %></li>
        <% end %>
      </ul>
    </div>
  <% end %>
  <p>
    <%= f.label :email %><br />
    <%= f.text_field :email %>
  </p>
  <p>
    <%= f.label :password %><br />
    <%= f.password_field :password %>
  </p>
  <p>
    <%= f.label :password_confirmation %><br />
    <%= f.password_field :password_confirmation %>
  </p>
  <p class="button"><%= f.submit %></p>
<% end %>

# sessions/new.html.erb
<h1>Log in</h1>

<%= form_tag sessions_path do %>
  <p>
    <%= label_tag :email %><br />
    <%= text_field_tag :email, params[:email] %>
  </p>
  <p>
    <%= label_tag :password %><br />
    <%= password_field_tag :password %>
  </p>
  <p class="button"><%= submit_tag "Log in" %></p>
<% end %>

# layouts/application.html.erb

<div id="user_nav">
  <% if current_user %>
    Logged in as <%= current_user.email %>.
    <%= link_to "Log out", log_out_path %>
  <% else %>
    <%= link_to "Sign up", sign_up_path %> or
    <%= link_to "log in", log_in_path %>
  <% end %>
</div>

<% flash.each do |name, msg| %>
  <%= content_tag :div, msg, :id => "flash_#{name}" %>
<% end %>

```




To see auth with Devise in action, visit: https://www.youtube.com/watch?v=aJ6XXxU1Zgs

And check out the official docs [here.](https://github.com/heartcombo/devise#getting-started)

### How to Authorize with Rails 
Authorization with Rails, similar to authentication, can and is convention to be performed using a gem, `CanCanCan`. 

With CanCanCan, all permissions can be defined in one or multiple ability files and not duplicated across controllers, views, and database queries, keeping your permissions logic in one place for easy maintenance and testing.

To see CanCanCan in action, visit: http://railscasts.com/episodes/192-authorization-with-cancan?autoplay=true

And check out the official docs [here.](https://github.com/CanCanCommunity/cancancan#readme)

#### Define Abilities 

```rb
# User permissions are defined in an Ability class.

rails g cancan:ability

# Here follows an example of rules defined to read a Post model.

class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, Post, public: true

    if user.present?  # additional permissions for logged in users (they can read their own posts)
      can :read, Post, user_id: user.id

      if user.admin?  # additional permissions for administrators
        can :read, Post
      end
    end
  end
end
```

#### Checking Abilities 

```rb
# The current user's permissions can then be checked using the can? and cannot? methods in views and controllers.

<% if can? :read, @post %>
  <%= link_to "View", @post %>
<% end %>

```

