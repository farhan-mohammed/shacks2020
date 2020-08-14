import React, { Component, Fragment } from 'react';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="content-header">
                    <div className="cnh-con">
                        <div className="cnh-img">
                            <img src={require('../media/nova.png')} alt="nova" />
                        </div>
                        <div className="cnh-name">NOVA</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
