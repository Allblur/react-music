import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routers from '../../routers'

class App extends Component {
	render() {
		const { store, history } = this.props
		return (
			<Provider store={store}>
				<Router history={history} routes={routers()}/>
			</Provider>
		)
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
}

export default App
