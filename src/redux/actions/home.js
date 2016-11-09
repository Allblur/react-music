import { createActions } from 'redux-actions'
import * as ACTION_TYPES from './action_types'
import fetchApi from '../../utils/fetch'

const {
	topplaylist
} = createActions(
	ACTION_TYPES.TOPPLAYLIST
)

export default {
	topplaylist,
	getTopPlaylist(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(topplaylist(json)))
		}
	}
}
