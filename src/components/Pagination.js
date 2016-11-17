import React, { Component, PropTypes } from 'react'
import SearchResultArtist from './SearchResultArtist'
import SearchResultSong from './SearchResultSong'
import SearchResultAlbum from './SearchResultAlbum'
import SearchResultPlaylist from './SearchResultPlaylist'

class Pagination extends Component {
	static propTypes = {
		t: PropTypes.number.isRequired,
		result: PropTypes.array.isRequired,
		offset: PropTypes.number
	}

	constructor(props) {
		super(props),
		this.state = {
			paginationData: [],
			pnEleArr: [],
			onNumber: 0,
			t: this.props.t,
		}
	}

	renderResult() {
		const paginationData = this.state.paginationData
		if (paginationData.length > 0) {
			switch(this.props.t){
				case 1:
					return (<SearchResultSong paginationData={paginationData} />)
				case 2:
					return (<SearchResultPlaylist paginationData={paginationData} />)
				case 3:
					return (<SearchResultArtist paginationData={paginationData} />)
				case 4:
					return (<SearchResultAlbum paginationData={paginationData} />)
			}

		}
		return (
			<li className="sr-error">
				<p>很抱歉，未能找到相关搜索结果！</p>
			</li>
		)
	}

	setPagination() {
		const {result, offset} = this.props
		let pnEleArr = []
		let paginationData = []
		if (result && result.length > 0) {
			const n = Math.ceil(result.length / offset)
			for (let i = 0; i < n; i++) {
				pnEleArr[i] = i + 1
				paginationData[i] = result.slice(i * offset, (i + 1) * offset)
			}
		}
		
		return {
			pnEleArr: pnEleArr,
			paginationDataArr: paginationData
		}
	}

	renderPagination() {
		const {pnEleArr} = this.setPagination()
		return pnEleArr.map((el, key) => {
			return (
				<li key={key} className={this.state.onNumber === key ? 'active' : ''}>
					<span onClick={this.changeState.bind(this, key)}>{el}</span>
				</li>
			)
		})
	}

	changeState(n) {
		const {paginationDataArr} = this.setPagination()
		this.setState({
			paginationData: paginationDataArr[n],
			onNumber: n,
			t: this.props.t
		})
	}

	render() {
		return (
			<div>
				{this.renderResult()}
				<div className="pagination">
					<ul>{this.renderPagination()}</ul>
				</div>
			</div>
		)
	}
}

export default Pagination