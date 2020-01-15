# Intro to SQL
Today we're going to learn about SQL, the query language that talks to databases.

## SWBATs

- Identify what SQL is and how it works
- Learn about CRUD operations as a base concept for programming languages 
- Practice writing query statements to use CRUD operations on given database

#

### Preparing Your Environment

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data).
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below.

#

## Learning SQL 

#### What is SQL? 

Data is all around us. In the past, we held data in physical storage files, having one person retrieve pieces of information as they were requested. Now, we have automated processes using databases to create, store, and manipulate large volumes of data. 

SQL stands for `Structured Query Language`, a language created to talk to databases and retrieve information.

[![Watch this video for more about SQL!](https://img.youtube.com/vi/27axs9dO7AE/0.jpg)](http://www.youtube.com/watch?v=27axs9dO7AE "Learn SQL")


#### Why use SQL? 

SQL is the language of databases. Just like there are a lot of different solutions to domain problems we've encountered before, there are different types of databases for backend solutions: 

- sqlite: good for learning SQL
- NOSQL: check it out- has tradeoffs
- postgresql: front-end facing database
- mySQL/MariaDB: fork of a popular database, with improvements
- Microsoft SQL Server: proprietary solution
- Oracle: legacy/older solution

Most of these have visual browsers like the one we'll use today, and are dependent on what would be best for your project.

#

#### SQL-Related Definitions 

**Relational Database:** Allows us to identify and access data in relation to another piece of data in a database 

**Record:** Piece of data in a file 

**Field:** Each item in a record

**Primary Key:** Main field in a table, usually with an ID

#

## CRUD and SQL

#### What are CRUD Operations?

- Create 
- Read 
- Update
- Destroy/Delete

CRUD is an acronym that will be used many times throughout your programming career. Keep it in mind as we move forward!


#### Using CRUD with SQL Query Statements

What SQL queries would I use for: 

**Create**
=> CREATE TABLE, INSERT INTO, ASSIGN COLUMN

**Read**
=> SELECT

**Update**
=> UPDATE, ALTER TABLE

**Destroy/Delete**
=> DROP

# 

## Using Query Statements

- Select Queries 
    - [*] = all
    - use comma to separate column data requests

- Queries with Constraints 
    - use conditions like WHERE
    - can chain conditions using AND & OR

- Sorting and Filtering Queries 
    - can sort query results using ORDER BY, GROUP BY, DISTINCT, LIMIT and OFFSET

![SQL Query Cheat Sheet](https://hackr.io/blog/sql-cheat-sheet/thumbnail/large)

[And here's the best reference for query statements using SQLite!](https://www.sqlite.org/lang.html)

#

## Challenges

1. Write the SQL to return all of the rows in the artists table

```sql
SELECT * FROM artists;

```

2. Write the SQL to select the artist with the name "Black Sabbath"

```sql
SELECT * FROM artists WHERE name= "Black Sabbath"

```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql

CREATE TABLE fans (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

```

4. Write the SQL to alter the fans table to have a artist_id column with a data type of integer

```sql

ALTER TABLE fans ADD COLUMN artist_id INTEGER;

```

5. Write the SQL to add yourself as a fan of the Jimi Hendrix with an ArtistId of **94**

```sql

INSERT INTO fans VALUES ( 1, "Mitch", 169); 
INSERT INTO fans (name, artist_id) VALUES ("Lyn", 94);
 
```


**Try these on your own:**


6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql

```



7. Write the SQL to return fans that are not fans of the Black Eyed Peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

```sql

```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql


```

10.  Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql


```

For more practice, visit [SQLBolt](https://sqlbolt.com/)!