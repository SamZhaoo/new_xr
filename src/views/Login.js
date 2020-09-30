import React, { Component, Fragment } from 'react'
import '../styles/login.less'
import '../styles/iconfont.less'
import { Image } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<Fragment>
				<div className="main-page">
					<div className="top">
						<Image
							width={358}
							height={36}
							src={require('../images/logo_login.png')}
						/>
						<p className="right">
							<i className="iconfont icondianhua icontell"></i>
							400-700-0065
						</p>
					</div>
					<Router>
						<ul>
							<li>
								{' '}
								<Link to="/">首页</Link>{' '}
							</li>
							<li>
								<Link to="/list/">列表</Link>{' '}
							</li>
						</ul>
						<Route path="/list" exact component={Home} />
					</Router>
				</div>
			</Fragment>
		)
	}
}

export default Login
