import { useState } from "react";
import Search from "./components/Search.jsx";
import PromotionalBanner from "./components/PromotionalBanner.jsx";
import MenuNavigation from "./components/MenuNavigator.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import CategoryCards from "./components/CategoryCards.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<MenuNavigation />
			<NavigationBar />
			<Search />
			<PromotionalBanner />
			<CategoryCards />
			<div className="main-content"></div>
		</div>
	);
}

export default App;
