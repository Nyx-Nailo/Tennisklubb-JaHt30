import { Outlet } from 'react-router-dom';
import Menu from './Menu.js';
import Header from './Header.js';

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