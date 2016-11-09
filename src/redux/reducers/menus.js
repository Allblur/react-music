import { handleActions } from 'redux-actions'
import {QUERY_MENU_LIST} from 'actions/menus'

const reducer = handleActions({
	[QUERY_MENU_LIST]: (state, action) => ({
		list: action.payload
	})
}, {})

export default reducer