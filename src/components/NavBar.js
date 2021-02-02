import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<header className='navHeader'>
			<nav className='navb'>
				<NavLink to='/' exact>
					LazyCooking
				</NavLink>
				<NavLink to='/blog'>Blog</NavLink>
				<NavLink to='/recipes'>Recipes</NavLink>
			</nav>
		</header>
	);
}
