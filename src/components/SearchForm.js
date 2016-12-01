import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class SearchForm extends Component {
	static propTypes = {
		searchKw: PropTypes.func,
		getSearchResult: PropTypes.func,
		push: PropTypes.func.isRequired,
		val: PropTypes.string
	}

	constructor(props) {
		super(props),
		this.actionGoSearch = this.actionGoSearch.bind(this)
		this.actionKeyDown = this.actionKeyDown.bind(this)
	}

	componentDidMount() {
		document.addEventListener('keydown',this.actionKeyDown,false)
	}

	componentWillUnmount() {
		document.removeEventListener('loadedmetadata', this.actionKeyDown, false)
	}

	actionGoSearch() {
		const kw = ReactDOM.findDOMNode(this.refs.searchKeywords).value
		const t = localStorage.getItem("searchType") || 2
		if (kw === '') return false
		this.props.push(`/search?kw=${kw}&t=${t}`)
	}

	actionKeyDown(e) {
	    const keyCode = e.keyCode || e.which
	    if (keyCode === 13) {
	      	this.actionGoSearch(e)
	    }
	}

	render() {
		return (
			<div className="search-form">
				<div className="search-wrap">
					<input type="text"
						defaultValue={this.props.val ? this.props.val : ''}
						ref="searchKeywords" placeholder="单曲/歌手/专辑/歌单"
					/>
					<span className="search-btn" onClick={this.actionGoSearch}>搜索</span>
				</div>
			</div>
		)
	}
}

export default SearchForm