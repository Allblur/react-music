import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Lyric from './Lyric'
import { mstime } from '../utils/utils'
import '../assets/style/player.styl'

class Player extends Component {

	constructor(props) {
		super(props)
		this.actionKeyDown = this.actionKeyDown.bind(this)
		this.togglePlay = this.togglePlay.bind(this)
		this.actionPlay = this.actionPlay.bind(this)
		this.actionPrev = this.actionPrev.bind(this)
		this.actionNext = this.actionNext.bind(this)
		this.setAudioUrl = this.setAudioUrl.bind(this)
		this.setPlayModel = this.setPlayModel.bind(this)
		this.actionTimeupdate = this.actionTimeupdate.bind(this)
		this.setStime = this.setStime.bind(this)
		this.actionEnded = this.actionEnded.bind(this)
		this.actionLoadedmetadata = this.actionLoadedmetadata.bind(this)
		this.showSonglist = this.showSonglist.bind(this)
		this.getLyrics = this.getLyrics.bind(this)
		this.state = {
			playerState: false,
			playerStateFrist: true,
			songduration: '00:00', //音频时长
			songcurrentTime: '00:00', //播放时间
			progressValues: '0px', //播放进度条值 0px
			currentTime: 0,
			activeSongname: '',
			lyric: '',
			showSonglist: false
		}
	}

	componentDidMount() {
		const audio = ReactDOM.findDOMNode(this.refs.audio)
		document.addEventListener('keydown',this.actionKeyDown,false)
		audio.addEventListener('loadedmetadata', this.actionLoadedmetadata, false)
		audio.addEventListener('timeupdate', this.actionTimeupdate, false)
		audio.addEventListener('ended', this.actionEnded, false)
		audio.addEventListener('error', this.actionNext, false)
	}

	componentWillUnmount() {
		const audio = ReactDOM.findDOMNode(this.refs.audio)
		document.removeEventListener('keydown',this.actionKeyDown,false)
		audio.removeEventListener('loadedmetadata', this.actionLoadedmetadata, false)
		audio.removeEventListener('timeupdate', this.actionTimeupdate, false)
		audio.removeEventListener('ended', this.actionEnded, false)
		audio.removeEventListener('error', this.actionNext, false)
	}

	componentDidUpdate() {
		//componentDidUpdate
	}

	actionMouseClick(e) {
	    e.preventDefault()
	    e.stopPropagation()
	}

	actionKeyDown(e) {
	    const keyCode = e.keyCode || e.which;
	    const isInsideInput = e.target.tagName.toLowerCase().match(/input|textarea/);
	    if (isInsideInput) {
	      	return false
	    }
	    e.preventDefault()
	    if (keyCode === 32) {
	      	this.togglePlay()
	    } else if (keyCode === 37 || keyCode === 74) {
	      	this.actionPrev()
	    } else if (keyCode === 39 || keyCode === 75) {
	      	this.actionNext()
	    }
	}

	setStime() {
		this.setState({
			songduration: '00:00',
			songcurrentTime: '00:00',
			progressValues: '0px',
			activeSongname: ''
		})
	}

	actionPlay() {
		this.setState({
			playerState: true
		})
		setTimeout(() => {
			if (this.props.playerData.playerList.length > 0) {
				ReactDOM.findDOMNode(this.refs.audio).play()
				this.getLyrics(this.props.playerData.playerList[this.props.playerData.playerIndex].id)
			}
		},500)
	}

	togglePlay() {
		const audio = ReactDOM.findDOMNode(this.refs.audio)
		if (this.props.playerData.playerList.length !== 0 && audio.paused) {
			audio.play()
			this.setState({
				playerState: true
			})
		} else {
			audio.pause()
			this.setState({
				playerState: false
			})
		}
		this.setState({
			playerStateFrist: false
		})
	}

	actionTimeupdate(e) {
		const audio = e.currentTarget
		this.setState({
			songduration: mstime(audio.duration*1000),
			songcurrentTime: mstime(audio.currentTime*1000),
			progressValues: ((audio.currentTime / audio.duration) * 100) + '%',
			currentTime: audio.currentTime
		})
		this.actionLoadedmetadata()
	}

	actionLoadedmetadata() {
		const playerList = this.props.playerData.playerList
		const index = this.props.playerData.playerIndex
		this.setState({
			activeSongname: `${playerList[index].name} - ${playerList[index].artists[0].name}`
		})
	}

	actionEnded(e) {
		const playerM = this.props.playerData.playerModel
		const audio = e.currentTarget
		const changeIndex = this.props.setindex
		const playerListLen = this.props.playerData.playerList.length
		if (playerM === 'loop') {
			this.actionNext()
		} else if (playerM === 'sloop') {
			this.actionPlay()
		} else {
			changeIndex(Math.floor(Math.random()*playerListLen))
			this.actionPlay()
		}
	}

	actionPrev() {
		const changeIndex = this.props.setindex
		const playerM = this.props.playerData.playerModel
		const index = this.props.playerData.playerIndex
		if (playerM === 'random') {
			changeIndex(Math.floor(Math.random()*this.props.playerData.playerList.length))
		} else if (playerM === 'sloop') {
			changeIndex(index)
		} else {
			changeIndex((index - 1) < 0 ? 0 : index - 1)
		}
		this.setStime()
		this.actionPlay()
	}

