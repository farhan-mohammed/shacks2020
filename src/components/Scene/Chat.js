import React, { Component } from 'react';

export default class Chat extends Component {
	render() {
		const { list } = this.props;
		return (
			<div className="chat-con">
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
