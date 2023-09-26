# Next.js Blog Website

Welcome to the Next.js Blog Website project! This project is a simple blog website built with Next.js, MongoDB, and Firebase Authentication. 

Important part: If you want to see the project you have to choose starter branch please pay attion this thing!

## Features

- User authentication with Auth.js Authentication.
- Posting and managing blog posts by Firebase and Mongo DB.
- View and interact with blog posts.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (and npm)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/) account for authentication setup.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Nyildizzz/Next-Blog/tree/starter
   cd nextjs-blog
npm install

2. Create a .env.local file in the project root and configure your environment variables, including your MongoDB connection string and Firebase API keys
env
Copy code
MONGODB_URI=your-mongodb-connection-string
MONGODB_DB=your-mongodb-database-name
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
FIREBASE_APP_ID=your-firebase-app-id


3. Start the development server:
   npm run dev

4. Open your web browser and navigate to http://localhost:3000 to access the blog website

 Usage
-Visit the website and sign in with your Firebase authentication.
-Create, edit, and manage blog posts.
-Interact with existing blog posts.

Contributing
Contributions to this project are welcome! Feel free to open issues or submit pull requests to help improve the project.


License
This project is licensed under the MIT License - see the LICENSE file for details.


