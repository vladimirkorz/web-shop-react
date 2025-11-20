import { useState } from "react";
import MenuNavigation from "./components/MenuNavigator.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			
      <MenuNavigation />
      <NavigationBar />
			<div>
				<p>sdsthrthe</p>
			</div>
			<div className="main-content"></div>
		</div>
	);
}

export default App;