	actionNext() {
		const changeIndex = this.props.setindex
		const index = this.props.playerData.playerIndex
		const playerListLen = this.props.playerData.playerList.length
		const playerM = this.props.playerData.playerModel
		if (playerM === 'random') {
			changeIndex(Math.floor(Math.random()*playerListLen))
		} else if (playerM === 'sloop') {
			changeIndex(index)
		} else {
			changeIndex((index + 1) < playerListLen ? index + 1 : 0)
		}
		this.setStime()
		this.actionPlay()
	}

	actionClickPlay(index) {
		if (this.props.playerData.playerIndex === index) return false
		this.props.setindex(index)
		this.setStime()
		this.actionPlay()
	}

	setAudioUrl() {
		const { playerIndex, playerList } = this.props.playerData
		return playerList.length === 0 ? '' : playerList[playerIndex].mp3Url
	}

	setPlayState() {
		const playerStatus = this.state.playerState ? 'playing' : 'paused'
		return `toggle-play-btn ${playerStatus}`
	}

	setPlayModel() {
		const playerModel = this.props.playerData.playerModel
		if (playerModel === 'loop') {
			this.props.setmodel('sloop')
		} else if (playerModel === 'sloop') {
			this.props.setmodel('random')
		} else {
			this.props.setmodel('loop')
		}
	}

	setPlayModelType() {
		return `toggle-playmodel-btn ${this.props.playerData.playerModel}`
	}

	setSondInfoClass(i) {
		return i === this.props.playerData.playerIndex ? 'song-list active' : 'song-list'
	}

	toSongdetailPage(songId) {
		this.props.history.push(`/songDetail/${songId}`)
	}

	renderSonglist(playerList) {
		return playerList.map((elem, key) => {
			return (
				<li className={this.setSondInfoClass(key)} key={key} onClick={this.actionClickPlay.bind(this,key)}>
					<span className="to-play-btn"></span>
					<span className="song-info">{elem.name} - {elem.artists[0].name}</span>
				</li>
			)
		})
	}

	showSonglist() {
		if (!this.state.showSonglist) {
			this.getLyrics(this.props.playerData.playerList[this.props.playerData.playerIndex].id)
		}
		this.setState({
			showSonglist: !this.state.showSonglist
		})
	}

	getLyrics(songId) {
		if (!songId) return false
		const url = `/getlyric/${songId}/`
		this.props.getJsondata(url).then((d) => {
			this.setState({
	        	lyric: d.lrc ? d.lrc.lyric : ''
	        })
		})
	}

	setPmStyle() {
		return `iconfont icon-${this.props.playerData.playerModel}`
	}

	setPStyle() {
		const playerStatus = this.state.playerState ? 'playing mp' : 'paused mp'
		if (this.state.playerStateFrist) {
			return "iconfont icon-paused mp"
		}
		return `iconfont icon-${playerStatus}`
	}

	renderPlayer() {
		const { playerList, playerIndex } = this.props.playerData
		const style = {
			width: this.state.progressValues
		}
		return (
			<div  className="player-wrap">
				<div className="player">
					<div className={this.state.showSonglist ? "songandlrc" : "hide"}>
						<div className="sl-hd">
							<div className="slhd-fl">
								<span>播放列表({playerList.length})</span>
							</div>
							<div className="slhd-fr">
								<span>{playerList[playerIndex].name}</span>
							</div>
						</div>
						<div className="player-info">
							<div className="player-song-list">
								<ul>
									{this.renderSonglist(playerList)}
								</ul>
							</div>
							<div className="player-lyric">
								<Lyric
									currentTime={this.state.currentTime}
									lyric={this.state.lyric} 
								/>
							</div>
						</div>
					</div>
					<div className="player-btn">
						<div className="player-btnwp">
							<div className="player-control">
								<a className="playPrev" onClick={this.actionPrev}><i className="iconfont icon-prev"></i></a>
								<a className={this.setPlayState()} onClick={this.togglePlay}>
									<i className={this.setPStyle()}></i>
								</a>
								<a className="playNext" onClick={this.actionNext}><i className="iconfont icon-next"></i></a>
							</div>
							<div className="player-song-info">
								<div className="song-album">
									<img src={playerList[playerIndex].album.picUrl} />
								</div>
								<div className="player-in">
									<div className="player-baras">
										<p onClick={this.toSongdetailPage.bind(this, playerList[playerIndex].id)}>
											{this.state.activeSongname}
										</p>
									</div>
									<div className="player-barw">
										<div className="player-sc">
											<span>{this.state.songcurrentTime}</span>
										</div>
										<div className="player-bar">
											<div className="player-barhr" style={style}></div>
										</div>
										<div className="player-sd">
											<span>{this.state.songduration}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="player-menu">
								<a className={this.setPlayModelType()} onClick={this.setPlayModel}>
									<i className={this.setPmStyle()}></i>
								</a>
								<a className="song-lyric" onClick={this.showSonglist}>
									<i className="iconfont icon-songlist"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
		const { playerList } = this.props.playerData
		return (
			<div>
				{playerList && playerList.length > 0 ? this.renderPlayer() : ''}
				<audio src={this.setAudioUrl()} ref="audio" id="audio" preload="metadata" className="hide"></audio>
			</div>
		)
	}
}

export default Player