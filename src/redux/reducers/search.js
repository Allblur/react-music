import { handleActions } from 'redux-actions'
import { SEARCH_KW, SEARCH_RESULT, SEARCH_TYPE } from 'actions/action_types'

const reducer = handleActions({
	[SEARCH_RESULT]: (state, action) => ({
		searchData: Object.assign({}, state.searchData, {searchResult: action.payload})
	}),
	
	[SEARCH_KW]: (state, action) => ({
		searchData: Object.assign({}, state.searchData, {searchkw: action.payload})
	}),

	[SEARCH_TYPE]: (state, action) => ({
		searchData: Object.assign({}, state.searchData, {searchType: action.payload})
	})
}, {
	searchData: Object.assign({}, {searchResult: '', searchkw: '', searchType: 2})
})

export default reducer