# Repositories API

A simple API that will handle repositories data. You can [download the postman collection.](https://www.getpostman.com/collections/7397530e9a76a3d0cd8c)

A repository has the following structure:

```json
{
    "title": "Repository",
    "url": "http://repository.example.com",
    "techs": [
        "Tech 1",
        "Tech 2",
        "Tech 3"
    ]
}
```

## Repositories 

---

## List repositories
Lists all the available repositories.

`GET /repositories`

### Response
- **Array<Repository>** - All repositories available

### Example Request
`GET /repositories`

### Example Response
`200 OK`

```javascript
[
    {
        "title": "Repository 1e898e42-1ac8-4d26-92e8-2c9d0e3f178b",
        "id": "a541f8cb-c566-46fb-bc88-52d3671f9c12",
        "likes": 23
    },
    {
        "title": "Repository b48fad61-eea3-417e-b122-b11674e3d29c",
        "id": "dded216f-4afd-4b68-a5fd-cb984eb3a744",
        "likes": 12
    }
]
```

## Create repository
Creates a repository and exposes it to the API.

`POST /repositories`

### Response
- **Repository** - The created repository.

### Example Request
`POST /repositories`

```javascript
{
    "title": "Repository",
    "url": "http://repository.example.com",
    "techs": [
        "Tech 1",
        "Tech 2",
        "Tech 3"
    ]
}
```

### Example Response
`201 Created`

```javascript
{
    "title": "Repository",
    "url": "http://repository.example.com",
    "techs": [
        "Tech 1",
        "Tech 2",
        "Tech 3"
    ],
    "id": "274331c9-bf4e-4036-8aa8-67294dc42e95",
    "likes": 0
}
```

## Edit repository
Edits a repositories' detail, such as title or url.

`PUT /repositories/{id}`

### Parameters
- **id** - Identifier for the repository

### Response
- **Repository** - The created repository with the applied changes.

### Example Request
`PUT /repositories/274331c9-bf4e-4036-8aa8-67294dc42e95`

```javascript
{
    "title": "Repository Test 123"
}
```

### Example Response
`200 OK`

```javascript
{
    "title": "Repository Test 123",
    "url": "http://repository.example.com",
    "techs": [
        "Tech 1",
        "Tech 2",
        "Tech 3"
    ],
    "id": "274331c9-bf4e-4036-8aa8-67294dc42e95",
    "likes": 0
}
```

## Delete repository
Deletes a repository.

`DELETE /repositories/{id}/like`

### Parameters
- **id** - Identifier for the repository

### Response
Returns nothing (204 No Content).

### Example Request
`DELETE /repositories/274331c9-bf4e-4036-8aa8-67294dc42e95`

### Example Response
`204 No Content` - Repository was successfully deleted.

## Likes

---

Adds a like to a repository.

`POST /repositories/{id}/like`

### Parameters
- **id** - Identifier for the repository

### Response
- **Repository** - The repository, with the updated likes count.

### Example Request
`POST /repositories/274331c9-bf4e-4036-8aa8-67294dc42e95/like`

### Example Response
`200 OK`

```javascript
{
    "title": "Repository Test 123",
    "url": "http://repository.example.com",
    "techs": [
        "Tech 1",
        "Tech 2",
        "Tech 3"
    ],
    "id": "274331c9-bf4e-4036-8aa8-67294dc42e95",
    "likes": 1
}
```