import React, { Component, PropTypes } from 'react'

class PlaylistList extends Component {
	static propTypes = {
		picUrl: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		artName: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		const { picUrl, name, artName } = this.props
		return (
			<li className='msuic-info'>
				<img src={picUrl} alt={name} width='60' height='60' />
				<div className="m-info">
					<h4 className="m-name">{name} - {artName}</h4>
				</div>
			</li>
		)
	}
}

export default PlaylistList