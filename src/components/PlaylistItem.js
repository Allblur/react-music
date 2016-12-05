import React, { Component, PropTypes } from 'react'
import { mstime } from '../utils/utils'

class PlaylistItem extends Component {
	static propTypes = {
		picUrl: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		artName: PropTypes.string.isRequired,
		playlistId: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
		duration: PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		const {picUrl, name, artName, playlistId, albumName, duration, id} = this.props
		return (
			<li className='playlist-info'>
				<div className="p-info">
					<span className="span p-play" id={id}>播放</span>
					<span className="span p-name">{name} - {artName}</span>
					<span className="span p-albumName">{albumName}</span>
					<span className="span p-duration">{mstime(duration)}</span>
				</div>
			</li>
		)
	}
}

export default PlaylistItem