import React, { Component } from 'react';
import Base from './components/Base';
import FrameOne from './components/Scene/FrameOne';
import FrameTwo from './components/Scene/FrameTwo';
import FrameChat from './components/Scene/FrameChat';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cur: 0
		};
	}
	componentDidUpdate() {
		console.log('f');
	}
	render() {
		const Frames = [
			<FrameOne next={() => this.setState({ cur: 1 })} />,
			<FrameTwo next={() => this.setState({ cur: 2 })} />,
			<FrameChat />
		];
		let col = {};
		if (this.state.cur === 2) {
			col = { backgroundColor: '#f6f6f6' };
		}
		return (
			<div className="bod">
				<div className="bod-left">
					<div className="blb">
						<div className="blb-tit">
							Scotia <span>iLearn</span>
						</div>
						<div className="blb-sub">Demo for Shacks 2020</div>
						<div className="blb-definiton">
							Nova is the smart assisstant of the education platform that allows anyone to ask questions
							about Scotiabank and the financial industry.
						</div>
						<div className="blb-instructions">
							Our proof of concept covers definitions of terms where you can ask questions such as:
							<ul>
								<li>What is a callable?</li>
								<li>Tell me about Reinvestment risk?</li>
							</ul>
							<br />
							Currently, the bot is knowledage of the terms on these sites:
							<ul>
								<li>
									<a href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/gics.html">
										GICs
									</a>
								</li>{' '}
								<li>
									<a href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/stocks.htm">
										Stocks
									</a>
								</li>{' '}
								<li>
									<a href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/bonds.html">
										Bonds
									</a>
								</li>
							</ul>
						</div>
						<div className="blb-links">
							<ul>
								<li>
									<a href="https://github.com/farhan-mohammed/shacks2020">GitHub </a>
									<ul stlye={{ fontFamily: 'inherit' }}>
										<li>For the source code of this website</li>
									</ul>
								</li>
								<li>
									<a href="https://www.figma.com/proto/ahDboeS5rTVZsp1HCHqt5N/SHacks-2020">Figma</a>
									<ul stlye={{ fontFamily: 'inherit' }}>
										<li>For our full prototype</li>
									</ul>
								</li>
								<li>
									<a href="https://share.vidyard.com/watch/H7szdHVzgdEsgxmKdN6nCN?">Vidyard</a>
									<ul stlye={{ fontFamily: 'inherit' }}>
										<li>For our video demo</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="blb-socials">
							<div>Our Team</div>
							<ul>
								<li>
									<a href="https://www.linkedin.com/in/chloe-maceda/">Chloe Maceda</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/farhanmoh/">Farhan Mohammed</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/vanessahoang9/">Vanessa Hoang</a>
								</li>{' '}
								<li>
									<a href="https://www.linkedin.com/in/vargheserg/">Varghese George</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<img className="bod-phone" alt="" src={require('./media/phone.png')} />
				<div className="bod-content">
					<div className="content" style={col}>
						{Frames[this.state.cur]}
						<div className="content-base">
							<Base />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
