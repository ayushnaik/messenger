# Real-Time Messaging App

This is a private real-time messaging application built using Node.js, WebSockets, Express.js, MongoDB, and React.js.

## Features

- **Real-Time Communication**: Utilizes WebSockets for instant messaging between users.
- **Private Messaging**: Allows users to exchange private messages securely.
- **User Authentication**: Provides secure login and registration functionalities.
- **Message History**: Stores chat history in MongoDB for users to access previous conversations.
- **Responsive UI**: Offers a responsive and intuitive user interface built with React.js.

## Prerequisites

Ensure you have the following installed:

- WebSockets
- MongoDB

## Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/ayushnaik/messenger.git
    ```

2. **Navigate to the project directory:**

    ```
    cd messenger
    ```

3. **Install dependencies for both the server and client:**

    ```
    # Install server dependencies
    cd messenger-backend
    npm install

    # Install client dependencies
    cd messenger-frontend
    npm install
    ```

## Configuration

1. **Server Configuration:**

    - Set up your MongoDB connection string in `.env`.

## Usage

1. **Start the server:**

    ```
    # From the server directory
    cd messenger-backend
    npm start
    ```

2. **Start the client:**

    ```
    # From the client directory
    cd messenger-frontend
    npm run dev
    ```

3. **Access the application in your browser at** `http://localhost:5173`.
