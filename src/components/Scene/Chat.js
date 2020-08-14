import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';
export default class Chat extends Component {
	componentDidMount() {
		this.scrollToBottom();
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}
	scrollToBottom() {
		animateScroll.scrollToBottom({
			containerId: 'chat',
			duration: 200
		});
	}
	sc;
	render() {
		const { list } = this.props;
		return (
			<div className="chat-con" id="chat">
				{list.map(({ s, message }) => {
					return (
						<div className={`chat-message ${s === 'nova' ? 'nova' : ''}`}>
							<div className="chat-bubble">{message}</div>
							<div className="chat-person">
								<img
									src={
										s === 'nova' ? (
											require('../../media/nova.png')
										) : (
											require('../../media/mecircle.png')
										)
									}
									alt=""
								/>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
