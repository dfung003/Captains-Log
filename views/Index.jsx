const React = require('react');

class Index extends React.Component {
    render(){
        const logs = this.props.logs
        return(
            <div>
                <nav>
                    <a href="/logs/new">Go to create new log page</a>
                </nav>
                <h1>Captain's Logs</h1>
                    <ul>
                       {
                           logs.map((log) => {
                               return (
                                   <li key={`${log._id}`}>
                                        <a href={`/logs/${log._id}`}>{log.title}</a>
                                   </li>
                               )
                           })
                       } 
                    </ul>
                    
            </div>
        )
    }
}

module.exports = Index;