import React, { Component } from 'react';
import Base from './components/Base';
import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <div className="bod">
                <img className="bod-phone" alt="" src={require('./media/phone.png')} />
                <div className="bod-content">
                    <div className="content">
                        <div className="content-header">
                            <Header></Header>
                        </div>
                        <div className="content-chat">chat</div>
                        <div className="content-base">
                            <Base></Base>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
