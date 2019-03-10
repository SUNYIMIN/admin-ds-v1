import React from 'react';
import { Menu, Icon } from 'antd';
import MenuList from "./menu.js";
const SubMenu = Menu.SubMenu;
class Side extends React.Component{
  constructor(props) {
    super(props);
    this.rootSubmenuKeys = ['sub1', 'sub2'];
    this.state = {
      openKeys: ['sub1']
    }
  }
  onOpenChange(openKeys){
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    let {
      openKeys
    } = this.state;
    return (
      <div>
       <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={this.onOpenChange.bind(this)}
        style={{ width: 190 }}
      >
        {
          MenuList && MenuList.map((item_one) => {
            return (
              <SubMenu key={item_one.key} title={<span><Icon type="setting" /><span>{item_one.title}</span></span>}>
                 {
                   item_one.child && item_one.child.map((item_two) => {
                     return (
                      <Menu.Item key={item_two.key}><a href={`#/${item_two.url}`}>{item_two.title}</a></Menu.Item>
                     )
                   })
                 }
              </SubMenu>
            )
          })
        }
      </Menu>
      </div>
    )
  }
}

export default Side;