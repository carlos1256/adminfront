import { useRef } from "react"

export default function Header(){
	return(
		<>
		<div className="navbar_neg">
		<ul className="navbar-nav_neg">
			<li className="nav-item_neg">
				<a className="nav-link_neg">
				<i className="fas fa-bars" onClick={showSidebar}>
					</i>
				</a>
			</li>
			<li className="nav-item_neg">
				<a href="#" className="nav-link_neg">
					Admin-Neg
				</a>
			</li>
		</ul>

		<ul className="navbar-nav_neg nav-right_neg">
			<li className="nav-item_neg">
				<a href="#" className="nav-link_neg" onclick="switchTheme()">
					<i className="fas fa-moon dark-icon"></i>
					<i className="fas fa-sun light-icon"></i>
				</a>
			</li>
			<li className="nav-item_neg dropdown_neg">
				<a className="nav-link_neg">
					<i className="fas fa-bell dropdown-toggle_neg" data-toggle="notificacion-menu"></i>
					<span className="navbar-badge_neg">15</span>
				</a>
				<ul id="notificacion-menu" className="dropdown-menu_neg notificacion-menu">
					<div className="dropdown-menu-header_neg">
						<span>
							Notificaciones
						</span>
					</div>
					<div className="dropdown-menu-content_neg overlay-scrolbar">
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-gift"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-tasks"></i>
								</div>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Dolore libero, odit est sint suscipit distinctio aspernatur itaque dignissimos! Adipisci officia a odit maxime modi fugiat ipsam tenetur, mollitia ut alias?</span>
								<br/>
								<span>
									15/04/21
								</span>
							</a>
						</li>

					</div>
					<div className="dropdown-menu-footer_neg">
						<span>
							Notificaciones
						</span>
					</div>
				</ul>
			</li>
			<li className="nav-item_neg">
				<div className="avatar dropdown_neg">
					<img src="#" alt="User"  className="dropdown-toggle_neg" data-toggle="user-menu"/>
					<ul id="user-menu"className="dropdown-menu_neg">
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-user-tie"></i>
								</div>
								<span>Profile</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-cog"></i>
								</div>
								<span>Settings</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-credit-card"></i>
								</div>
								<span>Payments</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="#" className="dropdown-menu-link_neg">
								<div>
									<i className="fas fa-spinner"></i>
								</div>
								<span>proyects</span>
							</a>
						</li>
						<li className="dropdown-menu-item_neg">
							<a href="{{route('logout')}}" className="dropdown-menu-link_neg exit" onclick="event.preventDefault(); document.getElementById('logout-form').submit()">
								<div>
									<i className="fas fa-sign-out-alt"></i>
								</div>
								<span>Logout</span>
							</a>
							<form action="{{ route('logout')}}" method="POST" id="logout-form">
								@csrf
							</form>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		</div>
		</>
	)
}