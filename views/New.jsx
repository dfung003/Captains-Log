const React = require('react');

const Default = require('./layout/Default.jsx')

class New extends React.Component {
    render() {
        return(
            <Default>
                <div>
                    <h1>New Entry</h1>
                    <nav>
                        <a href="/logs">Back to Logs Index</a>
                    </nav>

                    <form action="/logs" method="POST">
                        Title: <input name="title" type="text" /><br />
                        Entry: <br /><textarea name="entry"></textarea><br />
                        Is Ship Broken: <input name="shipIsBroken" type="checkbox"/><br />
                        <input type="submit" value="Create A Log" />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;