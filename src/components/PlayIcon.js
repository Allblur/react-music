import React, { Component, PropTypes } from 'react'

class PlayIcon extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		playlistId: PropTypes.number.isRequired,
		actionClick: PropTypes.func
	}

	constructor(props) {
		super(props)
	}

	render() {
		const {id, playlistId} = this.props
		if (id === playlistId) {
			return (
				<div className="playing-icon">
					<div className="icons-group">
						<div className="icons-group-div">
							<i className="icons1"></i>
							<i className="icons2"></i>
							<i className="icons3"></i>
							<i className="icons4"></i>
							<i className="icons5"></i>
						</div>
					</div>
				</div>
			)
		}
		return (
			<span className="play-icon" onClick={this.props.actionClick}>
				<i className="icons"></i>
			</span>
		)
	}
}

export default PlayIcon