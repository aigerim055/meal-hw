import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const SearchPage = () => {

	const params = useParams().name
	
	const [meals, setMeals] = useState({})
	const [loading, setLoading] = useState(true)


	useEffect(() => {
		axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${params}`)
			.then(({data}) => {
				// console.log(data.meals)
				setMeals(data.meals)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [params])
	// console.log(meals)
	
	return (
		<div className="container">
			{
				meals === null ? <h4 style={{color:'white'}}>not found</h4> :
					<div>
						{ loading ? <h2>loading....</h2>:
							<div className={'container'}>
								<div  className="row">
									{
										meals.map((meal, idx) =>
											<div key={idx} className={'col-4 '}>
												<div className="box meal-item">
													<img src={meal.strMealThumb} alt=""/>
													<div className="desc">
														<h3>{meal.strMeal}</h3>
														<p style={{marginTop: '15px', marginBottom: '15px'}}>{meal.strCategory}</p>
														<button><Link to={`/meal/${meal.idMeal}`}>Read more</Link></button>
													</div>
												</div>
											</div>
										)
									}
								</div>
							</div>
						}
					</div>
			}
		</div>
	);
};

export default SearchPage;