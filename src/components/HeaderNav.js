import React from 'react'
import { Link } from 'react-router'

class HeaderNav extends React.Component {
	render() {
		const menuItem = (this.props.navList || []).map(navItem => (
			<li key={navItem.path}>
				<Link to={navItem.path}>{navItem.label}</Link>
			</li>
		))
		return (
			<div className="header">
				<div className="header-nav">
					<div className="logo" onClick={this.props.onlogoClickFn}>musictagram</div>
					<ul theme="dark" mode="horizontal" selectedKeys={[this.props.path]}>
						{menuItem}
					</ul>
				</div>
			</div>
		)
	}
}

export default HeaderNav
