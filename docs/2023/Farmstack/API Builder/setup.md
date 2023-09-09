## Setting Up the Project for Development

To set up the project for development, you'll need to configure both the frontend and backend components. Follow these steps:

### 1. Fork the Repositories :fork_and_knife:

First, fork the project's repositories on GitHub to your own GitHub account. Use the following links to fork the repositories:

- [Fork Farmstack Frontend](https://github.com/digitalgreenorg/farmstack-frontend)
- [Fork Farmstack Backend](https://github.com/digitalgreenorg/farmstack-backend)

This will allow you to make changes and contribute back to both the frontend and backend.

### 2. Set Up the Django Backend :arrow_up:

#### Django Backend Setup Instructions

1. Create a virtual environment (venv) for the Django backend:

   ```
   python -m venv myenv
   ```

   Activate the virtual environment:

   - On Windows:

     ```
     myenv\Scripts\activate
     ```

   - On macOS and Linux:
     ```
     source myenv/bin/activate
     ```

2. Navigate to the backend directory of the project (`farmstack-backend` repository) and install the required Python packages:

   ```
   pip install -r requirements.txt
   ```

3. Set up the configuration for the database, environment variables, and any other necessary settings. Refer to the backend README or documentation for detailed instructions.

4. Initialize the database and run migrations:

   ```
   python manage.py migrate
   ```

5. Start the Django development server:
   ```
   python manage.py runserver
   ```

### 3. Set Up the React Frontend :arrow_up:

#### React Frontend Setup Instructions

1. Navigate to the frontend directory of the project (`farmstack-frontend` repository) and install the required Node.js packages:

   ```
   npm install
   ```

   or using Yarn:

   ```
   yarn install
   ```

2. Configure environment variables: Set up any necessary environment variables (e.g., API endpoints) as described in the frontend README or documentation.

3. Start the React development server:
   ```
   npm start
   ```
   or using Yarn:
   ```
   yarn start
   ```

### 4. Testing the Project 💥

For testing purposes, make sure to run unit tests, integration tests, or end-to-end tests as per the testing guidelines provided in the project's documentation for both the frontend and backend.

That's it! You should now have the project up and running locally for development and testing.
