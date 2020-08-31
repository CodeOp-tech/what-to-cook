# what-to-cook

An app that let's you search for recipes by inputting a couple of ingredients. You can log in and save those recipes as favourites.

## How to run the app

1. Fork or download the app and open the folder in a CLI
2. Install dependencies using `npm install`
3. Set up the nodeJS .env file with details on DB connection and a secret for encription (see below)
4. To populate the DB run `npm run migrate`
5. Start the backend server with `npm run start`. The app is served at <http://localhost:5000/>
6. cd into the client folder and install dependencies with `npm install`
7. add api key to react .env file. Get API key from <https://spoonacular.com/food-api> (see below)
8. Start the frontend with `npm run start`. The app is served at <http://localhost:3000>

## How to use the app

### Without user account creation

- click inside the search bar input at the top
- add ingredients separated by commas
- get back list of recipes you can use with those ingredients
- click on one recipe to get more details

### With user account creation

- create login on the "Create accout" section
- log in in the "Login" section
- click inside the search bar input at the top
- add ingredients separated by commas
- get back list of recipes you can use with those ingredients
- click on one recipe to get more details
- click on ✩ to save recipe to favourites
- access favourite recipes in the "Favourites" section
- click on recipe to view details
- click on ★ to remove recipe from favourites
- click on the "Logout" button to log out

## User stories

- user can search a recipe by ingredients
- user can create account
- user can log in
- user can save recipes and view them later

## Features

- Search for recipe

- Account creation

- Login/Logout

- Adding to Favourites

- Removing from Favourites

## DB schema

![DBschema](/images/db_schema.png)

## API routes to backend

![routes](/images/api_routes.png)

## Dependencies

- nodejs
- express
- react
- MySQL
- jsonwebtoken
- bcryptjs
- react-router-dom
- bootstrap

node .env

```javascript
 DB_HOST=
 DB_USER=
 DB_NAME=
 DB_PASS=
 SECRETWORD=
```

react .env

```javascript
REACT_APP_RECIPE_API_KEY=
```

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
