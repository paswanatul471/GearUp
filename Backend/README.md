# Backend/README.md

## /users/register

### Description

This endpoint registers a new user.

### Method & Endpoint

POST /users/register

### Request Body

```json
{
  "fullname": {
    "firstname": "string (min length = 3)",
    "lastname": "string (optional, min length = 3)"
  },
  "email": "string (must be a valid email)",
  "password": "string (min length = 6)"
}

Response
201 Created
Returns a JSON object with a generated token and the newly created user:

{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}

400 Bad Request
Returns an array of validation errors:


{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email"
    }
  ]
}
```

POST /users/login

### Request Body

```json
{
  "email": "string (must be a valid email)",
  "password": "string (min length = 3)"
}


Example Responses
200 OK

{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}


400 Bad Request

{
  "error": [
    {
      "msg": "Invalid email",
      "param": "email"
    }
  ]
}

401 Unauthorized

{
  "message": "Invalid email or password"
}


```
