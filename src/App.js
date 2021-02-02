import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/RecipeGrid";
import SingleRecipe from "./components/SingleRecipe";
import Blog from "./components/BlogGrid";
import SingleBlog from "./components/SingleBlog";
import NavBar from "./components/NavBar.js";

import "./app.css";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={Recipes} path='/recipes' exact />
				<Route component={SingleRecipe} path='/recipes/:slug' />
				<Route component={Blog} path='/blog' exact />
				<Route component={SingleBlog} path='/blog/:slug' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
