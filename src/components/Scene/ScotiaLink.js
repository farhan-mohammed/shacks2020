import React, { Component } from 'react';

export default class ScotiaLink extends Component {
	render() {
		return (
			<a className="sl" href={this.props.link}>
				<img src={require('../../media/scotia.png')} alt="" />
				<div>{this.props.text}</div>
			</a>
		);
	}
}
