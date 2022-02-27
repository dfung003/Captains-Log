const React = require('react');

const Default = require('./layout/Default.jsx')

class Show extends React.Component {
    render(){
        const log = this.props.log;
        return(
            <Default>
                <div>
                    <h1>This is a Captain's Log for {log.title}</h1>
                    <a href="/logs">Go Back to the Index</a>
                    <p>{log.entry}</p>
                    <p>The {log.name} {log.shipIsBroken ? 'current ship is broken.' 
                    : 'current ship is fully functionable.'}</p>
                </div>
            </Default>
        )
    }
}

module.exports = Show;