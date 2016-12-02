import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import Index from 'containers/Index'
import Home from 'containers/Home'
import SongDetail from 'containers/SongDetail'
import PlaylistDetail from 'containers/PlaylistDetail'
import Search from 'containers/Search'

export default () => (
	<Route path="/" component={Index}>
		<IndexRoute component={Home} />
		<Route path="search" component={Search} />
		<Route path="songdetail/:songId" component={SongDetail} />
		<Route path="playlistDetail/:playlistId" component={PlaylistDetail} />
		<Redirect from="*" to="/" />
	</Route>
)
