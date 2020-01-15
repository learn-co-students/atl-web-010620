# Intro to ORM- ORMs and Ruby
Today we're going to learn about bridging the gap between a database language (SQL) and Ruby using ORM (Object Relational Mapping).

## SWBATs

- Define Object Relational Mapping and identify how its used in Ruby
- Distinguish between ORM and SQL
- Learn about the ORM/Active Record Pattern
- Explain how the sqlite gem works 

#

### Define Object Relational Mapper/Mapping (ORM)

Here we'll work on some conceptual understanding of what an ORM is and how it relates to what we already know about Ruby.

#### Let's Review

Before we dive into understanding ORMs, let's revisit the SQL lecture: 

- What is a relational database? 

=> Database that shows the relationships between models. 

- What is SQL? 

=> Structured Query Language- a language that talks to the database/allows you to access data within a database. 


- What is CRUD in SQL? 

=> CRUD: Create, Read, Update, Delete

These operations are used to manipulate a database. 


Dope, we got this. From here, let's build on our knowledge. 



#### What's an ORM? 

ORM: Object Relational Mapper

- Object- something that has state (data) and behavior- an instance of a class
- Relational- something that defines (or the act of defining) some relation between two entities 
- Mapper/Mapping- aligning rows in the database to objects in an OOP language

Object-relational mapping is a technique for storing, retrieving, updating, and deleting from an object-oriented program using a relational database.

In object-oriented Ruby, we create classes and methods to manipulate Ruby OBJECTS. With ORM, we manipulate objects within a relational database using an OO data layer to manage translation. 

#


### Distinguish between ORM and SQL

#### Knowledge Check

What is SQL? 

SQL (Structured Query Language) is a language that allows you to create, read, update, or delete data in a database. 



#### How do we handle relationships in SQL? 

The ORM is a data layer that sits between your relational database and object-oriented program, to map database tables to classes and instances of classes to rows in our database. It's a design pattern created to organize our Ruby programs that connect to a database. 

Relations between tables are automatically loaded when a query is translated to its corresponding SQL.


##### Consider the relationships between books and authors.

Let's create a table of Books and Authors where each book has a single author. Books should have a title.



Books

| id  |   title                                   |   author_id |
|-----|-------------------------------------------|-------------|   
| 1   |    'Sula'                                 |       1     |  
| 2   |    'I Know Why the Caged Bird Sings'      |       2     |   
| 3   |    'The Bluest Eye'                       |       1     |   
| 4   |    'Beloved'                              |       1     |   

Authors

| id |    name              |
|----|----------------------|                 
| 1  |     'Toni Morrison'  |   
| 2  |     'Maya Angelou'   |  


The BELONGS TO table is what has the foriegn key. A foriegn key is a column or group of columns in a relational database table that provides a link between data in two tables.

"Each of these books have a single author. These books BELONG TO the following authors." 


What type of relationship is this? 

=>  one-to-many

Which table has the foriegn key? 

=>  Books (authors_id is the foriegn key)


----------

#### Here's another type of relationship to explore: 

Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

What type of relationship is this describing?

=> many-to-many



books

| id  |   title                                   |   author_id |
|-----|-------------------------------------------|-------------|   
| 1   |    'Sula'                                 |       1     |  
| 2   |    'I Know Why the Caged Bird Sings'      |       2     |   
| 3   |    'The Bluest Eye'                       |       1     |   
| 4   |    'Beloved'                              |       1     |   

authors

| id |    name              |
|----|----------------------|                 
| 1  |     'Toni Morrison'  |   
| 2  |     'Maya Angelou'   |


books_authors

| id  |   books_id   |   authors_id    |
|-----|--------------|-----------------|
| 1   |    1         |      1          |
| 2   |    2         |      2          |
| 3   |    3         |      1          |
| 4   |    4         |      1          |



##### SQL Knowledge Check

Write the SQL to find all books written by Toni Morrison given her name.

```sql
SELECT * FROM books
JOIN books_authors
ON books.id = books_authors.books_id
JOIN authors
ON authors.id = books_authors.authors_id
WHERE 
authors.name = "Toni Morrison"; 
```

----------

### Demonstrate that ORMs are the pattern connecting scripting languages and databases

So, ORM and SQL. How would we do SQL CRUD operations in Ruby? Let's think about the 4 ways we interact with data from SQL. 

#### Create: 

- SQL: INSERT INTO books (title, author_id) VALUES ('Cool Book', 1)
- RUBY: Book.new('Cool Book', 1)

#### Read: 

- SQL: SELECT * FROM books;
- RUBY: book.all


#### Update: 

- SQL: UPDATE books SET (title, author_id) VALUES ("CoolBookie", 1) WHERE book = 1
- RUBY: books.title = "CookBookie"

#### Destroy: 

- SQL: DESTROY books WHERE id = 2
- RUBY: books.destroy


------

#### ORM/ Active Record Patterns 

Here's the rules for one of the most popular ORMs, Active Record: 

- each table in our DB should correspond with a Ruby class (model)
- table is always plural, class (model) is singular
- instances of classes are rows in the DB
- columns are attributes on each instance



SO: 

This is how the mapping magic is happening! With an ORM, we're taking SQL queries and mapping them to Ruby objects directly, helping to automate query tasks. 

#

### Explain how the sqlite gem works 

#### What is (a) bundler? 

Bundler allows you to manage all of your Ruby gems. It makes sure you have all the gems you need for development. 

Learn more at bundler.io! 

#### That's cool, but what is a gem? 

A gem in Ruby is a piece of code written by someone else that helps you speed up your development process. It typically includes: 

- Documentation, which includes how to get the most out of the gem
- code (including tests and utilities needed to make them run)
- a gemspec, which shares version number, platform, and test information.


#### How does knowledge of bundler and gems help me to understand how SQL and Active Record relates? 

Like Bundler and ruby gems, Active Record works with the MODEL (in MVC- model view controller) to automate tasks that work with Ruby objects.

We know that SQL handles data in a database, and performs CRUD operations on them. 


#### Here's a textbook definition to break down Active Record: 

- Active Record ensures data access logic 
- as part of an object
- that will educate users of that object on how to write to and read from the database.


Active Record gives you the ability to:

- Represent models and their data.
- Represent associations between these models.
- Represent inheritance hierarchies through related models.
- Validate models before they get persisted to the database.
- Perform database operations in an object-oriented fashion.



Awesome! How's that feel? Got the correlation? If so, let's now jump into Active Record. 