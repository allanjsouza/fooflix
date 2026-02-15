# Fooflix

Simple movie catalog app built with the purpose for learning **GraphQL**. The repo has:

- `backend/`: an **Express.js** app connected to **MongoDB**
- `frontend/`: a simple **React** app

## Example of use

Setup the .env file with your MongoDB connect URL:

```
# .env file
DB_URI=mongodb://localhost:27017/mydatabase
```

On a terminal inside backend directory:

```bash
npm run dev

# You should see:
Server on port 4000!
MongoDB connected!
```

In a second terminal, inside frontend directory:

```bash
npm start
```

Then you should be able to navigate to http://localhost:3000 and see the app.
