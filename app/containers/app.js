/**
 * Created by admin on 11/10/2016.
 */
import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App