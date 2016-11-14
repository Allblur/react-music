import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {createSelector} from 'reselect'
import { connect } from 'react-redux'
import Player from 'components/Player'
import Header from 'components/Header'
import menuActions from 'actions/menus'
import playerActions from 'actions/player'

@connect(
	state => ({
		...state.menus,
		...state.player,
		currentPath: createSelector(
			state => state.menus.list,
			state => state.routing.locationBeforeTransitions.pathname,
			(list = [], pathname) => list.length === 0 ? '' : list.filter(item => item.path === pathname).length > 0 ? pathname : list[0].path
		)(state)
	}), {
		actionGoHome: () => push('/'),
		queryMenuList: menuActions.queryMenuList,
		getPlayerlist: playerActions.getPlayerlist,
		setlist: playerActions.setlist,
		setindex: playerActions.setindex,
		setmodel: playerActions.setmodel,
		getlyric: playerActions.getlyric,
		songdetail: playerActions.songdetail,
		getSongLyric: playerActions.getSongLyric,
		getJsondata: playerActions.getJsondata,
		getSonginfo: playerActions.getSonginfo
	}
)
class Index extends Component {
	componentWillMount() {
		this.props.queryMenuList()
		this.props.getPlayerlist("/musiclist/77149051/")
	}

	render() {
		const menuList = this.props.list
		return (
			<div className='body'>
				<Header navItem={menuList} path={this.props.currentPath} onlogoClickAction={this.props.actionGoHome} router={this.props.route} />
				{this.props.children}
				<Player {...this.props} />
			</div>
		)
	}
}

export default Index