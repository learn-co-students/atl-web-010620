# MVC, Rack, and Sinatra

You're about to enter the world of Ruby on Rails, a web application framework powered by Ruby to build applications quickly and efficiently! Before we dive in, we're going to review some of the parts that make Ruby on Rails shine and some core concepts of the logic and conventions behind RoR that makes magic happen. 

## SWBATs
- Review the Request-Response cycle and learn about how Rack works for RoR
- Explain the Model View Controller (MVC) pattern and give an example
- Explain how web frameworks (like Sinatra) use the MVC pattern and why
- Define 'convention over configuration'
- Identify the connection between REST and CRUD

---

### Let's Start With the Request-Response Cycle 

We previously learned about the request-response cycle that powers much of the web- we send a request via a client to a server using action verbs (GET, PUT, POST, DELETE) and expect a response with a message body to come back. 

![Request-Response Cycle](https://miro.medium.com/max/573/1*bx2bWzqeKCBndthiLGMK5g.png)

With Ruby on Rails (RoR- a popular abbreviation) we create a full environment for web application deployment, and use tools from server to client side to handle different parts of our app. 

In Rails, we use a gem called Rack to handle processing our requests from an application server to our external-facing application. 


#### What is Rack? 

[Rack](https://github.com/rack/rack) is a middleware gem that sits between Rails as a framework and the application server to handle requests and send responses from a server (typically [Puma](https://github.com/puma/puma)). It allows both Rails and Puma to communicate with each other and handles tasks such as: 

- Logging: it can share error message streams

- Sessions: it handles session management (session- a server-side storage of information that is desired to persist throughout the user's interaction with the web site or web application)

- Profiling: you can find out how long a request takes to complete

- Caching: it allows for HTTP caching (caching- a temporary storage area like a subdirectory that saves transient data to allow you to access the app again quicker)

- Security: you can deny requests based on IP address or limit the # of requests

- Serving static files like (css, js, JSON, png…)

Here's a quick diagram explaining where Rack falls within a RoR installation: 

![Rack Middleware](https://i2.wp.com/www.rubyguides.com/wp-content/uploads/2018/09/rack-stack-1.png?zoom=2&resize=417%2C384&ssl=1)

When integrated in your application, Rack becomes a set of components to allow you to send requests to your server in a way that is server and framework agnostic. 

#### Implementing Rack 

First, we need to add the gem to our Gemfile:
```rb
gem install rack
```

Next, we need a  `config.ru`  file. This file tells Rack how to run our webserver. It is both configuration and executable code. We will use it to tell Rack how to start our web application. In this file, we will require the rack gem.

```rb
config.ru

require 'rack'
require_relative '../app'

handler.run RackApp.new
```

```rb
app.rb

handler = Rack::Handler::Thin

class RackApp
  def call(env)
    [200, {"Content-Type" => "text/plain"}, "Hello from Rack"]
  end
end

```

The third thing that we need to do is to create an app.rb file which will hold all of our business logic (meaning the logic that the server will use to receive and respond to requests). 

Create an App class with a `call` instance method that accepts an environment hash and returns an array of a status code (as a number or string), some headers (as a hash), and a body (as an enumerable).

Lastly, we will require the app.rb file in our config.ru file and add the line run App.new. Now our application is ready to run, so go to Terminal and use the `rackup` command to run the server and navigate to `localhost:______.`

---

### Understanding MVC

In previous lectures, we discussed design patterns and how they work across programming languages to standardize templates that we can start from to build applications. 

One of the most frequent patterns that we use in program architecture is MVC, or Model-View-Controller. 

![MVC Architecture](https://www.guru99.com/images/1/122118_0445_MVCTutorial1.png)


#### Definitions 

`Model:` The main logic of the program- a collection of rules & functionality that gives a proper structure to the data it gets from the controller. 

`View:` The part of MVC that interacts with the user and used to present the structure or result form by the model. The GUI of your app.

`Controller:` Handles the user request. Grabs the request from the user and provides it to the model.

The MVC pattern, in a nutshell, is this:

- The model represents the data, and does nothing else. The model does NOT depend on the controller or the view.

- The view displays the data through the controller, and sends user actions (e.g. button clicks) to the controller. The view is independent of both the model and the controller.

- The controller provides model data to the view, and interprets user actions such as button clicks. The controller depends on the view and the model.


### Convention Over Configuration

Developers are presented with a number of ways to create an application. Because of this, we find ways to standardize and make sense of our collective processes in order to gain generally predictable, efficient, and performance-minded results. 

The Wikipedia definition for this paradigm is: 

`Convention Over Configuration` is a software design paradigm used by software frameworks that attempts to decrease the number of decisions that a developer using the framework is required to make without necessarily losing flexibility. 

The concept was introduced by **David Heinemeier Hansson** to describe the philosophy of the Ruby on Rails web framework, but is related to earlier ideas like the concept of "sensible defaults" and the principle of least astonishment in user interface design.

What does this mean? It's reasonable to use tools as a set of defaults for making a specific type of app, and developers should follow the path of convention when there's a generally acceptable way of attacking a domain problem (even if in configuration this way is a bit convoluted).

In the case of building apps that follow the MVC design pattern, we want to follow the conventions set forth by that pattern to expedite the process to developing your program. We'll talk more about this in a moment.


#### CRUD and REST

A design pattern in which many apps and tools follow in terms of convention is our trusty acronym, CRUD: 

- Create 
- Read 
- Update
- Delete

We have previously used CRUD operations to manipulate data and databases using SQL and Active Record, and based on their function understand that this is a convention used to perform certain operations on a set of data. 

With REST, **REpresentational State Transfer,** we use a set of defining principles to establish a connection between a client and a server by operating on resource representations. 

- GET
- POST
- PUT/PATCH
- DELETE

[![REST Video](http://img.youtube.com/vi/SLwpqD8n3d0/0.jpg)](http://www.youtube.com/watch?v=SLwpqD8n3d0 "REST Explanation")


When we learned about objects, we understood that they were just instances of a thing that exists in the real world, an abstraction or idea of a thing. In REST we work with resources- abstractions of information that your app holds. It's a set of constraints or a practice that we adhere to when sending and receiving info about state (where something is and the attributes it has at that now moment) from client to server.

A RESTful web application exposes information about itself in the form of information about its resources. It also enables the client to take actions on those resources, such as create new resources (i.e. create a new user) or change existing resources (i.e. edit a post).

#### How does CRUD and REST relate? 

Consider this diagram. 

![CRUD and REST example](https://qph.fs.quoracdn.net/main-qimg-240d2c5a916845bb2e33a42a5b8ed4be.webp)

and this one: 
![Another CRUD REST Example](https://gautambiztalkblog.files.wordpress.com/2015/03/crud.jpg)

While there are obvious aligning principles, 
one thing to remember is that CRUD works with database operations and REST works with HTTP request operations. 

### Introducing Sinatra

As engineers, when faced with our convention over configuration idea we always err on the side of using 'out of the box' solutions to make our lives easier. 

[Sinatra](http://sinatrarb.com/) is one such solution that RoR uses under the hood to quickly create web applications in Ruby. Sinatra is Rack-based, which means it can fit into any Rack-based application stack, including Rails. It's used by companies such as Apple, BBC, GitHub, LinkedIn, and more.

Sinatra consists of pre-written methods that we can include in our applications to turn them into Ruby web applications. It uses REST to create HTTP methods that perform operations on our requests. 

#### Using MVC with Sinatra

Working with Sinatra allows you to dive in deep with the major concepts of MVC, a system for building web applications that governs 90% of the worlds' apps. 

You are required to manually set up routes and connect them to other pieces of your application. Without this manual setup, your application does not automatically know how to communicate with your database or what HTML files to load in the browser. And even more importantly, without a manual setup, you lose connection to the major components of a web application, and in particular, all the moving pieces of MVC.

### What's Next? 

This was a conceptual lecture to understand some of the main pieces behind Ruby on Rails and what is working together to create the auto-magic that happens when we spin up a new application. 

Next, we'll dig into an app's file structure using Rack and Sinatra, and how to put our conceptual knowledge into practice via labs and the week's content.







