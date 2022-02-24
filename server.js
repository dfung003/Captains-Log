// NOTE: I DID NOT INSTALL MONGOOSE PACKAGE OR PUSH TO GITHUB YET

require('dotenv').config()
console.log(process.env.MONGO_URI)

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3000;
// Middleware
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.body)
    next()
});

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
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    res.send(req.body)
    console.log(req.body)
});

// Edit route


// Show route


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}.`)
})
