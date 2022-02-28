const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" /> 
                </head>
                <div id="whole-body">
                    <body>
                        {/* <h1>{this.props.title}</h1> */}
                        {this.props.children}
                    </body>
                </div>
            </html>
        )
    }
}

module.exports = DefaultLayout;