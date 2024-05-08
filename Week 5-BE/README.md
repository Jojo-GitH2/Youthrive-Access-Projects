# Week 5 - Backend Engineering Assignment

## 1. To set up a Node.js server from scratch, you can follow these steps:

- **Install Node.js**: Download and install Node.js from the official website (https://nodejs.org). Follow the installation instructions for your operating system.

- **Create a new project directory**: Open your terminal or command prompt and navigate to the desired location for your project. Use the `mkdir` command to create a new directory for your project.

- **Initialize a new Node.js project**: Inside the project directory, run the command `npm init` to initialize a new Node.js project. This will create a `package.json` file that will keep track of your project's dependencies and other metadata.

- **Install necessary packages**: Use the npm install command followed by the package name to install the required packages for your server. For example, to install Express, you can run `npm install express`.

- **Create a server file**: Create a new JavaScript file (e.g., `index.js`) in your project directory. This file will contain the code for your server.

- **Import required packages**: In your `server.js` file, use the `require` function to import the necessary packages. For example, to import Express, you can use `const express = require('express');`.

- **Set up the server**: Use the imported packages to set up your server. For example, with Express, you can create a new instance of the Express application using `const app = express();`.

- **Define routes and middleware**: Use Express (or other packages) to define routes and middleware for your server. Routes handle incoming requests, and middleware functions can perform additional processing on those requests.

- **Start the server**: Finally, use the `listen` method on your server instance to start listening for incoming requests. For example, with Express, you can use `app.listen(port, () => console.log(Server running on port ${port}));` to start the server on a specific port.

## 2. Purpose of using Express in setting up a server
The purpose of using a package like Express in setting up a server is to simplify the process of handling HTTP requests and building web applications. Express provides a set of features and middleware that make it easier to define routes, handle requests, and manage server-side logic. It abstracts away many low-level details, allowing developers to focus on building their application's functionality.

## 3. Nodemon and its purpose in a Node.js project
Nodemon is a utility that monitors for any changes in your source code and automatically restarts your server. This is used in the development process because it makes development more efficient by eliminating the need to manually stop and start the server every time you make a change.

In a Node.js project, when you run your application using the `node` command, you have to restart the process every time you make a change to your source code that you want to take effect. This can be a tedious process, especially in large applications with many files.

Nodemon simplifies this process. When you start your application with Nodemon (using the `nodemon` command instead of `node`), it runs your application and watches for any file changes in your directory or subdirectories. When it detects a change, it automatically restarts your application with the new code. This allows you to see the effects of your changes immediately.

To use Nodemon, you first need to install it. This is typically done globally (for your whole system) with the command `npm install -g nodemon`. After that, you can start your application with `nodemon` instead of `node`, like so: `nodemon server.js`.

