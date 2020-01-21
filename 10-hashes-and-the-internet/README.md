# Hashes and the Internet

Today in preparation for your projects and pairing labs, we're going to talk about how to gain data from the internet, how the net works in terms of the request-response lifecycle, and how to use APIs to get data.

## SWBATs

* Recognize the parts of the request-response lifecycle
* Define Application Programming Interface \(API\)
* Practice making requests to an API and parsing and examining the result
* Practice writing a command line application \(CLI\)

## Deliverables to Practice

* Write an application that takes a search term from a user
* Make a Request to the GoogleBooks API and get back some results
  * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
* Display the titles, author names, and description for each book


## Recognize the parts of the request-response lifecycle

When we visit a website and enter a URL, we're sending a request to the site's server to respond with HTML, images, and the elements that make up the site we've requested, to be shown on the client side. How does this work, exactly? 

Let's see! Consider this diagram: 

![Request-Response Cycle](https://miro.medium.com/max/573/1*bx2bWzqeKCBndthiLGMK5g.png)

A request from the client is sent to the server using a URL and request verb (GET, PUT, POST, and DELETE), and the server responds with a status code and the message body requested.

### Defining Client and HTTP Requests

#### What's a client? 
A client is typically software that accesses a service as created by a server. Clients are generally web browsers, accessing and manipulating different servers through URLs. 

To create a request through a client, we make HTTP requests - text strings with specific information about the resource we're looking for from a server. The HTTP request communicates which resource a client wants to interact with (typically the main site) and how the client wants to interact with it (typically a subpage), along with some metadata held in the header related to the request.

Let's break down some HTTP requests: 

http://linkedin.com / in / lynmuldrow 

https://twitter.com/ search?q=%23CyberMondayDeals &src=trend_click

#### HTTP Request Methods

The request methods that can be used when requesting information from a server are: 

- GET requests generally ask for the resource to be returned unchanged. Sending a request to for the homepage of Twitter would be a GET request.

- POST requests are used to make a submission to the resource. This type of request would typically ask the server to store new information, for example by writing it to a database. Posting a new tweet would be an example of a POST request.

- PUT requests are used to update a resource. Editing a tweet would be an example of a PUT request.

- DELETE requests are used to remove a resource. For example, deleting a tweet would be an example of a DELETE request.



### Defining Server and HTTP Responses

#### What is a server? 

A server is a computer or program that provides functionality for other programs or clients. It manages network resources and issues information and a message body based on the request made and type of client requesting. A server can be accessed by URL. 

When a client's request reaches the server, the server searches for the information and sends back the info requested with a status code and message body. The message body can be HTML (for browsers), JSON, and more. 

#### HTTP Responses:

![HTTP Status Codes](https://webrewrite.com/wp-content/uploads/2012/12/Screen-Shot-2017-02-26-at-6.54.41-AM.png)


#### Identifying HTML as a Response Type

When we received an initial response from Reddit, we notice that the response is formed into HTML content. This includes everything we see visually from buttons to colors, fonts, and more. There's other content types that we can receive: 

``` html
Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
```

Let's check out [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) for more on content types.



### Identifying and Defining JSON

JSON (JavaScript Object Notation) is a way of disseminating data about a program in an easy-to-understand and familiar way. It's a language-agnostic data format (an internet standard) typically used for APIs to organize and share data.

Let's check out [Reddit](https://reddit.com) and see what JSON response we get at [Reddit JSON](https://reddit.com/.json). 


### Defining Application Programming Interface \(API\)

#### What is an API? 
An API is the messenger that takes requests to tell an application what you want to do, and sends responses based on your request. It's the layer between clients and servers that execute the actions requested. 

Many different services that you use today (Twitter, Facebook, etc) have publicly available data that can be accessed through their APIs to gain information and create interaction with your app. 
 
Let's see a bit of code as practice making requests to an API through Ruby and examining the result. Flip over to `app.rb` for more. 

