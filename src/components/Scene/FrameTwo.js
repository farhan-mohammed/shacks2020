import React, { Component } from 'react';

export default class FrameOne extends Component {
    render() {
        return (
            <div
                className="content-frame"
                onClick={() => {
                    console.log('f');
                    this.props.next();
                }}
                style={{ backgroundImage: 'url(' + require('../../media/f2.png') + ')' }}
            ></div>
        );
    }
}
