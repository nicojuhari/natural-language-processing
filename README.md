# Natural Language Processing
Evaluate a News Article with Natural Language Processing app - Udacity - Project 4


## What is doing this app?
The app will extract meaning and insight from textual content with ease.
Add a post or page URL in the input and the app will give insights. 


## How to install the app on your local
1. Download the files or Clone the Repo on your local machine
2. In the root folder run: ``` npm run build-prod ``` and ``` npm run start ```
3. Open the browser http://localhost:8081
4. Add the Post/Page URL in the input. The URL should start with the protocol.


## Important!!!
To be able to use the app, you should repalce in the src/server/index.js file the ```process.env.API_ID ``` and ```process.env.API_KEY``` with your  API Key and API ID from [Aylien API](https://aylien.com/text-api/) or create a local env file with ```npm dotenv``` to s


## Development environment
If you want to run the app in development mode, in the root run: ```npm run build-dev```.
The browser automatically will be open in http://localhost:8080
 

## This app has been created using:
- JavaScript for functions;
- SASS for styling
- Automatisation by [Webpack](https://webpack.js.org/) and Webpack Dev Server
