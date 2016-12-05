import { handleActions } from 'redux-actions'
import { SONG_INFOS, GET_LYRICS, GET_COMMENTS } from 'actions/action_types'

const reducer = handleActions({
	[SONG_INFOS]: (state, action) => ({
		songDetail: Object.assign({}, state.songDetail, {songinfos: action.payload})
	}),
	[GET_LYRICS]: (state, action) => ({
		songDetail: Object.assign({}, state.songDetail, {lyric: action.payload})
	}),
	[GET_COMMENTS]: (state, action) => ({
		songDetail: Object.assign({}, state.songDetail, {songcomments: action.payload})
	})
}, {
	songDetail: Object.assign({},{songinfos:{code: 100 }, lyric:{code: 100 }, songcomments:{code: 100 }})
})

export default reducer