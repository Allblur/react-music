import { createActions } from 'redux-actions'
import * as ACTION_TYPES from './action_types'
import player from './player'
import fetchApi from '../../utils/fetch'

const {
	playlistDetail,
} = createActions(
	ACTION_TYPES.PLAYLIST_DETAIL
)

const {
	setlist,
	setindex,
	setmodel,
} = player

export default {
	playlistDetail,
	setlist,
	setindex,
	setmodel,
	getPlayerlistInfo(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(playlistDetail(json)))
		}
	}
}
