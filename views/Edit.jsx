const React = require('react');

const Default = require('./layout/Default.jsx')

class Edit extends React.Component{
    render() {
        return (
            <Default>
                <h1>Edit the current log</h1>
                    <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                        Title: <input type="text" name="title" defaultValue={this.props.log.title}/><br />
                        Entry: <br /><textarea name="entry" defaultValue={this.props.log.entry}/><br />
                        Is Ship Broken?:
                        { this.props.log.shipIsBroken ?
                        <input type="checkbox" name="shipIsBroken" defaultChecked />:
                        <input type="checkbox" name="shipIsBroken"/> }
                        <br />
                        <input type="submit" value="Submit Changes"/>
                    </form>
            </Default>
        )
    }
}

module.exports = Edit;