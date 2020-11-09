# MERN Stack + Redux Application
Memories, is an application used to highlight and manage your best memories. Built using the MERN STACK + Redux.
## Notes

- **M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
- **E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
- **R** = React (for the frontend. We'll use `Material-UI` for styling, `Redux` for managing UI's state,  and `axios` to connect to the frontend to the backend.
- **N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).

Memories App:

- Add a memory
- Update a memory
- Delete a memory
- Like a memory

To just get it running after you `git clone`, set up [MongoDB Atlas](https://github.com/hchiam/learning-mern-stack#mongodb-atlas), and then follow these CLI steps:

```bash
cd client
npm install
cd server
npm install
touch .env (take a look at .env.example for the structure)

# inside /client folder: (separate CLI tab)
npm start

# inside /server folder: (separate CLI tab)
npm start OR npm run start (which will execute 'nodemon index.js' for listening to the changes made to the backend)
