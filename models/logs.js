const { default: mongoose } = require('mongoose');

const logsSchema = mongoose.Schema({ 
    title: String,
    entry: String,
    shipIsBroken: { 
        default: true,
        type: Boolean
    }
},
    {
        timestamps: true
    }
)

const Log = mongoose.model('Log', logsSchema);

module.exports = Log;

