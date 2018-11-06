# node-quick-start

## Table of Contents

+ [Note](#note)
  + [Create Note](#create-note)
  + [Get Notes](#get-notes)
  + [Get Note](#get-note)
  + [Update Note](#update-note)
  + [Delete Note](#delete-note)
+ [Testing](#testing)

## Note

### Create Note

**Request:**

**POST:**

`/notes`

```json
    {
        "title":"Vokal Note",
        "content":"This is legit"
    }
```

**Response:**

```json
    {
        "_id": "5be0db71dda3400013ccd839",
        "title":"Vokal Note",
        "content":"This is legit",
        "createdAt": "2018-11-06T00:08:17.448Z",
        "updatedAt": "2018-11-06T00:08:17.448Z",
        "__v": 0
    }
```

### Get Notes

**Request:**

**GET:**

`/notes`

**Response:**

```json
    [
        {
            "_id": "5be0db71dda3400013ccd839",
            "title":"Vokal Note",
            "content":"This is legit",
            "createdAt": "2018-11-06T00:08:17.448Z",
            "updatedAt": "2018-11-06T00:08:17.448Z",
            "__v": 0
        },
        {
            "_id": "e0db71dda34003405I3ccd839",
            "title":"Vokal Note 2",
            "content":"This is legit too.",
            "createdAt": "2018-11-06T00:08:18.448Z",
            "updatedAt": "2018-11-06T00:08:18.448Z",
            "__v": 0
        }
    ]
```

### Get Note

**Request:**

**GET:**

`/notes/:id`

**Response:**

```json
    {
        "_id": "5be0db71dda3400013ccd839",
        "title":"Vokal Note",
        "content":"This is legit",
        "createdAt": "2018-11-06T00:08:17.448Z",
        "updatedAt": "2018-11-06T00:08:17.448Z",
        "__v": 0
    }
```

### Update Note

**Request:**

**GET:**

`/notes/:id`

```json
    {
        "title":"Jose's Note",
        "content":"Different Content"
    }
```

**Response:**

```json
    {
        "_id": "5be0db71dda3400013ccd839",
        "title":"Jose's Note",
        "content":"Different Content",
        "createdAt": "2018-11-06T00:08:17.448Z",
        "updatedAt": "2018-11-06T00:08:17.448Z",
        "__v": 0
    }
```

### Delete Note

**Request:**

**GET:**

`/notes/:id`

**Response:**

```json
    {
        "message": "Note deleted successfully!"
    }
```

## Tesing

I use `chai` by `mocha` and `sinon` for `mock` purposes. You can install them in your system by going to the root of your project and running the following command:

`npm install chai mocha sinon --save`

To see testing result run:

`sudo docker-compose build`

`sudo docker-compose run api npm test`
