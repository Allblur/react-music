import React, { Component } from 'react'
import { useRoutes } from 'react-router'
import { connect } from 'react-redux'
import actions from 'actions'
import PlaylistList from '../../components/PlaylistList'

@connect(
	state => state.pageDetail,
	actions
)
export default class PageDetail extends Component {
	componentWillMount() {
		this.props.playlistdetail('')
		const url = `/playlistdetail/${this.props.params.playlistId}/`
		this.props.getPlaylistInfo(url)
	}

	createList(lists) {
		if (lists.length > 0) {
			return lists.map((elem, key) => {
				return (
					<PlaylistList picUrl={elem.album.picUrl} name={elem.name} artName={elem.artists[0].name} key={key} />
				)
			})
		}
	}

	render() {
		const style = {
			margin: '24px 0 0',
			position: 'relative',
			paddingTop: '24px'
		}
		const data = this.props.playlistData
		if (data) {
			return (
				<div style={style} className='detailWrap'>
					<h3>{data.list.name}</h3>
					<img src={data.list.coverImgUrl} alt={data.list.name} width="200" height="200" />
					<div className="description">
						<p>{data.list.description}</p>
					</div>
					<div className="music-name">
						<ul>
							{this.createList(data.list.tracks)}
						</ul>
					</div>
				</div>
			)
		}

		return (
			<div className='loading'>正在加载中...</div>
		)
	}
}
