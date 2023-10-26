# mvc
CMS-Style Blog Site
Description
This is a CMS-style blog site where developers can publish blog posts and comment on other developersâ€TM posts.

The site follows the MVC structure using Handlebars.js as the templating engine, Sequelize as the ORM, and express-session for authentication.

User Story


AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, existing posts, and navigation links  
WHEN I click links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I sign up  
THEN I can create a username and password  
WHEN I sign in
THEN I can view homepage, dashboard, and logout links  
WHEN I am signed in
THEN I can view, create, update, and delete posts
WHEN I enter a comment on a post
THEN the comment is saved and displayed with the post  
WHEN I am idle for a period of time
THEN I need to log back in before I can create, update, or delete posts




Installation
To install this application follow these steps:

Clone the repo
Run npm install
Start MySQL shell and source schema.sql
Run npm run seed to seed data
Run npm start to connect to db and start the server
Usage
Create an account or log in
View all blog posts on the homepage
View single post details and add comments
Access the dashboard to create, edit, and delete posts
Log out when finished
Built With
JavaScript
Node.js
Express.js
MySQL
Sequelize
Handlebars.js
express-session
bcrypt
Author
Nicolad Esquibel
