import { createActions } from 'redux-actions'
import * as PLAYER_TYPES from './action_types'
import fetchApi from '../../utils/fetch'
const {
	setlist,
	setindex,
	setmodel,
	getlyric,
	songinfo,
	comments
} = createActions(
	PLAYER_TYPES.SETLIST,
	PLAYER_TYPES.SETINDEX,
	PLAYER_TYPES.SETMODEL,
	PLAYER_TYPES.GETLYRIC,
	PLAYER_TYPES.SONGINFO,
	PLAYER_TYPES.COMMENTS,
)
export default {
	setlist,
	setindex,
	setmodel,
	getlyric,
	songinfo,
	comments,
	getPlayerlist(url,args) {
		return dispatch => {
			return fetchApi(url,args).then(json => dispatch(setlist(json)))
		}
	},
	getSongLyric(url) {
		return dispatch => {
			return fetchApi(url).then(json => dispatch(getlyric(json)))
		}
	},
	getJsondata(url) {
		return dispatch => {
			return fetchApi(url).then(json => Promise.resolve(json))
		}
	},
	getSonginfo(url) {
		return dispatch => {
			return fetchApi(url).then(json => dispatch(songinfo(json)))
		}
	},
	getComments(url) {
		return dispatch => {
			return fetchApi(url).then(json => dispatch(comments(json)))
		}
	}
}