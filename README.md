# Brain Vision Backend

The Brain Vision Backend repository contains the server-side code for the Brain Vision face recognition application. This README file provides an overview of the backend server, its dependencies, and instructions for setting it up and running it on your local machine.

## Dependencies

The Brain Vision backend server relies on the following dependencies:

- express.js: Fast, unopinionated, minimalist web framework for Node.js.
- bcrypt-nodejs: Library for hashing and salting passwords.
- cors: Middleware to enable Cross-Origin Resource Sharing.
- knex: SQL query builder for Node.js.
- pg: PostgreSQL client for Node.js.

## Installation

To install and run the backend server locally, clone the GitHub repository:

```
git clone https://github.com/bbocko/brain-vision-api.git
```

Navigate to the project's directory:

```
cd brain-vision-api
```

Install the dependencies using npm:

```
npm install
```

## Configuration

Before running the backend server, you need to provide some configuration settings.

Set up a PostgreSQL database and make sure you have the necessary credentials (host, port, username, password, and database name) to access it.

Create a .env file in the project's root directory.

Open the .env file in a text editor and add the following environment variables:

```
DATABASE_URL=YOUR_DATABASE_URL
DATABASE_HOST=YOUR_DATABASE_HOST
DATABASE_USER=YOUR_DATABASE_USER
DATABASE_PW=YOUR_DATABASE_PASSWORD
DATABASE_DB=YOUR_DATABASE_NAME
PORT=YOUR_SERVER_PORT
```

Replace YOUR_DATABASE_URL with the URL for your PostgreSQL database.

Replace YOUR_DATABASE_HOST, YOUR_DATABASE_USER, YOUR_DATABASE_PASSWORD, and YOUR_DATABASE_NAME with your PostgreSQL database credentials.

Replace YOUR_SERVER_PORT with the port number on which you want the server to run.


## Usage

To start the backend server, run the following command:

```
npm start
```

This will start the server on the specified port, as configured in the .env file.

## Endpoints

The Brain Vision backend server exposes the following API endpoints:

- POST /register: Handles user registration. It expects a request body with name, email, and password fields.
- POST /signin: Handles user sign-in. It expects a request body with email and password fields.
- PUT /image: Handles image submission for face detection. It expects a request body with a url field containing the image URL.

Please refer to the server's code and the respective controller files for more details on the request and response structures.

## Contributing

Contributions to the Brain Vision backend server are welcome! If you find any bugs or have suggestions for improvements, please open an issue on the GitHub repository or submit a pull request with your proposed changes.
