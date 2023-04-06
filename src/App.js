import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPage from "./pages/MealPage";
import IngredientPage from "./pages/IngredientPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<HomePage/>}/>
					<Route path={'/meal/:name'} element={<MealPage/>}/>
					<Route path={'/ingredient/:name'} element={<IngredientPage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
