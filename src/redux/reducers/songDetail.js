import { handleActions } from 'redux-actions'
import { SONGINFO } from '../actions/action_types'

const reducer = handleActions({
	[SONGINFO]: (state, action) => ({
		songInfo: Object.assign({}, action.payload)
	})
}, {
	songInfo: Object.assign({},{ code: 100 })
})

export default reducer