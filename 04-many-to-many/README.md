# Ruby Many-to-Many Relationships
Yesterday we talked about how data can work together to form and express relationships. Today we'll explore a different type of relationship- many-to-many.

## SWBATs
- Implement both sides of a many to many relationship
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate single source of truth by not storing collections of objects on other objects
- Demonstrate single source of truth by not storing one object in multiple collections


## Digging into Many-to-Many Relationships
A many-to-many relationship describes a relationship between two models where one model `has many` of the other, and vice versa.


### What are some examples of many-to-many relationships? 
- Students and Teachers
- Recipes and Ingredients
- Products and Stores
- Planes and Airports
- websites and users 
- trains and stations

### Which relationship will we select to build out? 

=> Recipes and Ingredients


*Check out our code to see how we have built this many-to-many relationship.*