import { createActions } from 'redux-actions'
import * as ACTION_TYPES from './action_types'
import fetchApi from '../../utils/fetch'

const {
	playlistDetail,
} = createActions(
	ACTION_TYPES.PLAYLIST_DETAIL
)

export default {
	playlistDetail,
	getPlayerlistInfo(url,args) {
		return dispatch => {
			return fetchApi(url,args).then(json => dispatch(playlistDetail(json)))
		}
	}
}
