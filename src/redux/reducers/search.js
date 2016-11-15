import { handleActions } from 'redux-actions'
import { SEARCH_KW, SEARCH_RESULT } from 'actions/action_types'

const reducer = handleActions({
	[SEARCH_RESULT]: (state, action) => ({
		searchData: Object.assign({}, {searchResult: action.payload})
	}),
	
	[SEARCH_KW]: (state, action) => ({
		searchData: Object.assign({}, state.searchData, {searchkw: action.payload})
	})
}, {
	searchData: Object.assign({}, {searchResult: '', searchkw: ''})
})

export default reducer