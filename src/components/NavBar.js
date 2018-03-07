import React from 'react';

import { Menu } from 'antd';

class NavBar extends React.Component{
	render(){
		return(
			<Menu
        theme="dark"
        mode="horizontal"
      >
			<Menu.Item key="1">Create Meetup</Menu.Item>
      <Menu.Item key="2">Explore</Menu.Item>

			</Menu>
		);
	}
}

export default NavBar;
