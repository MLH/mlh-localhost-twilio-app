# MLH Localhost: Build Apps for Twilio

The live demo app for the workshop MLH Localhost: Build Apps for Twilio is hosted here. Read more below! 

## How to test the deployed solution:

From your phone send any message to `+1 (312) 967-9068` in order to start the flow.

## Tecnologies used in this project

### NodeJS
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. NodeJS was the platform in which we built this application.

### [Twilio](https://www.twilio.com/)
Twilio is a cloud communications platform as a service company. Twilio allows software developers to programmatically make and receive phone calls, send and receive text messages, and perform other communication functions using its web service APIs. We used twilio as a SMS based proxy between the user and the API.

### NPM packages used

#### [body-parser](https://www.npmjs.com/package/body-parser)
Is a Node.js body parsing middleware, it parses incoming request bodies in a middleware before your handlers. We used it to parse the body content of the Twilio request.

#### [dotenv](https://www.npmjs.com/package/dotenv)
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. We used it to allow us to add centralize our environment variables in a single file.

#### [express](https://www.npmjs.com/package/express)
Fast, unopinionated, minimalist web framework for node. This is the framework with which we built the application.

#### [twilio](https://www.npmjs.com/package/twilio)
The node package to communicate with Twilio. We used it to communicate with our users through twilio.


### How to run this application:

![cool-image](http://www.clipular.com/c/5732095574671360.png?k=6icNfhx0MFvctELm2PQ7PGLQbx4)

### Want to learn more? 
Host your own workshop! localhost.mlh.io/