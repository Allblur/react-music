import { createActions } from 'redux-actions'
import * as ACTION_TYPES from './action_types'
import fetchApi from '../../utils/fetch'

const {
	topplaylist,
	setlist,
	setindex
} = createActions(
	ACTION_TYPES.TOPPLAYLIST,
	ACTION_TYPES.SETLIST,
	ACTION_TYPES.SETINDEX
)

export default {
	topplaylist,
	setlist,
	setindex,
	getTopPlaylist(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(topplaylist(json)))
		}
	},
	getPlayerlist(url,args) {
		return dispatch => {
			return fetchApi(url,args).then(json => dispatch(setlist(json)))
		}
	}
}
