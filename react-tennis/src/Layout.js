import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu.js';
import Header from './header/Header.js';

function Layout() {
    return (
        <>
            <Header />
            <Menu />
            <div id='Main'>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;