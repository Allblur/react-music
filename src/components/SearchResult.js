import React, { Component, PropTypes } from 'react'
import SearchResultArtist from './SearchResultArtist'
import SearchResultSong from './SearchResultSong'
import SearchResultAlbum from './SearchResultAlbum'
import SearchResultPlaylist from './SearchResultPlaylist'
import Pagination from './Pagination'
import Loading from 'components/Loading'

class SearchResult extends Component {
	constructor(props) {
		super(props),
		this.state = {
			t: 0,
			kw: ''
		}
	}

	componentWillMount() {
		const res = {list: []}
		this.props.searchResult(res)
		this.getSearchResults()
	}

	componentDidUpdate() {
		const {t ,kw} = this.props.location.query
		if (this.state.t === t && this.state.kw === kw) return false
		this.getSearchResults()
	}

	getSearchResults() {
		const {kw, t} = this.props.location.query
		const {getSearchResult} = this.props
		getSearchResult('/sreach/', {params: {w: kw, t: t}})
		this.setState({
			t: t,
			kw: kw
		})
	}

	renderResult() {
		const list = this.props.searchData.searchResult.list
		const t = this.props.location.query.t
		const {
			setlist,
			setindex,
			setmodel,
			songInfo,
			getPlayerlist,
			getSonginfo
		} = this.props
		if (list && list instanceof Array) {
			if (list.length === 0) {
				return (
					<li className="sr-error">
						<Loading />
					</li>
				)
			} else {
				switch(t) {
					case '1':
						return (
							<SearchResultSong
								paginationData={list.slice(0, 20)}
								setlist={setlist}
								setindex={setindex}
								setmodel={setmodel}
								songInfo={songInfo}
								getPlayerlist={getPlayerlist}
								getSonginfo={getSonginfo}
								history={this.props.history}
								t={t}
							/>
						)
					case '2':
						return (
							<SearchResultPlaylist
								paginationData={list}
								setlist={setlist}
								setindex={setindex}
								setmodel={setmodel}
								songInfo={songInfo}
								getPlayerlist={getPlayerlist}
								getSonginfo={getSonginfo}
								history={this.props.history}
								t={t}
							/>
						)
					case '3':
						return (
							<SearchResultArtist
								paginationData={list.slice(0, 20)}
								setlist={setlist}
								setindex={setindex}
								setmodel={setmodel}
								getPlayerlist={getPlayerlist}
								getSonginfo={getSonginfo}
							/>
						)
					case '4':
						return (
							<SearchResultAlbum
								paginationData={list.slice(0, 20)}
								setlist={setlist}
								setindex={setindex}
								setmodel={setmodel}
								getPlayerlist={getPlayerlist}
								getSonginfo={getSonginfo}
							/>
						)
				}
			}
		}
		return (
			<li className="sr-error">
				<p>很抱歉，未能找到相关搜索结果！</p>
			</li>
		)
	}

	render() {
		const {t} = this.props.location.query.t
		const {searchData} = this.props
		const n = 15
		return (
			<div className="result-body">
				{this.renderResult()}
			</div>
		)
	}
}

export default SearchResult