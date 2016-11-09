import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import Index from 'containers/Index'
import Home from 'containers/Home'
import SongDetail from 'containers/SongDetail'

export default () => (
	<Route path="/" component={Index}>
		<IndexRoute component={Home} />
		<Route path="songdetail/:songId" component={SongDetail} />
		<Redirect from="*" to="/" />
	</Route>
)
