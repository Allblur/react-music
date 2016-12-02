import { handleActions } from 'redux-actions'
import * as ACTION_TYPES from 'actions/action_types'

const reducer = handleActions({
	[ACTION_TYPES.PLAYLIST_DETAIL]: (state, action) => ({
		playlistInfo: Object.assign({}, action.payload)
	})
}, { playlistInfo: Object.assign({}, {}) })

export default reducer