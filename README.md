# Fast Cart, an E-Commerce Back End

## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [Walk-Through Video](#walk-through-video)
  - [Github Repo](#github-repo)

## Description

This is a server side api capable of viewing, creating, updating, and deleting, new items for an online shop.

## Installation

**Note**:  This is strictly a back-end application.  You would need further client-side code to make it accessible to a user.

To install, first clone the repo to your local machine.  Next, install the node packages by running the following code in your terminal:

    npm install

Now you will need to set up a local database from the MySQL shell:

    mysql -u root -p

Enter your password when prompted, then enter the following code in the shell:

    source db/schema.sql;

Enter "quit" to exit the shell, then enter the following to seed the database:

    node seeds

Once seeding is complete, enter the following to start the server:

    node server.js

And you are finished.  Now you can use [Insomnia](https://insomnia.rest/) to test the routes!

## Technologies Used

 - [Node.js](https://nodejs.org/en/)
 - [MySQL2](https://www.npmjs.com/package/mysql2)
 - [Sequelize](https://sequelize.org/)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
 - [Insomnia](https://insomnia.rest/)

## Walk-Through Video

[Walk-Through Video Link](https://drive.google.com/file/d/1-7GM3tgzZbztaGp2cInDgtImzEVfU0pe/view)

## Github Repo

[Github Repo](https://github.com/blchase215/fast-cart)

