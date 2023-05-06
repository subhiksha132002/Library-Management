import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import sidebar from "./sidebar";

export default function Home() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <Layout className="app">
      <Sider collapsible breakpoint="lg">
        <Menu
          activeKey={pathname}
          items={sidebar}
          mode="inline"
          onClick={({ key }) => navigate(key)}
          theme="dark"
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
