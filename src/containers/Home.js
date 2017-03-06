import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/home'
import PlaylistCard from 'components/PlaylistCard'
import Slide from 'components/Slide'

@connect(
	state => ({
		...state.home,
		...state.player
	}),
	actions
)
class Home extends Component {
	constructor(props) {
		super(props),
		this.state = {
			playlistCategory: [
				{
					name: '全部',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '华语',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '流行',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '摇滚',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '舞曲',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '朋克',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '民谣',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '吉他',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '钢琴',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '小语种',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '清晨',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '旅行',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '怀旧',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '安静',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '清新',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '经典',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '影视原声',
					offset: 15,
					limit: 15,
					params: {}
				},{
					name: '电影',
					offset: 15,
					limit: 15,
					params: {}
				}
			],
			activeCategoryName: '全部'
		}
	}

	componentWillMount() {
		this.props.topplaylist({})
		this.props.getTopPlaylist('/topplaylists/?offset=15&limit=15')
	}

	toggleCategory(name) {
		if (name === this.state.activeCategoryName) return false
		this.setState({
			activeCategoryName: name
		}, () => {
			this.props.topplaylist({})
			this.props.getTopPlaylist(`/topplaylists/?category=${name}&offset=15&limit=15`)
		})
	}

	actionLink(id) {
		const url = `/playlist/${id}`
		this.props.history.push(url)
	}

	renderActegory() {
		return this.state.playlistCategory.map((category, key) => {
			return (
				<li key={key} onClick={this.toggleCategory.bind(this, category.name)}>
					<span className={category.name === this.state.activeCategoryName ? 'red-btn' : 'gra-btn'}>{category.name}</span>
				</li>
			)
		})
	}

	renderPlaylistCard() {
		const plArr = this.props.topPlaylistData.list instanceof Array ? this.props.topPlaylistData.list : []
		const playlistId = this.props.playerData.playerList.length > 0 ? (+this.props.playerData.playerList[0].playlistId) : 0
		if (plArr.length === 0) {
			return ([1,2,3]).map((elem, key) => {
				return (
					<li className="loading mtpx30 playlist-card" key={key}>
						<div className="waiting">
							<div className="rect1"></div>
							<div className="rect2"></div>
							<div className="rect3"></div>
							<div className="rect4"></div>
							<div className="rect5"></div>
						</div>
					</li>
				)
			})
		}
		return plArr.map((item, key) => {
			return(
				<PlaylistCard
					coverImgUrl={item.coverImgUrl}
					name={item.name}
					description={item.description}
					playCount={item.playCount}
					subscribedCount={item.subscribedCount}
					shareCount={item.shareCount}
					tags={item.tags}
					id={item.id}
					getPlayerlist={this.props.getPlayerlist}
					setindex={this.props.setindex}
					playlistId={playlistId}
					actionLink={this.actionLink.bind(this, item.id)}
					key={item.id}
				/>
			)
		})
	}

	render() {
		const opts = [{
			src: 'http://p3.music.126.net/AwqCSHxSkryqKzz82-h7nw==/109951162859760120.jpg'
		},{
			src: 'http://p3.music.126.net/SG4fqv-Ky45apsgqDvZbCA==/109951162862859702.jpg'
		},{
			src: 'http://p3.music.126.net/ReRkyVpcqeKCzxTVUvENAg==/109951162857949886.jpg'
		}]
		const baseWidth = 1000
		
		return (
			<div className='pab65 wrapper'>
				<div className="playlist-category">
					<ul>
						{this.renderActegory()}
					</ul>
				</div>
				<div className="mtem1 playlist-item">
					<ul>{this.renderPlaylistCard()}</ul>
				</div>
			</div>
		)
	}
}

export default Home
