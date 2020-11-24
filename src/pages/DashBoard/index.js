import React from "react";
import MenuList from "../../config/menu";
import MenuItem from "antd/lib/menu/MenuItem";
import { RouteWithSubRoutes } from "../../routers/index";
import { DashRouter } from "../../routers/config";
import { Menu, Layout } from "antd";
import { NavLink, Switch } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
export default function DashBoard() {
	function handleClick(e) {
		console.log("click", e);
	}
	function renderMenu(data) {
		return data.map(item => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{renderMenu(item.children)}
					</SubMenu>
				);
			}
			return (
				<MenuItem title={item.title} key={item.key}>
					<NavLink to={item.key}>{item.title}</NavLink>
				</MenuItem>
			);
		});
	}

	return (
		<Layout style={{ height: "100vh" }}>
			<Header style={{ backgroundColor: "#f0fff8" }}>Header</Header>
			<Layout>
				<Sider style={{ backgroundColor: "#fff" }}>
					<Menu onClick={handleClick} style={{ width: "100%" }} mode="vertical">
						{
							renderMenu(MenuList)
						}
					</Menu>
				</Sider>
				<Content
					style={{
						margin: "30px 20px",
						backgroundColor: "#f5f5f5",
						borderRadius: "6px",
						boxShadow: "0 0 10px 8px #fff",
						padding: "20px"
					}}>
					<Switch>
						{
							DashRouter.map((route, i) => (
								<RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
							))
						}
					</Switch>
				</Content>
			</Layout>
			<Footer style={{ backgroundColor: "#434343", textAlign: "center", color: "#fff", fontSize: "16px"}}>Copyright © 2020 管家婆后台管理系统</Footer>
		</Layout>
	);
}