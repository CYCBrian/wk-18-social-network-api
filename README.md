<a name="top"></a>
# 18 NoSQL: Social Network API
![Static Badge](https://img.shields.io/badge/MIT-blue.svg?style=plastic)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation and Usage](#installation-and-usage)
- [Technologies Used](#technologies-used)
- [GitHub](#github)
- [License](#license)

## Overview

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and manage their friend list. The API is built using Express.js for routing, MongoDB for the database, and Mongoose ODM. It allows handling large amounts of unstructured data commonly seen in social networking platforms.

## Features

Using Insomnia or a similar app, you can interact with the server in the following ways:

### For Users:

- **Get All Users**: send a GET request with the endpoint of /api/users/

- **Get Single User**:  send a GET request with the endpoint of /api/users/:userId

- **Create New User**:  send a POST request with the endpoint of /api/users/ and the following req.body:

      {
        "username": "string",
        "email": "string"
      }
  
- **Update Single User**:  send a PUT request  with the endpoint of /api/users/:userId and the following req.body:

      {
        "username": "string",
        "email": "string"
      }

- **Delete Single User**:  send a DELETE request  with the endpoint of /api/users/:userId

- **Add New Friend**:  send a POST request with the endpoint of /api/users/:userId/friends/:friendId

- **Delete Single Friend**:  send a DELETE request with the endpoint of /api/users/:userId/friends/:friendId

### For Thoughts:

- **Get All Thoughts**: send a GET request with the endpoint of /api/thoughts/

- **Get Single Thought**:  send a GET request with the endpoint of /api/thoughts/:thoughtId

- **Create New Thought**:  send a POST request with the endpoint of /api/thoughts/ and the following req.body:

      {
	        "thoughtText": "String.",
	        "username": "String",
	        "userId": "objectId"
      }
  
- **Update Single Thought**:  send a PUT request  with the endpoint of /api/thoughts/:thoughtId and the following req.body:

      {
	        "thoughtText": "String."
      }

- **Delete Single Thought**:  send a DELETE request  with the endpoint of /api/thoughts/:thoughtId

- **Add New Reaction**:  send a POST request with the endpoint of /api/thoughts/:thoughtId/reactions/ and the following req.body:

      {
		"reactionBody": "Unsubscribe",
		"username": "CYCBrian"
      }

- **Delete Single Reaction**:  send a DELETE request with the endpoint of /api/thoughts/:thoughtId/reactions/:reactionId


## Demo

[Watch the backend in action!](https://drive.google.com/file/d/1ciMGvLvrWXe-Jy8kuurUV8s9hqx8AnW5/view?usp=sharing)

## Installation and Usage

To run the application:

1. Clone this repository.
2. Install dependencies using `npm install`.
6. Start the server by running `npm run start` in the terminal.
7. Interact with the server using Insomnia REST to view, add, update, and delete users, friends, thoughts and reactions.

## Technologies Used

- ![Static Badge](https://img.shields.io/badge/Javascript-orange?style=plastic)
- ![Static Badge](https://img.shields.io/badge/Node.js-green?style=plastic)
- ![Static Badge](https://img.shields.io/badge/Express.js-purple?style=plastic)
- ![Static Badge](https://img.shields.io/badge/MongoDB-blue?style=plastic)
- ![Static Badge](https://img.shields.io/badge/Mongoose-maroon?style=plastic)
- ![Static Badge](https://img.shields.io/badge/Insomnia-yellow?style=plastic)


## GitHub
[Visit my GitHub Profile here!](https://github.com/CYCBrian)

## License
The project is covered under the following license:
[MIT](https://choosealicense.com/licenses/mit)

- - -
[Back to Top](#top)
- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
