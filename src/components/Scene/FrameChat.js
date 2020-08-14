import React, { Component, Fragment } from 'react';
import Header from '../Header';
export default class FrameChat extends Component {
    render() {
        return (
            <Fragment>
                <div className="content-header">
                    <Header />
                </div>
                <div className="content-chat">chat</div>
            </Fragment>
        );
    }
}
