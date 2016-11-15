import { handleActions } from 'redux-actions'
import * as ACTION_TYPES from 'actions/action_types'

const reducer = handleActions({
	[ACTION_TYPES.PLAYLISTDETAIL]: (state, action) => ({
		playlistData: action.payload
	})
}, { playlistData: '' })

export default reducer