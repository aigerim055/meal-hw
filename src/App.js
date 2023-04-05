import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPage from "./pages/MealPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<HomePage/>}/>
					<Route path={'/meal/:name'} element={<MealPage></MealPage>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
