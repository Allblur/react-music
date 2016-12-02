import React, { Component, PropTypes } from 'react'

class PlaylistItem extends Component {
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
			<li className='playlist-info'>
				<img src={picUrl} alt={name} width='60' height='60' />
				<div className="p-info">
					<h4 className="p-name">{name} - {artName}</h4>
				</div>
			</li>
		)
	}
}

export default PlaylistItem