const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api', (req, res, next) => {
  res.send("API Status: I'm awesome");
});

app.post('/api/email', (req, res, next) => {
  console.log(req.body);

  sendGrid.setApiKey(
    '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'
  );
  const msg = {
    // my mail,
    to: 'M81980@gmail.com',
    from: req.body.email,
    subject: 'Website Contact',
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log('error: ', err);
      res.status(401).json({
        success: false,
      });
    });
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server running on port${PORT}`);
});
