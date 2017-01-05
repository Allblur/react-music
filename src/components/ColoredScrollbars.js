import React, { Component, PropTypes } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class ColoredScrollbars extends Component {
	static propTypes = {
		renderRandom: PropTypes.bool
	}

	constructor(props) {
		super(props)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.renderView = this.renderView.bind(this)
		this.renderThumb = this.renderThumb.bind(this)
		this.renderTrack = this.renderTrack.bind(this)
		this.renderThumbRandom = this.renderThumbRandom.bind(this)
		this.scrollTop = this.scrollTop.bind(this)
		this.getScrollTop = this.getScrollTop.bind(this)
		this.getScrollHeight = this.getScrollHeight.bind(this)
		this.getHeight = this.getHeight.bind(this)
		this.state = {
			top: 0
		}
	}

	getScrollTop() {
		return this.refs.scrollbars.getScrollTop()
	}

	getScrollHeight() {
		return this.refs.scrollbars.getScrollHeight()
	}

	getHeight() {
		return this.refs.scrollbars.getHeight()
	}
	
	scrollTop(top) {
		const { scrollbars } = this.refs
		scrollbars.scrollTop(top)
	}

	handleUpdate(values) {
		const { top } = values
		this.setState({ top })
	}

	renderView({style}) {
		const { top } = this.state
		const viewStyle = {
			padding: 15,
			backgroundColor: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(top * 255)}, ${Math.round(255)})`,
			color: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))})`
		}
		return (
			<div
				className="colored-scrollbars-viewbox"
				style={{ ...style, ...viewStyle }}/>
		)
	}

	renderThumbRandom({style}) {
		const { top } = this.state
		const thumbStyle = {
			backgroundColor: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))})`
		}
		return (
			<div
				className="colored-scrollbars-thumbbox"
				style={{ ...style, ...thumbStyle }}/>
		)
	}

	renderThumb({style}) {
		const thumbStyle = {
			backgroundColor: '#a1a1a1',
			borderRadius:'6px'
		}
		return (
			<div
				className="colored-scrollbars-thumbbox"
				style={{ ...style, ...thumbStyle }}/>
		)
	}

	renderTrack({style}) {
		const thumbStyle = {
			backgroundColor: '#6f6f6f'
		}
		return (
			<div
				className="colored-scrollbars-trackbox"
				style={{ ...style, ...thumbStyle }}/>
		)
	}

	render() {
		if (this.props.renderRandom) {
			return (
				<Scrollbars
					renderView={this.renderView}
					renderTrackHorizontal={this.renderTrack}
					renderTrackVertical={this.renderTrack}
					renderThumbHorizontal={this.renderThumbRandom}
					renderThumbVertical={this.renderThumbRandom}
					onUpdate={this.handleUpdate}
					{...this.props}
					ref="scrollbars"/>
			)
		}
		return (
			<Scrollbars
				renderThumbHorizontal={this.renderThumb}
				renderThumbVertical={this.renderThumb}
				onUpdate={this.handleUpdate}
				{...this.props}
				ref="scrollbars"/>
		)
	}
}

export default ColoredScrollbars