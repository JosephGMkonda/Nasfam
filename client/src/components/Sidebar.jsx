
import '../styles/sidebar.css'
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                  <Link to="/" style={{textDecoration:'none'}}>
                    <li className='sidebarListItem active'>
                      <HomeIcon className="sideBarIcon"/>
                       Home

                    </li>
                    </Link>
                   <Link to="/farmers" style={{textDecoration:'none'}}>
                    <li className='sidebarListItem'>
                      <PeopleIcon className="sideBarIcon"/>
                       Manage Farmers

                    </li>
                    </Link>
                   <Link to="/products" style={{textDecoration:'none'}}>
                    <li className='sidebarListItem'>
                      <Inventory2Icon className="sideBarIcon"/>
                       Manage Product

                    </li>
                    </Link>

                    <li className='sidebarListItem'>
                      <LogoutIcon className="sideBarIcon"/>
                       Logout

                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Sidebar