# Intro to Inheritance

Today we're going to chat briefly about inheritance in Ruby and how to extend class functionality using inheritance.


## SWBATs 

- Define inheritance
- Understand how inheritance is used in Ruby
- Work through an example of inheritance to see its use in action


## What is Inheritance? 

Inheritance allows us to extend the functionality of one class into other classes. Within the concept of inheritance, typically we create: 

=> Parent Class (also called the base class or super class): Holds all the base attributes and information for other associated classes. 

=> Child Class (also called the subclass or derived class): Holds both the base attributes from the parent class as well as new attributes specific to that class.

**For instance, what's going on here?**

![Ruby Inheritance Diagram](https://d2aw5xe2jldque.cloudfront.net/books/ruby/images/animal_hierarchy.jpg)

- In this diagram, animal is the super class from which fish and mammal inherit. Mammal is a subclass for animal, but a super class for cat and dog, types of animals (with information inherited from all animals and mammals) that carry their own attributes as well.


So inheritance allows us to take all of the goodness from one class and use it for other subclasses. How is this implemented in Ruby? 

Fun fact: 



## Understanding how inheritance is used in Ruby

Often times in Ruby we create hierarchical classes that need content from a previous class to run, as well as perform new methods specific to that class. 

We use inheritance to keep our code DRY, legible, and consistent.

- What are some implementations of inheritance in real life that you can think of?

=> Parent and child, Dog and breed, Car/Make/Model

## Limitations of inheritance

In the case of some real life applications of inheritance, the abstraction within the domain problem does not work. For example: 

>You want to build a computer from parts.
We say that the computer has parts, but the individual parts aren't computers by themselves.
If you take them apart, they can't do their function.

In this example, instead of inheritance, we'd use `composition`. 

Composition builds classes with different parts that come together to perform a function. 

Here's an example of composition in action:

```rb
class Computer
  def initialize(memory, disk, cpu)
    @memory = memory
    @disk   = disk
    @cpu    = cpu
  end
end
```

The computer is given the parts it needs to work- these parts combined make a computer, and instances of a computer will have these parts. 

Composition is a 'has-a' relationship within class heirarchy in an application whereas inheritance is a 'is-a' relationship.


## Write SOLID code with inheritance

When writing code, engineers tend to follow generally accepted principles for consistency and performance. We've talked a little about and generally follow Robert C. Martin's SOLID design principles: 

- S ingle Responsibility Principle
- O pen/Closed Principle
- L iskov Substitution Principle
- I nterface Segregation Principle
- D ependency Inversion


In the instance of inheritance, the Liskov Substitution Principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. 


We'll see this in practice- to learn more about this principle, go [here](https://stackify.com/solid-design-liskov-substitution-principle/).



## Using inheritance in an example

Flip on over to `restaurant.rb` for to see a working example of inheritance.

After this simple example, let's build out another on `animal.rb` from scratch.



