import { createActions } from 'redux-actions'

export const QUERY_MENU_LIST = 'QUERY_MENU_LIST'

const menuSetting = [{
	path: '/playlists',
	name: 'playlists',
	label: '歌单'
}, {
	path: '/fm',
	name: 'FM',
	label: 'FM'
}]
const { queryMenuList } = createActions({
	[QUERY_MENU_LIST]: () => Promise.resolve(menuSetting)
})

export default {queryMenuList}