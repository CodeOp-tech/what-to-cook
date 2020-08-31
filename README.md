# what-to-cook

An app that let's you search for recipes by inputting a couple of ingredients.

## User flow

- input ingredients in the search bar
- get list of recipes (from external API)
- if you want to save a recipe you need to log in
- if you don't have a login you have to create one
- once you are logged in, you can access your saved recipes

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
