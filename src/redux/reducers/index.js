import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import menus from './menus'
import pageDetail from './pageDetail'
import player from './player'
import home from './home'
import search from './search'
import songDetail from './songDetail'

const reducers = combineReducers({
	menus,
	pageDetail,
	player,
	songDetail,
	home,
	search,
	routing: routerReducer
});

export default reducers
