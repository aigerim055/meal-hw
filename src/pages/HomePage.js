import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import MealPage from "./MealPage";

const HomePage = () => {
	
	const [meals, setMeals] = useState({})
	const [loading, setLoading] = useState(true)
	
	
	useEffect(() => {
		axios.get('https://themealdb.com/api/json/v2/1/randomselection.php')
			.then(({data}) => {
				// console.log(data.meals)
				setMeals(data)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	return (
		<div  >
			{ loading ? <h2>loading....</h2>:
				<div className={'container'}>
					<div  className="meals">
						{
							a.map((el) =>
								<div key={el} className={'item'}>
									<img src={meals.meals[el].strMealThumb} alt=""/>
									<div className="desc">
										<h3>{meals.meals[el].strMeal}</h3>
										<p style={{marginTop: '15px', marginBottom: '15px'}}>{meals.meals[el].strCategory}</p>
										<button><Link to={`/meal/${meals.meals[el].strMeal}`}>Read more</Link></button>
									</div>
								</div>
							)
						}
						
						
					</div>
				</div>
			}
		</div>
	);
};

export default HomePage;