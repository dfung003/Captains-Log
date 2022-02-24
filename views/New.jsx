const React = require('react');

class New extends React.Component {
    render() {
        return(
        <div>
            <h1>New Log Page</h1>

            <form action="/logs" method="POST">
                Title: <input name="title" type="text" /><br />
                Entry: <input name="entry" type="textarea" /><br />
                Is Ship Broken: <input name="shipIsBroken" type="checkbox"/><br />
                <input type="submit" value="Create A Log" />
            </form>
        </div>
        )
    }
}

module.exports = New;