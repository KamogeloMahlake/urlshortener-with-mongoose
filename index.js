require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { Schema, model} = mongoose;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);
let id = 10;
const schema = new Schema({
  original_url: String,
  short_url: Number
});
let Url = model("Url", schema);

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.use(bodyParser.urlencoded({extended: false}))
app.post("/api/shorturl", async (req, res) => {
  if (/(^http.?:\/{2})/g.test(req.body.url))
  {

    const save = () => {
      let url = new Url({original_url: req.body.url, short_url: id});
      id += 1;
      res.json({original_url: url.original_url, short_url: url.short_url});
      url.save()
    };
    let checkExist = await Url.exists({original_url: req.body.url});
    if (checkExist)
    { 
      let checkUrl = await Url.findOne({original_url: req.body.url}) 
      res.json({original_url: checkUrl.original_url, short_url: checkUrl.short_url})
    }
    else
    {
      save();

    }
      
  }
  else
  {
    res.json({error: 'invalid url'});
  }
})

app.get("/api/shorturl/:link?", async (req, res) => {
  const data = await Url.findOne({short_url: req.params.link});
  res.redirect(data.original_url);
})
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
