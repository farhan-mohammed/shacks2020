import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Chat from './Chat';
export default class FrameChat extends Component {
	render() {
		return (
			<Fragment>
				<div className="content-header">
					<Header />
				</div>
				<div className="content-chat">
					<Chat
						list={[
							{
								s: 'nova',
								message: (
									<span>
										Hi, I am your banking assistant Nova. How can I help you?
										<br />
										Message !help for questions you can ask.
									</span>
								)
							},
							{
								s: 'me',
								message: <span>Hi Nova, what is the stock market?</span>
							},
							{
								s: 'nova',
								message: (
									<span>
										The stock market provides the opportunity to buy pieces of these publicly held
										companies – either from the company itself, or from other investors...
									</span>
								)
							},
							{
								s: 'nova',
								message: <span>To read more visit this article:</span>
							}
						]}
					/>
				</div>
				<div className="content-word">
					<div className="content-word__input">
						<input placeholder={'Message'} />
					</div>
					<div className="content-word__send">
						<img src={require('../../media/icons/send.png')} alt="" />
					</div>
					<div className="content-word__microphone">
						<img src={require('../../media/icons/micorphone.png')} alt="" />
					</div>
				</div>
			</Fragment>
		);
	}
}
