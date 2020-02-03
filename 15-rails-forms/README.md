##  Rails-Forms-REST

### SWBATs

- [x] Review RESTFul Routes
- [x] Review Rails Routing
- [x] Discuss and Review Forms
  ```
    - form_tag, link_to, button_tag, submit_tag
    - form_for
  ```
- [x] Checking information before creating
- [x] Strong params
- [x] Private keyword
- [x] before_action
- [Private keyword Docs](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)
- [Action View Form Helpers Documentation](https://guides.rubyonrails.org/v5.2/form_helpers.html#dealing-with-basic-forms)

### Deliverables

- Create a new application
- Build CRUD using REST
- Mass Assignment
- Refactor with before_action

### Process

- Model -> Migration -> Route -> Controller -> View
- TEST AFTER EVERY STEP

### Code Snippets

- Creating a user
```rb
  @user = User.create(
    fname: params[:user][:fname],
    lname: params[:user][:lname],
    favcolor: params[:user][:favcolor]
  )
  redirect_to users_path
```

- form_tag
```rb
    <%= form_tag user_path, method: :patch do %>
      <%= text_field_tag :'user[fname]', @user.fname %>
      <%= text_field_tag :'user[lname]', @user.lname %>
      <%= text_field_tag :'user[favcolor]', @user.favcolor %>
      <%= submit_tag %>
    <% end %>
  ```

- form_for
```rb
    <%= form_for @user, method: :post do |f| %>
      First name: <%= f.text_field :fname %><br />
      Last name : <%= f.text_field :lname %><br />
      Fav Color : <%= f.text_field :favcolor %><br />
      <%= f.submit %>
    <% end %>
  ```

- link_to
  ```rb
    <%= link_to "Edit", edit_user_path(user) %>
  ```
