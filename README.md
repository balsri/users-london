Node.js express API
node version v16.14.0
npm version 8.5.4

This calls an API and returns all users who are listed as either living in London,
or whose current long, lat coordinates are within 50 miles of London.

- To Start this application, pull the code from github repository and then run npm install.

- After running npm install, run npm start. The application will start running at Server
  running on port: http://localhost:5000

- To run the application in postman, open postman and run the following url in GET
  http://localhost:5000/users/London 

- This will return the JSON Response of all users who are listed as either living in London,
  or whose current longitude and lat coordinates are within 50 miles of London.

- You can also get the users in browser, once you start the application, by clicking on
  'Click here to load london users'. This will list the names of all users who are listed as either living in London,
  or whose current longitude and lat coordinates are within 50 miles of London.

- The JSON Response for the call will be found on the console of the browser.

- The application returns all users who are listed as either living in London, or whose 
  current long, lat coordinates are within 50 miles of London. First, the application 
  calls https://bpdts-test-app.herokuapp.com API with /users path to get all Users.
  Then the path /city/London/users is called to get all user listed as living in london.
  Then, it filters the users living within 50 miles of London, from all users, 
  based on their longitude and latitude. Finally, these two lists are combined, 
  sorted and the duplicates are removed, if any. The final response returns the users
  listed as either living in London, or whose current long, lat coordinates are within 
  50 miles of London.
  
- To calculate the users around London, Haversine formula is used based on latitude and longitude.
  The latitude for London is 51.509865, and the longitude is -0.118092, as per google maps.