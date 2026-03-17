import { Outlet } from 'react-router'
import NavigationBar from '../components/NavigationBar.jsx'

function WrapperRoute() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}

export default WrapperRoute