import React, { Component } from 'react';
import Base from './components/Base';
import FrameOne from './components/Scene/FrameOne';
import FrameTwo from './components/Scene/FrameTwo';
import FrameChat from './components/Scene/FrameChat';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: 0,
        };
    }
    componentDidUpdate() {
        console.log('f');
    }
    render() {
        const Frames = [
            <FrameOne next={() => this.setState({ cur: 1 })}></FrameOne>,
            <FrameTwo next={() => this.setState({ cur: 2 })}></FrameTwo>,
            <FrameChat></FrameChat>,
        ];

        return (
            <div className="bod">
                <img className="bod-phone" alt="" src={require('./media/phone.png')} />
                <div className="bod-content">
                    <div className="content">
                        {Frames[this.state.cur]}
                        <div className="content-base">
                            <Base></Base>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
