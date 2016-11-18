import React, { Component, PropTypes } from 'react'
import { mstime } from '../utils/utils'

class SearchResultSong extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="result-item">
				<div className="ri-div">
				{this.props.paginationData.map((v, k) => {
					return (
						<div className="ri-list ri-song-list" key={v.id}>
							<span className="to-play-plailist"><i className="iconfont icon-paused"></i></span>
							<span className="playlist-name">{v.name}</span>
							<span className="album-name">{v.album.name}</span>
							<span className="song-duration">{mstime(v.duration)}</span>
						</div>
					)
				})}
				</div>
			</div>
		)
	}
}

export default SearchResultSong