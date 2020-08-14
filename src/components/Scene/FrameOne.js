import React, { Component } from 'react';

export default class FrameOne extends Component {
    render() {
        return (
            <div
                className="content-frame"
                onClick={this.props.next}
                style={{ backgroundImage: 'url(' + require('../../media/f1.png') + ')' }}
            ></div>
        );
    }
}
