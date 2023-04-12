import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPage from "./pages/MealPage";
import IngredientPage from "./pages/IngredientPage";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path={'/'} element={<HomePage/>}/>
					<Route path={'/meal/:id'} element={<MealPage/>}/>
					<Route path={'/ingredient/:name'} element={<IngredientPage/>}/>
					<Route path={'/search/:name'} element={<SearchPage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
