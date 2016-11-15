import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/search'
import SearchForm from 'components/SearchForm'
import '../assets/style/search.styl'

@connect(
	state => state.search,
	actions
)
class Search extends Component {
	constructor(props) {
		super(props),
		this.state = {
			searchType: 2
		}
	}

	componentWillMount() {
		if (!this.props.searchData.searchResult) {
			this.getSearchResults(2)
		}
	}

	getSearchResults(t) {
		const kw = this.props.location.query.kw
		this.props.getSearchResult('/sreach/', {params: {w: kw, t: t}})
		this.setState({
			searchType: t
		})
	}

	renderStype() {
		const type = [
			{t: 2, val: '歌单'},
			{t: 1, val: '单曲'},
			{t: 4, val: '专辑'},
			{t: 3, val: '歌手'}
		]
		return type.map((elem, key) => {
			if (this.state.searchType === elem.t) {
				return (
					<li key={elem.t} className='active'>
						<span onClick={this.getSearchResults.bind(this,elem.t)}>{elem.val}</span>
					</li>
				)
			}
			return (
				<li key={elem.t}>
					<span onClick={this.getSearchResults.bind(this,elem.t)}>{elem.val}</span>
				</li>
			)
		})
	}

	renderResult(result) {
		if (result && result.length > 0) {
			return result.slice(0, 10).map((elem, key) => {
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

	renderPagination(result) {
		let paginaArr = []
		if (result && result.length > 0) {
			const n = Math.ceil(result.length / 10)
			for (var i = 0; i < n; i++) {
				paginaArr[i] = i+1
			}
		}
		return paginaArr.map((el, key) => {
			return (
				<li key={key}><span>{el}</span></li>
			)
		})
	}

	render() {
		const result = this.props.searchData.searchResult.list
		return (
			<div className="wrapper search-wrap">
				<div className="search-sf">
					<SearchForm
						getSearchResult={this.props.getSearchResult}
						push={this.props.history.push}
						val={this.props.location.query.kw}
					/>
				</div>
				<div className="result-wrap">
					<ul className="result-hd">
						{this.renderStype()}
					</ul>
					<div className="result-bd">
						<div className="result-item">
							<ul>{this.renderResult(result)}</ul>
						</div>
						<div className="pagination">
							<ul>
								{this.renderPagination(result)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Search