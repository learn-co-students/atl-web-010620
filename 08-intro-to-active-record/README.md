# Intro to Active Record

We've learned about what SQL and an ORM does, and now we get to meet ActiveRecord- one of the most popular ORMs! 

## SWBATs
- Break down gemfiles, rakefiles, and boilerplates
- Describe Active Record and its uses
- Describe migrations
- Use methods within Active Record


### What's Active Record?

Active Record is a Ruby-flavored ORM (a data layer) that gives you the ability to:

- Represent models and their data.
- Represent associations between these models.
- Represent inheritance hierarchies through related models.
- Validate models before they get persisted to the database.
- Perform database operations in an object-oriented fashion.

It's opinionated and requires following a certain convention, but once followed makes configuration easy. The idea is that if you configure your applications in the very same way most of the time then this should be the default way. 


### Rake and File Structure
Let's learn about how Active Record is integrated in our app, and the main boilerplate information included within a program using Active Record. 


#### What is Rake? What is a Rakefile? 
A Rakefile defines tasks to be run from the command line- it encapsulates Ruby code that we want to execute **from the command line** .
  - To view tasks, run `rake -T` from your terminal
  - We're getting some tasks from the `sinatra/activerecord/rake` library which gives us easy to use ActiveRecord tasks (we can see this included in our gemfile). Let's see what these do by running `rake -T`


#### What is our file structure for programs using Active Record?
  - Gemfile
  - `app` folder holds our models––our Ruby classes
  - `db` directory holds migrations and seeds.rb file
  - `config` holds environment file
    - `require 'bundler'` and `Bundler.require` **load all of the gems in our Gemfile**
    - `ActiveRecord::Base.establish_connection` **sets up our database** (with options hash)
    - `require_all` **loads all of our application code**

---

### Migrations and Database Structure

If we want to create our first model \(ruby class + sql table\)––how to we bridge the gap between sql data and our ruby classes? 


  - We create a model- what is a model? 
    - A Ruby class.
  - We use Active Record's base- how
    - Check out `squirrel.rb`.
  - We run a migration- what is a migration? 
    - Some ruby code that alters our schema.
  - What is a schema? 
    - The structure of our database.
  - We start our database- to get our database set up, we need to use the `rake db:create_migration NAME=`

Check out the migrations in the `db/migrate` folder- each has a timestamp that identifies our migrations. We need these migrations to run in the order in which they were created.

  - What are the `change`, `up`, and `down` methods in migrations? These ActiveRecord methods allow us to alter our db schema.

  #### Migration Conventions
Here's some general conventions when creating a migration. 

  - **file name and class name must match up exactly, but in different case**––for example `TIMESTAMP_create_squirrels.rb` our db table is pluralized `squirrels` and our model (Ruby class) is singular

    ```ruby
    class Squirrel < ActiveRecord::Base
    end
    ```
  - create_table block argument is usually a `t`


---

### Creating and Augmenting Tables
Active Record automates a lot of tasks for us. Here are a few Q&A about what is happening in the background and how to use AR to work with your database. 

- How do I create a new table? 
  - We use the `create_table` method which takes a block- the block takes a table builder. 

- Why do we use the `t` variable?
  - It stands for a table's properties: `t.string :name` refers to a property on a table called name that is a string

- How do I run migrations (get all of the changes I made to the schema)? 
  - `rake db:migrate`

- What is the schema.rb file for? 
  - Our `schema.rb` is the **authoritative representation of the database structure.** Look at the `version` argument in the schema to see if it matches with the last successful migration timestamp. **These should match if your migration succeeded.**

- How do I delete my database (gracefully)? 
  - create a new migration
  - roll that migration back using `rake db:rollback`
  - delete the migration files you don't want to keep


### Connecting Models to ActiveRecord

- Our models (Ruby classes) appear in `app/models`
  - the convention is to have the model class name singular and the sql table plural––
  ```ruby
  class Squirrel < ActiveRecord::Base
  end
  ```
  but the table is called `Squirrels`
- Since our Ruby classes inherit from ActiveRecord, we have access to AR methods

  - We can use `Squirrel.create(name: 'Chippy')` to both **save our squirrel to the db** and **create a ruby object with that same data**
  - How do we suddenly know which attributes our squirrel is supposed to have?

- A nest belongs to a squirrel, so we need to create it with an squirrel_id: `Nest.create(name: 'Cozy Nestie', squirrel_id: 1)`

- How can we associate a boxer with a trainer and vice-versa?

```ruby
class Boxer < ActiveRecord::Base
  def trainer
    # Trainer.all.find{ |trainer| trainer.id == self.trainer_id }
    # OR use AR .find
    Trainer.find(self.trainer_id)
  end
end
#...
class Trainer < ActiveRecord::Base
  def boxers
    # Boxer.all.select{|boxer| boxer.trainer_id == self.id}
    # OR use AR .where
    Boxer.where(trainer_id: self.id)
  end
end
```

## A Better Way™️ with AR

- ActiveRecord Macros
  - Boxer model: `belongs_to :trainer`
  - Trainer model `has_many :boxers`
- These macros provide **even more** methods, like `boxer_instance.trainer` and `trainer_instance.boxers`
  - Since a boxer belongs_to a trainer it should have ONE trainer. Therefore the method is `.trainer`. A trainer HAS MANY boxers, therefore the method is `.boxers` pay attention to what is singular and what is plural.

### Important Methods from ActiveRecord

- Model.new
  - creates a new **RUBY** instance in local memory without persisting to the database
- Model.save
  - inserts or updates a **RUBY** instance to the db
- Model.create
  - Model.new + Model.save
  - A class method that creates a new **RUBY** instance AND saves it to the database
- Model.all
  - returns all instances (we wrote this by hand a million times)
- Model.first
  - instance with the lowest ID in the db
- Model.find
  - Finds a record by id and returns a Ruby instance––`Boxer.find(1)` returns the boxer with an id of 1
- Model.find_by\({ attribute: value }\)
  - can find by one attribute-value pair or multiple
  - `Boxer.find_by(name: 'Mike Tyson')` will return the boxer with a name of 'Mike Tyson'

For more, read the docs! [Active Record Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-up-down-methods) is a great resource.
