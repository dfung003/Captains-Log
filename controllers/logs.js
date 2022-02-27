const express = require('express');
const router = express.Router();
const Log = require('../models/logs.js')
// this router's base route is /logs
// Index route
router.get('/', (req, res) => {
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
router.get('/new', (req, res) => {
    res.render('New')
});

// Delete route
router.delete('/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(!err) {
            res.redirect('/logs')
        } else {
            res.status(400).send(err)
        }
    })
});

// Update route
router.put('/:id', (req, res) => {
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
router.post('/', (req, res) => {
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
router.get('/:id/edit', (req, res) => {
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
router.get('/:id', (req, res) => {
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

module.exports = router;