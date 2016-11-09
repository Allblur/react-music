import React, { Component, PropTypes } from 'react'
import { tsnumb } from '../utils/utils'

class PlaylistCard extends Component {
	static propTypes = {
		coverImgUrl: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		playCount: PropTypes.number.isRequired,
		subscribedCount: PropTypes.number.isRequired,
		shareCount: PropTypes.number.isRequired,
		tags: PropTypes.array.isRequired,
		id: PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)
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