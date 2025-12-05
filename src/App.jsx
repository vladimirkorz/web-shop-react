import { useState } from "react";
import Search from "./components/Search.jsx";
import PromotionalBanner from "./components/PromotionalBanner.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import CategoryCards from "./components/CategoryCards.jsx";
import Goods from "./components/Goods.jsx";
import StatusBar from "./components/StatusBar.jsx"
import "./App.css";

function App() {
	return (
		<div className="App">
			<StatusBar />
			<NavigationBar />
			<Search />
			<PromotionalBanner />
			<CategoryCards />
			<Goods />
			<div className="main-content"></div>
		</div>
	);
}

export default App;
