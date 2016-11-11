import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/home'
import PlaylistCard from 'components/PlaylistCard'

@connect(
	state => state.home,
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
		this.props.getTopPlaylist('/topplaylists/?offset=15&limit=15')
	}

	toggleCategory(name) {
		this.props.topplaylist({})
		this.props.getTopPlaylist(`/topplaylists/?category=${name}&offset=15&limit=15`)
		this.setState({
			activeCategoryName: name
		})
	}

	renderActegory() {
		return this.state.playlistCategory.map((category, key) => {
			return (
				<li key={key} onClick={this.toggleCategory.bind(this, category.name)}>
					<span className={category.name === this.state.activeCategoryName ? 'gre-btn' : 'gra-btn'}>{category.name}</span>
				</li>
			)
		})
	}

	renderPlaylistCard() {
		const plArr = this.props.topPlaylistData.list instanceof Array ? this.props.topPlaylistData.list : []
		if (plArr.length === 0) {
			return [1,2,3].map((elem, key) => {
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
					key={key}
				/>
			)
		})
	}

	render() {
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
