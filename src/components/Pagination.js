import React, { Component, PropTypes } from 'react'

class Pagination extends Component {
	static propTypes = {
		pageCount: PropTypes.number.isRequired,
		offset: PropTypes.number,
		clickCallback: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props),
		this.state = {
			onNumber: 0,
		}
	}

	setArr() {
		let pnEleArr = []
		let i = 0
		while(i < this.props.pageCount) {
			pnEleArr[i] = ++i
		}
		return pnEleArr
	}

	renderPagination() {
		return this.setArr().map((el, key) => {
			return (
				<li key={key} className={this.state.onNumber === key ? 'active' : ''}>
					<span onClick={this.changeState.bind(this, key)}>{el}</span>
				</li>
			)
		})
	}

	changeState(n) {
		this.setState({onNumber: n}, () => {
			this.props.clickCallback(n)
		})
	}

	render() {
		return (
			<div className="pagination">
				<ul>{this.renderPagination()}</ul>
			</div>
		)
	}
}

export default Pagination