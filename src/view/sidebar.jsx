import LinkSidebar from "../components/linkSidebar";
import { useRef } from "react";
export default function Sidebar(){
	const SidebarRef = useRef();
	
    return(
        <>
	<div className="sidebar_neg"><br /><br />
		<ul className="sidebar-nav_neg" ref={SidebarRef}>
			<LinkSidebar titleLink='Dashboard' icon='fa-tachometer-alt' link=''/>
			{/* <LinkSidebar titleLink='Usuarios' icon='fa-users' link='user/'/> */}
			{/* <LinkSidebar titleLink='Roles' icon='fa-hand-pointer' link='roles/'/> */}
			{/* <LinkSidebar titleLink='Asignar' icon='fa-users' link='assing/'/> */}
			{/* <LinkSidebar titleLink='Permisos' icon='fa-clipboard-list' link='permisos/'/> */}
			<LinkSidebar titleLink='Inventario' icon='fa-cubes' link='inventory'/>
			{/* <LinkSidebar titleLink='Ventas' icon='fa-shopping-cart' link='sales/'/> */}
			<LinkSidebar titleLink='Gastos' icon='fa-money-bill-wave' link='expenditures/'/>
			{/* <LinkSidebar titleLink='Detalle' icon='fa-list-ul' link='details/'/> */}
			{/* <LinkSidebar titleLink='Factura' icon='fa-file' link='factura/'/> */}
			{/* <LinkSidebar titleLink='Reporte' icon='fa-file' link='reporte/'/> */}
			<LinkSidebar titleLink='Calculadora' icon='fa-calculator' link='calculate/'/>
		</ul>
	</div>
</>
    )
}