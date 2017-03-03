import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import Index from 'containers/Index'
import Home from 'containers/Home'
import SongDetail from 'containers/SongDetail'
import PlaylistDetail from 'containers/PlaylistDetail'
import Search from 'containers/Search'

function hasLogin() {
	return localStorage.getItem('login') === 'true'
}

function requireAuth(nextState, replaceState) {
	if (!hasLogin()) {
		replaceState({ nextPathname: nextState.location.pathname }, '/signIn')
	}
}

export default () => (
	<Route path="/" component={Index}>
		<IndexRoute component={Home} />
		<Route path="signIn" component={Home} />
		<Route path="search" component={Search} />
		<Route path="song/:songId" component={SongDetail} />
		<Route path="playlist/:playlistId" component={PlaylistDetail} />
		<Route onEnter={requireAuth} path="playlists" component={PlaylistDetail} />
		<Redirect from="*" to="/" />
	</Route>
)
