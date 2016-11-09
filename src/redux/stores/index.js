import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import middleware from '../middleware'

export default initialState => {
	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(...middleware)
	)
	return store
}
