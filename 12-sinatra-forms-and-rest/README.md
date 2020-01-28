# Sinatra Forms and REST 
Welcome to Sinatra! On your road to Ruby on Rails, we'll get some practice using the MVC design pattern using a lightweight framework called Sinatra. Let's dive into the basics!

## SWBATs
- Implement basic file structure of MVC App in Sinatra
- Implement RESTful Routing
    - Index page
    - Show page
    - New page
    - Edit page
    - Create route
    - Update route
    - Delete route
- Examine form templates in HTML with ERB
- Demonstrate how to build params hash from forms

---

### Sinatra MVC File Structure

Looking at all of the files included with Sinatra can first seem daunting. Let's break down what we're looking at: 

```rb
├── Gemfile
├── README.md
├── app
│   ├── controllers
│   │   └── application_controller.rb
│   ├── models
│   │   └── model.rb
│   └── views
│       └── index.erb
├── config
│   └── environment.rb
├── config.ru
├── public
│   └── stylesheets
└── spec
    ├── controllers
    ├── features
    ├── models
    └── spec_helper.rb
```
---

#### What's In There? 

- `app directory`
This folder holds our MVC directories - models, views, and controllers. We spend most of our time coding in this directory.


- `models directory`
This directory holds the logic behind our application. Typically, these files represent either a component of your application, such as a User, Post, or Comment, or a unit of work. Each file in models typically contains a different class. 


- `controllers directory`
The controllers, such as application_controller.rb, are where the application configurations, routes, and controller actions are implemented. There is typically a class, which in this case we will call `ApplicationController`, that represents an instance of your application when the server is up and running. The application_controller.rb file represents the "C" components of the MVC paradigm.

(In some simple applications the `ApplicationController` will simply be called `app.rb` and will live in the root directory of the project.)

Sometimes our other controllers will use ApplicationController as an inheritance point so that they inherit all the defaults and behaviors defined in our main `ApplicationController`. Other times our other controllers will simply inherit from Sinatra::Base.

Controllers represent the application logic, generally; the interface and flow of our application.


- `views directory`
This directory holds the code that will be displayed in the browser. In a Sinatra app we use .erb files instead of .html files because .erb files allow us to include regular, old HTML tags AND special erb tags which contain Ruby code. We can name them anything we like, but by convention, our file names will match up with the action that renders them. For example, a GET request to / typically renders a file called `index.erb`.

Views represent how things look and are displayed in our application. 


- `config.ru file`
A config.ru file is necessary when building Rack-based applications and using rackup/shotgun to start the application server (the ru stands for rackup).

- `config.ru` is first responsible for loading our application environment, code, and libraries.

Once all our code is loaded, `config.ru` then specifies which controllers to load as part of our application using run or use.


- `config directory`
This directory holds an environment.rb file. We'll be using this file to connect up all the files in our application to the appropriate gems and to each other.


- `public directory`
The public directory holds our front-end assets. In the example above, it holds a css directory with a stylesheet. Javascript directories and any other front-end assets (like image files) should also be stored in public.


- `spec directory`
The spec directory contains any tests for our applications. These tests set up any expectations for the rest of the project. These are often broken down into unit tests for models, controller tests for routes, and feature tests, which check the actual behavior for users.

---

Now that we have an idea of what's in our initial file structure, let's implement RESTful Routing. 

### Implementing RESTful Routing
As design patterns go, for routing in respect to REST (REpresentational State Transfer- remember this!), there's a pattern that is typically followed. 

A RESTful web application exposes information about itself in the form of information about its resources. It also enables the client to take actions on those resources, such as create new resources (i.e. create a new user) or change existing resources (i.e. edit a post).

#### Consider this Diagram 

Here's a quick "cheat sheet" on RESTful Routes and the controller actions needed to complete tasks for our users. Notice that we take users to a specific URL that executes a verb action, then a controller action based on what the user expects the route to do.

![RESTful Routing](https://sahilthakur7blog.files.wordpress.com/2017/07/51a50-restful-routes.png)

Let's next take a look at the file structure included in this folder and implement RESTful routes. 

Here's our deliverables for today's practice- you will walk me through what to do! 

### Deliverables
For each of the deliverables, consider what route(s) are necessary and execute.

- Read
    - As a site visitor, I should be able to see a list of all the books
    - As a site visitor, I should be able to see info about an individual book
- Create
    - As a site visitor, I should be able to create a new book
- Update
    - As a site visitor, I should be able to edit an existing book
- Destroy
    - As a site visitor, I should be able to delete a book from the database

### Practice with Form Templates and Build Params Hash with Forms

Let's add a form to our practice. Where should we build it? Here's an example: 

```rb
<form>
  <p>Your Name: <input type="text"></p>
  <p>Your Favorite Food: <input type="text"></p>
  <input type="submit">
</form>
```

Based on our deliverables, we want to have site visitors create a new book, or edit an existing one. How would we accomplish this with a form using our routes? 

How do we show new data to be loaded when a user creates a new entry to our database? 