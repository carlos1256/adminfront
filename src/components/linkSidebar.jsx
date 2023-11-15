import { Link } from "react-router-dom";

function LinkSidebar ({titleLink,icon,link}){

    return(
        <li className="sidebar-nav-item_neg">
				<Link rel="stylesheet" to={`/${link}`}className="sidebar-nav-link_neg">
					<div>
						<i className={`fas ${icon}`}></i>
					</div>
					<span>
						{titleLink}
					</span>
				</Link>
			</li>
    )
}
export default LinkSidebar;