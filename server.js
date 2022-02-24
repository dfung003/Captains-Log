// NOTE: I DID NOT INSTALL MONGOOSE PACKAGE OR PUSH TO GITHUB YET

require('dotenv').config()
console.log(process.env.MONGO_URI)

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3000;


// Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mongoose Connection (models)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Index route


// New route
app.get('/logs/new', (req, res) => {
    res.render('New')
})

// Delete route


// Update route


// Create route


// Edit route


// Show route


app.listen(3000, () => {
    console.log(`Listening on Port ${PORT}.`)
})
