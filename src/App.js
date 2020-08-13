import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="bod">
                <img className="bod-phone" alt="" src={require('./media/phone.png')} />
                <div className="bod-content">
                    <div className="content">
                        <input></input>
                    </div>
                </div>
            </div>
        );
    }
}
