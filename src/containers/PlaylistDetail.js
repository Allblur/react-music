import React, { Component } from 'react'
import { useRoutes } from 'react-router'
import { connect } from 'react-redux'
import actions from 'actions/playlistDetail'
import PlaylistItem from 'components/PlaylistItem'
import '../assets/style/playlistDetail.styl'

@connect(
	state => state.playlistDetail,
	actions
)
class PlaylistDetail extends Component {
	constructor(props) {
		super(props),
		this.state = {
			playlistId: ''
		}
	}
	componentWillMount() {
		this.getInfo()
	}

	componentDidUpdate() {
		if (this.state.playlistId === this.props.params.playlistId) return false
		this.getInfo()
	}

	getInfo() {
		this.setState({playlistId: this.props.params.playlistId}, () => {
			this.props.playlistDetail({})
			const url = `/playlistdetail/${this.props.params.playlistId}/`
			this.props.getPlayerlistInfo(url)
		})
	}

	createList(lists) {
		if (lists.length > 0) {
			return lists.map((elem, key) => {
				return (
					<PlaylistItem picUrl={elem.album.picUrl} name={elem.name} artName={elem.artists[0].name} key={key} />
				)
			})
		}
	}

	render() {
		const data = this.props.playlistInfo
		if (data && data.list) {
			return (
				<div className='detailWrap'>
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
export default PlaylistDetail
