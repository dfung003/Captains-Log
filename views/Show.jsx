const React = require('react');

const Default = require('./layout/Default.jsx')

const moment = require('moment');

class Show extends React.Component {
    render(){
        const log = this.props.log;
        const date = moment(log.createdAt).format('MMM Do YYYY')
        return(
            <Default>
                <div>
                    <h1>{log.title}</h1>
                    <a href="/logs">Go Back to the Index</a>
                    <p>Date of Entry: {date}</p>
                    <p>{log.entry}</p>
                    <p>{log.name} {log.shipIsBroken ? 'Ship Status: INOPERABLE' 
                    : 'Ship Status: FULLY FUNCTIONAL'}</p>
                </div>
            </Default>
        )
    }
}

module.exports = Show;