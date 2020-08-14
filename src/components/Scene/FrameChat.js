import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Chat from './Chat';
import ScotiaLink from './ScotiaLink';
import Axios from 'axios';
export default class FrameChat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			m: '',
			messages: [
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
							The stock market provides the opportunity to buy pieces of these publicly held companies –
							either from the company itself, or from other investors...
						</span>
					)
				},
				{
					s: 'nova',
					message: (
						<span>
							To read more visit this article:
							<ScotiaLink link="d" text="Understanding the stock market" />
						</span>
					)
				}
			]
		};
	}
	clickSend = () => {
		if (this.state.m === '') return;

		let { messages } = this.state;
		let pose = this.state.m;
		messages.push({ s: 'me', message: <span>{this.state.m}</span> });
		if (pose === '!help') {
			messages.push({
				s: 'nova',
				message: (
					<span>
						Currently I know terms related to{' '}
						<a href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/bonds.html">
							bonds
						</a>,{' '}
						<a href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/stocks.html">
							stocks
						</a>{' '}
						and ,<a href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/gics.html">
							GICs
						</a>{' '}
						so ask me about any terms related to these topics!
					</span>
				)
			});
			this.setState({ messages, m: '' });
			return;
		}
		this.setState({ m: '' });
		Axios.get(`https://nova-chat-bot.herokuapp.com/process?input=${pose}`)
			.then(({ data: { definition, link, reference } }) => {
				messages.push({
					s: 'nova',
					message: <span>{definition}</span>
				});
				messages.push({
					s: 'nova',
					message: (
						<span>
							To read more visit this article:
							<ScotiaLink link={reference} text={link} />
						</span>
					)
				});
				this.setState({ messages });
			})
			.catch((e) => {
				messages.push({ s: 'nova', message: <span>Sorry, I didn't catch that, please try again!</span> });
				this.setState({ messages });
			});
	};
	render() {
		return (
			<Fragment>
				<div className="content-header">
					<Header />
				</div>
				<div className="content-chat">
					<div className="d">
						<Chat list={this.state.messages} />
					</div>
				</div>
				<div className="content-word">
					<div className="content-word__input">
						<input
							placeholder={'Message'}
							onChange={(e) => {
								this.setState({ m: e.target.value });
							}}
							value={this.state.m}
						/>
					</div>
					<div className="content-word__send" onClick={this.clickSend}>
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
