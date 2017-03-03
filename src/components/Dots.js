import React, { Component } from 'react'

class Dots extends Component {
	render() {
		return (
			<span className="dots" className={this.props.active}></span>
		)
	}
}

export default Dots