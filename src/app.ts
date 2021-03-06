import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('./client/build'));

app.get('/1', (req, res) => {
  res.end('<h1>Welcome to the app!</h1>');
});

app.listen(PORT);
