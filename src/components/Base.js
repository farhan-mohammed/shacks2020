import React, { Component, Fragment } from 'react';
// import Dialect from './voice/Dialect';
const row = [
    { id: 'home', img: require('../media/icons/home.png') },
    {
        id: 'course',
        img: require('../media/icons/book.png'),
    },
    { id: 'chatbot', img: require('../media/icons/chatbot.png') },
    { id: 'settings', img: require('../media/icons/settings.png') },
];
export default class Base extends Component {
    render() {
        return (
            <Fragment>
                <div className="cnb-con">
                    {row.map(({ id, img }) => (
                        <div className="cnb-item" key={id}>
                            <img src={img} alt={id}></img>
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}
