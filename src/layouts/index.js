import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'umi/link';
import style from './index.less';

const { Header, Footer, Content } = Layout;

const App = props => {
  const { children } = props;
  const HeaderMenuList = [
    { key: '1', title: '首页', to: '/' },
    { key: '2', title: '博客', to: '/blog' },
    { key: '3', title: '其他', to: '/other' },
  ];
  const renderMenu = () => {
    const defaultSelectedKeysArr = [];
    HeaderMenuList.forEach(element => {
      if (element.to === props.location.pathname.includes) {
        defaultSelectedKeysArr.push(element.key);
      } else if (props.location.pathname.includes(element.to) && element.to !== '/') {
        defaultSelectedKeysArr.push(element.key);
      }
    });
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={defaultSelectedKeysArr}
        style={{ lineHeight: '64px' }}
      >
        {HeaderMenuList.map(element => (
          <Menu.Item key={element.key}>
            <Link to={element.to}>{element.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <Layout>
      <Header>
        <div className={style.logo} />
        {renderMenu()}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: '24px', minHeight: '800px' }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        way&#180;s blog &copy; 2018 Created by wayyolo
      </Footer>
    </Layout>
  );
};

export default App;
