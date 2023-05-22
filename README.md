# Employee CRM

The front-end for a full-stack crm application that allows companies to keep track of their employees.

**Link to project:** https://employeecrm.vzmars.com/

**Back-End:** https://github.com/vzMars/employee-crm-api

![alt text](https://i.imgur.com/fgPhylk.png)

## How It's Made:

**Tech used:** TypeScript, React, Tailwind CSS

The front-end for this application was made using React and TypeScript. Tailwind CSS was used to style this application. This application is also mobile responsive and renders different components depending if the user is on a mobile or desktop device. React Router DOM was used to handle routing in this application. There are private routes that can only be accessed by users who aren't authenticated such as the Login and Signup page and private routes where only authenticated users can access. I have also created a 404 Not Found page for routes that don't exist in the application. The Context API was used to manage the authentication state and manage the state of employees that users have added. I have also created custom hooks for using the AuthContext and PostContext, registering the user, logging in the user and logging the user out.

## Optimizations:

I would like to add a filter option to the employee list so that it's easier to find employees as the list grows larger. It would also be nice to add a dashboard page route that displays the stats of all the employees a user has added.

## Lessons Learned:

I learned how to create a Java and Spring Boot Rest API for the back-end and get it working with a React and TypeScript front-end. There were no issues deploying the front-end to render and the back-end to railway.

## More Projects:

Take a look at these other projects that I have in my portfolio:

**GameBlog:** https://github.com/vzMars/gameblog

**MyBookList:** https://github.com/vzMars/mybooklist

**MangaNotifications:** https://github.com/vzMars/manga-notifications
