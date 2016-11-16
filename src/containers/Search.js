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
			type: 2,
			kws: ''
		}
	}

	componentWillMount() {
		//this.getSearchResults(2)
	}


	componentDidUpdate() {
		/*if (this.props.location.query.kw === this.state.kws) return false
		this.getSearchResults(2)*/
	}

	toSearch(t) {
		const kw = this.props.location.query.kw
		this.setState({
			type: t,
			kws: kw
		})
		this.props.history.push(`/search/s?kw=${kw}&t=${t}`)
	}

	renderStype() {
		const type = [
			{t: 2, val: '歌单'},
			{t: 1, val: '单曲'},
			{t: 4, val: '专辑'},
			{t: 3, val: '歌手'}
		]
		return type.map((elem, key) => {
			if (this.state.type === elem.t) {
				return (
					<li key={elem.t} className='active'>
						<span onClick={this.toSearch.bind(this,elem.t)}>{elem.val}</span>
					</li>
				)
			}
			return (
				<li key={elem.t}>
					<span onClick={this.toSearch.bind(this,elem.t)}>{elem.val}</span>
				</li>
			)
		})
	}

	render() {
		return (
			<div className="wrapper search-wrap">
				<div className="search-sf">
					<SearchForm
						getSearchResult={this.props.getSearchResult}
						push={this.props.history.push}
						val={this.state.kws}
					/>
				</div>
				<div className="result-wrap">
					<ul className="result-hd">
						{this.renderStype()}
					</ul>
					<div className="result-bd">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default Search