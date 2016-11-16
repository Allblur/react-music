import React, { Component, PropTypes } from 'react'

class Pagination extends Component {
	static propTypes = {
		type: PropTypes.number.isRequired,
		result: PropTypes.array.isRequired,
		offset: PropTypes.number
	}

	constructor(props) {
		super(props),
		this.renderPagination = this.renderPagination.bind(this)
		this.renderResult = this.renderResult.bind(this)
		this.state = {
			paginationData: [],
			pnEleArr: [],
			onNumber: 0,
			t: 2
		}
	}

	componentDidmount() {
		this.changeState(0)
	}

	componentDidUpdate() {
		if (this.state.t === this.props.type) return false
		this.changeState(this.props.type)
	}

	renderResult() {
		const paginationData = this.state.paginationData.length > 0 ? this.state.paginationData : this.setPagination().paginationDataArr[0]
		if (paginationData && paginationData.length > 0) {
			return paginationData.map((elem, key) => {
				return (
					<li key={elem.id} className="sr-list">{elem.name}</li>
				)
			})
		}
		return (
			<li className="sr-error">
				<p>很抱歉，未能找到相关搜索结果！</p>
			</li>
		)
	}

	setPagination() {
		const {result, offset} =  this.props
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
			t: this.props.type
		})
	}

	render() {
		console.log('t=>'+this.props.type)
		return (
			<div>
				<div className="result-item">
					<ul>{this.renderResult()}</ul>
				</div>
				<div className="pagination">
					<ul>{this.renderPagination()}</ul>
				</div>
			</div>
		)
	}
}

export default Pagination