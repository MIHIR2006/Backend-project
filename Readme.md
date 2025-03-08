# MERN Backend Starter Template

## Tech Stack

[![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,mongodb)](https://skillicons.dev)


## Overview

This repository provides a **MERN** backend starter template featuring **Express** and **MongoDB**. It includes **authentication** (JWT-based) and **authorization** (role-based access control), making it easy to start building secure RESTful APIs for your application.

## Features

- **Express** for handling API routes and middleware.
- **MongoDB** for database integration using **Mongoose** ORM.
- **JWT Authentication** to manage user login and sessions.
- **Role-based Authorization** to control access to certain routes (e.g., Admin, User).
- **CORS** support for development environments.
- Configured with **Environment Variables** for sensitive data management.

## Prerequisites

Before you begin, ensure that you have the following tools installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A **MongoDB** instance (local or cloud, e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))


## Folder Structure

```
└── src
    └── controllers
        └── user.controller.js
    └── db
        └── index.js
    └── middlewares
        └── auth.middleware.js
        └── multer.middleware.js
    └── models
        └── User.model.js
        └── video.model.js
    └── routes
        └── user.routes.js
    └── utils
        └── ApiError.js
        └── ApiResponse.js
        └── asyncHandler.js
        └── cloudinary.js
    └── app.js
    └── constants.js
    └── index.js
```

## Getting Started

### Clone the Repository

Clone the repository to your local machine:

```bash
https://github.com/MIHIR2006/Backend-project.git
cd Backend-project.git
```

## Install Dependencies

```
npm install
# or
yarn install
```


## Configure Environment Variables

```

PORT=8000     # Server Port

MONGODB_URI=mongodb+srv://<your-username>:<your-password>@clustername.mongodb.net/<your-database-name>

CORS_ORIGIN=*  # Adjust this based on the allowed origins 

ACCESS_TOKEN_SECRET=<your-access-token-secret>  # Set a strong, random string as the access token secret
ACCESS_TOKEN_EXPIRY=1d  # Expiry time for access tokens (e.g., 1d, 1h, 7d)
REFRESH_TOKEN_SECRET=<your-refresh-token-secret>  # Set a strong, random string as the refresh token secret
REFRESH_TOKEN_EXPIRY=10d  # Expiry time for refresh tokens (e.g., 10d, 30d)

CLOUDINARY_CLOUD_NAME=<your-cloud-name>  # Cloud name from your Cloudinary account
CLOUDINARY_API_KEY=<your-api-key>  # API Key from your Cloudinary account
CLOUDINARY_API_SECRET=<your-api-secret>  # API Secret from your Cloudinary account
```

## Start the Server

```
npm run dev
# or
yarn run dev
```

