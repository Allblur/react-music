import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/player'
import Lyric from 'components/Lyric'
import Comments from 'components/Comments'

@connect(
	state => state.songDetail,
	actions
)
class SongDetail extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.getSonginfo(`/getsonginfo/${this.props.params.songId}/`)
	}

	componentDidUpdate() {
		if (this.props.songInfo.id == this.props.params.songId) return false
		this.props.getSonginfo(`/getsonginfo/${this.props.params.songId}/`)
	}

	render() {
		if (this.props.songInfo.code) {
			return (
				<div className='loading'>加载中...</div>
			)
		}
		const songInfo = this.props.songInfo
		return (
			<div className='detailWrap'>
				<Lyric lyric={songInfo.lyrs.lrc.lyric} />
				<Comments comments={songInfo.comments} />
			</div>
		)
	}
}

export default SongDetail