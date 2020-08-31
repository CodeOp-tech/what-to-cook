# what-to-cook

An app that let's you search for recipes by inputting a couple of ingredients. You can log in and save those recipes as favourites.

## How to run the app

1. Fork or download the app and open the folder in a CLI
2. Install dependencies using `npm install`
3. Set up the nodeJS .env file with details on DB connection
4. To populate the DB run `npm run migrate`
5. Start the backend server with `npm run start`. The app is served at <http://localhost:5000/>
6. cd into the client folder and install dependencies with `npm install`
7. Start the frontend with `npm run start`. The app is served at <http://localhost:3000>

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

## DB schema

![DBschema](/images/db_schema.png)

## API routes

![routes](/images/api_routes.png)

## Libraries used

- jsonwebtoken
- bcryptjs
- react-router-dom

## Installation instructions

```cmd
npm install
cd client
npm install
```

Create database

```cmd
npm run migrate
```

Get API key from Spoonacular API
<https://spoonacular.com/food-api>

node .env file has to contain

```javascript
 DB_HOST=
 DB_USER=
 DB_NAME=
 DB_PASS=
 SECRETWORD=
```

react .env file has to contain

```javascript
REACT_APP_RECIPE_API_KEY=
```

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
