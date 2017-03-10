import React, { Component } from 'react'
import { useRoutes } from 'react-router'
import { connect } from 'react-redux'
import actions from 'actions/playlistDetail'
import PlaylistItem from 'components/PlaylistItem'
import Loading from 'components/Loading'
import { tsnumb } from '../utils/utils'
import '../assets/style/playlistDetail.styl'

@connect(
	state => ({
		...state.playlistDetail,
		...state.player
	}),
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
					<PlaylistItem
						songData={elem}
						setindex={this.props.setindex}
						setlist={this.props.setlist}
						addsong={this.props.addsong}
						key={key}
					/>
				)
			})
		}
	}

	render() {
		const data = this.props.playlistInfo
		if (data && data.list) {
			return (
				<div className='wrapper detailWrap'>
					<div className="pl-dec">
						<div className="pl-img">
							<img src={data.list.coverImgUrl} alt={data.list.name} />
						</div>
						<div className="detail-info">
							<h3>{data.list.name}</h3>
							<div className="pl-count">
								<span>
									创建：{data.list.creator.nickname}
								</span>
								<span>
									播放：{tsnumb(data.list.playCount)}
								</span>
								<span>
									订阅：{tsnumb(data.list.subscribedCount)}
								</span>
								<span>
									分享：{tsnumb(data.list.shareCount)}
								</span>
							</div>
							<div className="description">
								<p>{data.list.description}</p>
							</div>
						</div>
					</div>
					<div className="pl-song-name">
						<div className="pl-num">
							<span className="span p-play">歌单列表({data.list.tracks.length})</span>
							<span className="span p-name">歌名</span>
							<span className="span p-albumName">专辑</span>
							<span className="span p-duration">时间</span>
						</div>
						<ul>
							{this.createList(data.list.tracks)}
						</ul>
					</div>
				</div>
			)
		}

		return (
			<div className='wrapper detailWrap'>
				<Loading />
			</div>
		)
	}
}
export default PlaylistDetail
