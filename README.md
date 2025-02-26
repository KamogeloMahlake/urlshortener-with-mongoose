# URL Shortener with Mongoose
## Description

This project is a URL shortener service built using Node.js, Express, and Mongoose. It allows users to shorten long URLs and redirect to the original URLs using the shortened links.

## Dependencies

- body-parser: ^1.19.0
- cors: ^2.8.5
- dotenv: ^8.2.0
- express: ^4.17.1

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/KamogeloMahlake/urlshortener-with-mongoose.git
   cd urlshortener-with-mongoose
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```sh
   MONGO_URI=your_mongo_db_uri
   ```

4. Start the server:
   ```sh
   npm start
   ```

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Enter a URL to shorten it.
3. Use the shortened URL to redirect to the original URL.

You can also use the following API endpoints:

- `GET /api/hello`: Returns a greeting message.
- `POST /api/shorturl`: Creates a shortened URL for the given original URL.
- `GET /api/shorturl/:link`: Redirects to the original URL for the given shortened link.

## Acknowledgements

Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.
