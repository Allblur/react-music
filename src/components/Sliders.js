import React, { Component, PropTypes } from 'react'

class Sliders extends Component {

	static defaultProps = {
		link: "javascript:;"
	};

	static propTypes = {
		link: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props)
	}

	render() {
		let aStyles = {
			width: document.documentElement.clientWidth + "px"
		}
		let picStyles = {
			backgroundImage: "url(" + this.props.src + ")"
		}
		return (
			<a href={this.props.link} className="slide-a" style={aStyles}>
				<div className="slide-li" style={picStyles}></div>
			</a>
		)
	}
}

export default Sliders