import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/songDetail'
import Lyric from 'components/Lyric'
import Comments from 'components/Comments'
import Loading from 'components/Loading'
import '../assets/style/playlistDetail.styl'

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
			this.props.songInfos({})
			this.props.getSongInfo(`/getsonginfo/${this.props.params.songId}/`)
		})
	}

	render() {
		const {songinfos} = this.props.songDetail
		if (songinfos.comments && songinfos.lyrs.lrc) {
			return (
				<div className='wrapper detailWrap'>
					<div className="pl-dec">
						<div className="pl-img">
							<img src={songinfos.album.picUrl} alt={songinfos.name} />
						</div>
						<div className="detail-info">
							<h3>{songinfos.name} - {songinfos.artists[0].name}</h3>
							<div className="song-lyric">
								<Lyric lyric={songinfos.lyrs.lrc.lyric} />
							</div>
						</div>
					</div>
					<Comments comments={songinfos.comments} />
				</div>
			)
		}
		return (
			<div className='wrapper detailWrap'>
				<Loading />
			</div>
		)
	}
}

export default SongDetail