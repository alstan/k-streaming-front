import { Menu } from 'antd';

function MainMenu(props) {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            <Menu.Item>{props.time}</Menu.Item>
        </Menu>);
} 

export default MainMenu;