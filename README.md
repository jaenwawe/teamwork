- TeamWork
  A site to share algorithm challenges and solutions. Users can see challenges, list the corresponding solution information, and add both challenges and solutions.

Rails stores the User, Challenge, and Solution Models in a Redux store which avoids the need for a component higher in the component hierarchy to retrieve props that it will not use. Thunk, middleware for react, ensured that the Redux store was current with any incoming changes from client requests.

- User Stories
  A user signups for the site or logins in with currrent information to create an account.

  After logging in or signing up, the userr will see rows of challenges. They can immediately choose to view a challenges solution information or they can select the About Page or Logout.

  When the user selects an individual challenge from the rows of challenges, they they can add another solution. Here solution can mean hint, clarifying question, or a solution to the question. That will be added to a list of solution rows that display on the page. Then

- Models  
   User  
   Solutions
  Challenge

- Model Relationships
  User 1 -> _ Solutions _ <- 1 Challenge

- Configuration

  ruby 2.7.4p191
  Rails 6.1.4.4
  React-Bootstrap

  In the parent folder, run bundle install
  In the folder named Client, run npm start

- Database creation/initialization
  rails db:migrate db:seed


- Demo Video

https://youtu.be/1mru3KUyTGw