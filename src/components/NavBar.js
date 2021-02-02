import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<header>
			<div>
				<nav>
					<NavLink to='/' exact>
						LazyCooking
					</NavLink>
					<NavLink to='/blog'>Blog</NavLink>
					<NavLink to='/recipes'>Recipes</NavLink>
				</nav>
			</div>
		</header>
	);
}
