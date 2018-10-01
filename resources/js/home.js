import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";


const { Header, Sider, Content } = Layout;

export default class Home extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return <Layout style={{ height: "100%" }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <Icon type="radar-chart" style={{ fontSize: "40px", color: "#08c" }} />
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: "#fff", paddingLeft: 10 }}>
                        <Icon className="trigger menu-fold" type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            background: "#fff",
                            minHeight: 280
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>;
    }
}



if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
