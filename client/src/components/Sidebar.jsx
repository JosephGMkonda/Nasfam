
import '../styles/sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem active'>
                       Home

                    </li>

                    <li className='sidebarListItem'>
                       Manage Farmers

                    </li>

                    <li className='sidebarListItem'>
                       Manage Products

                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Sidebar