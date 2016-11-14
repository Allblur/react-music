import React, { Component, PropTypes } from 'react'
import { tsnumb } from '../utils/utils'
import '../assets/style/playlistCard.styl'

class PlaylistCard extends Component {
	static propTypes = {
		coverImgUrl: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		playCount: PropTypes.number.isRequired,
		subscribedCount: PropTypes.number.isRequired,
		shareCount: PropTypes.number.isRequired,
		tags: PropTypes.array.isRequired,
		id: PropTypes.number.isRequired,
		getPlayerlist: PropTypes.func.isRequired,
		setindex: PropTypes.func.isRequired,
		playlistId: PropTypes.number.isRequired
	}

	constructor(props) {
		super(props),
		this.playThatPlaylist = this.playThatPlaylist.bind(this)
	}

	playThatPlaylist() {
		this.props.getPlayerlist(`/musiclist/${this.props.id}/`)
		this.props.setindex(0)
	}

	renderIcons() {
		const id = this.props.id
		const playlistId = this.props.playlistId
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
			<span className="play-icon" onClick={this.playThatPlaylist}>
				<i className="icons"></i>
			</span>
		)
	}

	render() {
		const { coverImgUrl, name, description, playCount, subscribedCount, shareCount, tags, id } = this.props
		return (
			<li className="mtpx30 playlist-card">
				<div className="card-main">
					<div className="card-header">
						<span>
							<img src={coverImgUrl} alt={name}/>
						</span>
						{this.renderIcons()}
					</div>
					<div className="card-body">
						<h4>{name}</h4>
						<p>{description}</p>
						<div className="card-ft">
							<div className="counts">
								<span>播放：{tsnumb(playCount)}</span>
								<span>收藏：{tsnumb(subscribedCount)}</span>
								<span>分享：{tsnumb(shareCount)}</span>
							</div>
							<div className="tags">标签：{tags.join('、')}</div>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default PlaylistCard