const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");



const app = express();
app.use(helmet());
app.use(morgan('tiny'));

app.get("/", (req,res) => {
    res.send("Be honest")
})



app.listen(3000, () =>{
    console.log("Being Honest at 3000")
}
)

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("dale")

});

const Journal = mongoose.model('journal', { name: String });

const nyt = new Journal({ name: 'The new york times' });
nyt.save().then(() => console.log('Working'));