import { handleActions } from 'redux-actions'
import * as ACTION_TYPES from 'actions/action_types'

const reducer = handleActions({
	[ACTION_TYPES.TOPPLAYLIST]: (state, action) => ({
		topPlaylistData: Object.assign({}, action.payload)
	})
}, { topPlaylistData: Object.assign({}, {}) })

export default reducer