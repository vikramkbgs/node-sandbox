const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set 'views' directory for any views
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.set('view engine', 'ejs');
git 
// Create uploads directory if it doesn't exist
const uploadDirectory = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Define a route to render the upload.html file
app.get('/upload', (req, res) => {
  res.render('upload');
});

// Define a route to handle file upload POST requests
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully: ' + req.file.filename);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
