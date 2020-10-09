import React, { Component, Fragment } from 'react'
import '../styles/login.less'
import '../styles/iconfont.less'
import { Image } from 'antd'
import { Menu } from 'antd'
const { SubMenu } = Menu
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = { current: 'mail' }
	}
	handleClick = (e) => {
		console.log('click ', e)
		this.setState({ current: e.key })
	}
	render() {
		const { current } = this.state
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
					<Menu
						onClick={this.handleClick}
						selectedKeys={[current]}
						mode="horizontal"
					>
						<Menu.Item key="mail">Navigation One</Menu.Item>
						<Menu.Item key="app">Navigation Two</Menu.Item>
					</Menu>
				</div>
			</Fragment>
		)
	}
}

export default Login
