import * as React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import GlobalContext from '@/context';
import buildMenuList from 'configs/menu';

const { SubMenu, Item } = Menu;
const renderMenu = data => {
  return data.map(item => {
    if (item.children) {
      return (
        <SubMenu title={item.title} key={item.key}>
          {renderMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      <Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Item>
    );
  });
};

const DashMenu = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, authority, departmentId } = userInfo;
  const MenuList = React.useMemo(() => buildMenuList({ userId, departmentId, authority }), [
    userId,
    departmentId,
    authority,
  ]);
  return (
    <Menu
      style={{
        width: '100%',
      }}
      mode="vertical">
      {renderMenu(MenuList)}
    </Menu>
  );
};

export default DashMenu;
