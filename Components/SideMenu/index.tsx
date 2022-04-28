import { Menu } from './style';
import { BiHomeCircle as HomeIcon } from 'react-icons/bi';

type Props = {
    active: boolean
}

const SideMenu = ({active} : Props) => {

    return (
        <Menu props={active ? {width: '14rem', svgPosition: 'top: 5.3rem; left: 2rem;', opacity: 1} : 
                    {width: '3.5rem', svgPosition: 'top: 1.5rem; left: 1.75rem;', opacity: 0}}>
            <HomeIcon size={20} style={{color: "white"}}/>
            <div>
                <h6>MENU</h6>
                <p>Dashboard</p>
            </div>
        </Menu>
    )
}

export default SideMenu;