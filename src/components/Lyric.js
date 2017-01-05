import React, { Component, PropTypes } from 'react'
import { makeLyricArr } from '../utils/utils'

class Lyric extends Component {
	static propTypes = {
		currentTime: PropTypes.number,
		lyric: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	getNowPosition(arr, currentTime) {
		if (!currentTime) return null
		let nowPosition = 0
		for (let i = 0, j = arr.length; i < j; i++) {
			if (arr[i].time >= currentTime || arr[i].time === '') {
				nowPosition = i - 1
				return nowPosition
			}
		}
		nowPosition = arr.length - 1
		return nowPosition
	}

	renderLrc() {
		const lyric = this.props.lyric ? this.props.lyric : '没有歌词\n'
		const lrcArr = makeLyricArr(lyric)
		return lrcArr.map((elem, key) => {
			let position = this.getNowPosition(lrcArr, this.props.currentTime)
			let lca = position === key ? 'active' : ''
			return (
				<p key={key} className={lca}>{elem.word}</p>
			)
		})
	}

	render() {
		return (
			<div className="lyric">
				{this.renderLrc()}
			</div>
		)
	}
}

export default Lyric