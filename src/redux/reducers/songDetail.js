import { handleActions } from 'redux-actions'
import { SONG_INFO } from 'actions/action_types'

const reducer = handleActions({
	[SONG_INFO]: (state, action) => ({
		songInfos: Object.assign({}, state.songInfos, action.payload)
	})
}, {
	songInfos: Object.assign({},{ code: 100 })
})

export default reducer