import React, { Component, PropTypes } from 'react'
import { mstime } from '../utils/utils'

class PlaylistItem extends Component {
	static propTypes = {
	}

	constructor(props) {
		super(props)
		this.toPlay = this.toPlay.bind(this)
	}

	toPlay() {
		this.props.addsong(this.props.songData)
		setTimeout(() => {
			this.props.setindex(0)
		},500)
	}

	render() {
		const {picUrl, name, albumName, duration, id} = this.props.songData
		const playlistId = Number(this.props.songData.playlistId)
		const artName = this.props.songData.artists[0].name
		return (
			<li className='playlist-info'>
				<div className="p-info">
					<span className="span p-play" id={id} onClick={this.toPlay}>播放</span>
					<span className="span p-name">{name} - {artName}</span>
					<span className="span p-albumName">{albumName}</span>
					<span className="span p-duration">{mstime(duration)}</span>
				</div>
			</li>
		)
	}
}

export default PlaylistItem