const React = require('react');

class Show extends React.Component {
    render(){
        const log = this.props.log;
        return(
            <div>
                <h1>This is a Captain's Log for {log.title}</h1>
                <a href="/logs">Go Back to the Index</a>
                <p>{log.entry}</p>
                <p>The {log.name} {log.shipIsBroken ? 'current ship is broken.' 
                : 'current ship is fully functionable.'}</p>
            </div>
        )
    }
}

module.exports = Show;