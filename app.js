const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');
const cors = require('cors'); // Add CORS to allow requests from Streamlit

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/discussion-forum', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
