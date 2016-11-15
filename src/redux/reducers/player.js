import { handleActions } from 'redux-actions'
import * as PLAYER_TYPES from 'actions/action_types'

const reducer = handleActions({
	[PLAYER_TYPES.SETLIST]: (state, action) => ({
		playerData: Object.assign({},state.playerData,{playerList: action.payload.list ? action.payload.list : action.payload})
	}),

	[PLAYER_TYPES.SETINDEX]: (state, action) => ({
		playerData: Object.assign({},state.playerData,{playerIndex: action.payload})
	}),

	[PLAYER_TYPES.SETMODEL]: (state, action) => ({
		playerData: Object.assign({},state.playerData,{playerModel: action.payload})
	}),

	[PLAYER_TYPES.GETLYRIC]: (state, action) => ({
		playerData: Object.assign({},state.playerData,{lyric: action.payload})
	}),

	[PLAYER_TYPES.COMMENTS]: (state, action) => ({
		playerData: Object.assign({},state.playerData,{comments: action.payload})
	})
}, {
	playerData: Object.assign({},{ playerIndex: 0, playerModel: 'loop', playerList:[], lyric:'', comments:'' })
})

export default reducer