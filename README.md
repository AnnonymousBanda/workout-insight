# Workout Insight

Workout Insight is the first full-stack web application I've developed. It focuses on providing an overview of exercises with search functionality. The app utilizes data from RapidAPI and simplifies data fetching by using a custom backend API. The frontend is built with React.js, React-Router-DOM, and various hooks, while the backend is developed with Express.js. Tailwind CSS is used for styling.

## Features

- Search for exercises
- Overview of various exercises
- Custom backend API to fetch exercise data

## Technologies Used

- **Frontend**: React.js, ReactDOM, React Hooks
- **Backend**: Express.js
- **Styling**: Tailwind CSS
- **API**: RapidAPI
- **Build Tools**: concurrently, cross-env

## Project Structure

- `client`: Contains the React.js frontend code
- `server`: Contains the Express.js backend code

## Scripts

- `install`: Installs dependencies for both the server and client
- `server`: Starts the server
- `client`: Starts the client
- `start`: Concurrently starts both the server and client
- `build`: Builds the client with the build path set to the server's `src` directory
- `deploy`: Builds the client and starts the server

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AnnonymousBanda/workout-insight
    cd workout-insight
    ```

2. Install dependencies:
    ```sh
    npm run install
    ```

### Running the Application

1. Start the application:
    ```sh
    npm start
    ```

2. The client will be running on `http://localhost:3000` and the server on `http://localhost:8000`.

### Building the Application

1. Build the client and start the server that serves the frontend:
    ```sh
    npm run deploy
    ```

## License

This project is licensed under the ISC License.

## Author

Ankit Bhagat aka AnnonymousBanda
