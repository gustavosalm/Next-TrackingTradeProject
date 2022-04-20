import { Menu } from './style';
import { BiHomeCircle as HomeIcon } from 'react-icons/bi';

type Props = {
    active: boolean
}

const SideMenu = ({active} : Props) => {

    return (
        <Menu width={ active ? '16%' : '4%'}>
            <HomeIcon style={{color: "white"}}/>
        </Menu>
    )
}

export default SideMenu;