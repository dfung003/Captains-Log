require('dotenv').config()
console.log(process.env.MONGO_URI)

const Log = require('./models/logs.js')
const express = require('express');
const { default: mongoose } = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
// Middleware
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.body)
    next()
});

app.use(methodOverride('_method'))

// Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mongoose Connection (models)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// Index route
app.get('/logs', (req, res) => {
    Log.find({}, (err, foundLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                logs: foundLogs
            })
            console.log(foundLogs)
        }
    })

});

// New route
app.get('/logs/new', (req, res) => {
    res.render('New')
});

// Delete route
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(!err) {
            res.redirect('/logs')
        } else {
            res.status(400).send(err)
        }
    })
});

// Update route
app.put('/logs/:id', (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${req.params.id}`)
        }
    })
})

// Create route
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdLog)
            res.redirect('/logs') // change this to redirect to Show page
        }
    })

});

// Edit route
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Edit', {
                log: foundLog
            })
        }
    })
})

// Show route
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                log: foundLog
            })
        }
    })
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}.`)
})
