# Sinatra Forms and Associations

We're continuing in our journey to Rails with practice in Sinatra with forms and associations. In our last lecture, we talked about RESTful routes and how to start planning our app architecture to match our domain problem and user flow. Today we'll work through forms and add associations with Active Record to further build out our Amazing Book App. 

## SWBATs 

- Describe how the params hash is built
- Describe how to nest hashes inside of the params hash
- Describe how to nest arrays inside of the params hash
- Describe how mass assignment works in relation to hashes
- Demonstrate how to use params hash to mass-assign and create related objects

---

### Some Helpful Definitions: 

- Substitution Tag: evaluates Ruby code and then displays the results into the view (.erb file). It opens with `<%=` and closes with `%>`.

- Scripting Tag: opens with `<%` and close with `%>`. They evaluate –– but do not actually display –– Ruby code.

- Mass Assignment: a feature of Rails which allows an application to create a record from the values of a hash.

- Params Hash: a collection of data that comes through your application from a request

---

### More on the Params Hash

`params` is a hash of key/value pairs assigned to a getter method called `params`. It's set on the `ActionController::StrongParameters` class and returns the instance variable `@_params`, which is an instance of the `ActionController::Parameters` class. 

The `StrongParameters` class is one that gives us security and control over which parameters are allowed/required. We have access to `params` because our controllers are descendants of `ActionController::StrongParameters` and inherit all of its instance methods.

When users send data to your app, they can accomplish it in three ways: 

1. Using a query parameter ("example.com/?q=love")
2. Submitting a form ("/users/sign_in")
3. Within the URL itself ("/books/1")

Through these HTTP requests, form & URL query data is sent that can be accessed by calling `params` within your controller's actions. 

#### Here's an example: 

To send a hash you include the key name inside the brackets:

```rb
<form accept-charset="UTF-8" action="/users" method="post">
  <input type="text" name="user[name]" value="Auction" />
  <input type="text" name="user[phone]" value="201-867-5309" />
  <input type="text" name="user[address][postcode]" value="07001" />
  <input type="text" name="user[address][city]" value="New Jersey" />
</form>
```

When this form is submitted, the value of params[:user] will be 
```rb
{ 
"name" => "Auction", 
"phone" => "201-867-5309", 
"address" => { "postcode" => "07001", "city" => "New Jersey" } 
}
```



[Learn more about where the params method comes from.](https://medium.com/launch-school/params-in-rails-where-do-they-come-from-b172cdb46eb4)

---

### Today's USER STORIES for Practice

On the engineering floor, you'll encounter user stories that you'll use to build features from. We're going to continue our app by building out these user stories as three features that we add.

Approach the features one by one, working to completion on a feature instead of rushing to finish all at once. Consider if the schema has to change and what routes are needed to complete the feature.

  - As a site visitor, I should be able to see a list of authors.

    - Do I need to change the schema? 
    - What routes do I need to execute this feature? 
    - What's next? 

  - As a site visitor, I should be able to see a list of books. I should be able to click on each book title to see more information about that book.

    - For seeing a list of books, I need to: 


    - For clicking on each book to see info, I need to: 


  - As a site visitor, I should be able to see a form where I create a book. When I create a book I can associate it with an existing author.

    - for the form
      - does the schema change?
      - what routes? 

    - for associating with author 

