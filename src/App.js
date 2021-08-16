import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


function App() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => { setCollapsed(!collapsed) };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ background: '#fff' }}>
          {
            collapsed ?
              <MenuUnfoldOutlined style={{ fontSize: '22px' }} onClick={toggle} /> :
              <MenuFoldOutlined style={{ fontSize: '22px' }} onClick={toggle} />
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
