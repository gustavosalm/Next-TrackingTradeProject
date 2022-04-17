import { Menu } from './style';

type Props = {
    active: boolean
}

const SideMenu = ({active} : Props) => {

    return (
        <Menu width={active ? '20%' : '4%'}>
        </Menu>
    )
}

export default SideMenu;