import React, { Component, PropTypes } from 'react'
import { tsnumb, mstime } from '../utils/utils'

class SearchResultItems extends Component {
	constructor(props) {
		super(props)
	}

	toDetailPage(url) {
		this.props.history.push(url)
	}

	render() {
		if (this.props.t === '1') {
			return (
				<div className="ri-div">
					{this.props.paginationData.map((v, k) => {
						return (
							<div className="ri-list ri-song-list" key={v.id} onClick={this.props.changePlaylist.bind(this,v.id)}>
								<span className="to-play-plailist">
									<i className="iconfont icon-paused"></i>
								</span>
								<span className="playlist-name">
									<a onClick={this.toDetailPage.bind(this,`/songdetail/${v.id}`)}>{v.name}</a>
								</span>
								<span className="album-name">{v.album.name}</span>
								<span className="song-duration">{mstime(v.duration)}</span>
							</div>
						)
					})}
				</div>
			)
		}
		return (
			<div className="ri-div">
				{this.props.paginationData.map((v, k) => {
					return (
						<div className="ri-list" key={v.id}>
							<span className="to-play-plailist" onClick={this.props.changePlaylist.bind(this,v.id)}>
								<i className="iconfont icon-paused"></i>
							</span>
							<span className="cover-imgurl"><img src={v.coverImgUrl} alt="歌单封面" width="60" /></span>
							<span className="playlist-name">
								<a onClick={this.toDetailPage.bind(this,`/playlistdetail/${v.id}`)}>{v.name}</a>
							</span>
							<span className="playlist-trackcount">{v.trackCount}首</span>
							<span className="creator-name">by&nbsp;&nbsp;<i>{v.creator.nickname}</i></span>
							<span className="playlist-count">收藏：{tsnumb(v.bookCount)}&nbsp;&nbsp;播放：{tsnumb(v.playCount)}</span>
						</div>
					)
				})}
			</div>
		)
	}
}

export default SearchResultItems