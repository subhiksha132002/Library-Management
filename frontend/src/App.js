import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { UserOutlined } from "@ant-design/icons";
import generateRoute from "./routes";

import "./App.css";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return generateRoute();
}

export default App;
