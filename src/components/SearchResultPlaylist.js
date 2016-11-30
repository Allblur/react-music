import React, { Component, PropTypes } from 'react'
import { tsnumb } from '../utils/utils'

class SearchResultPlaylist extends Component {
	constructor(props) {
		super(props)
	}

	toPlaylist(pId) {
		this.props.getPlayerlist(`/musiclist/${pId}/`)
		this.props.setindex(0)
	}

	render() {
		return (
			<div className="result-item">
				<div className="ri-div">
					{this.props.paginationData.map((v, k) => {
						return (
							<div className="ri-list" key={v.id}>
								<span className="to-play-plailist" onClick={this.toPlaylist.bind(this,v.id)}><i className="iconfont icon-paused"></i></span>
								<span className="cover-imgurl"><img src={v.coverImgUrl} alt="歌单封面" width="60" /></span>
								<span className="playlist-name">{v.name}</span>
								<span className="playlist-trackcount">{v.trackCount}首</span>
								<span className="creator-name">by&nbsp;&nbsp;<i>{v.creator.nickname}</i></span>
								<span className="playlist-count">收藏：{tsnumb(v.bookCount)}&nbsp;&nbsp;播放：{tsnumb(v.playCount)}</span>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default SearchResultPlaylist