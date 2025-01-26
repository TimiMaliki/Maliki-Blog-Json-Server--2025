const jsonServer = require('json-server');
const cors = require('cors'); // Import CORS
const path = require('db.json');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Adjust the path to your db.json file
const middlewares = jsonServer.defaults();

app.use(cors()); // Use CORS middleware
app.use(middlewares);
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
