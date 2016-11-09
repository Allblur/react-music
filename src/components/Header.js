import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Header extends Component {
	static propTypes = {
		path: PropTypes.string.isRequired,
		onlogoClickAction: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		const menuItem = (this.props.navItem || []).map((navItem, key) => {
			if ((this.props.router.path === '/' && key === 0 ) || this.props.router.path.indexOf(navItem.path) != -1) {
				return (
					<li key={key} className="active">
						<Link to={navItem.path}>{navItem.label}</Link>
					</li>
				)
			}
			return (
				<li key={navItem.path}>
					<Link to={navItem.path}>{navItem.label}</Link>
				</li>
			)
		})
		return (
			<div className="header">
				<div className="wrapper">
					<div className="logo">
						<span onClick={this.props.onlogoClickAction}>musictagram</span>
					</div>
					<ul className="header-nav">
						{menuItem}
					</ul>
				</div>
			</div>
		)
	}
}

export default Header
