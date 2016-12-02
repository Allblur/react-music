import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/songDetail'
import Lyric from 'components/Lyric'
import Comments from 'components/Comments'

@connect(
	state => state.songDetail,
	actions
)
class SongDetail extends Component {
	constructor(props) {
		super(props),
		this.state = {
			songId: ''
		}
	}

	componentWillMount() {
		this.getInfo()
	}

	componentDidUpdate() {
		if (this.state.songId === this.props.params.songId) return false
		this.getInfo()
	}

	getInfo() {
		this.setState({
			songId: this.props.params.songId
		}, () => {
			this.props.getSonginfo(`/getsonginfo/${this.props.params.songId}/`)
		})
	}

	render() {
		if (this.props.songInfos.code) {
			return (
				<div className='loading'>加载中...</div>
			)
		}
		const songInfo = this.props.songInfos
		return (
			<div className='detailWrap'>
				<Lyric lyric={songInfo.lyrs.lrc.lyric} />
				<Comments comments={songInfo.comments} />
			</div>
		)
	}
}

export default SongDetail