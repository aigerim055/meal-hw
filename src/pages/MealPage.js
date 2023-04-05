import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const MealPage = () => {
	
	let params = useParams()
	// console.log(params.name)
	
	const [meal, setMeal] = useState({})
	const [loading, setLoading] = useState(true)
	
	
	useEffect(() => {
		axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
			.then(({data}) => {
				setMeal(data.meals[0])
			})
			.finally(() => {
				setLoading(false)
			})
	}, [params.name])

	
	return (
		<div className={'container'}>
			<div className="meal">
				{ loading ? <h2>loading....</h2>:
					<div>
						<div className="title">
							<h1>{meal.strMeal}</h1>
							<h4>Category: {meal.strCategory}</h4>
							<h4>{meal.strArea} food</h4>
						</div>
						<div className={'row'}>
							<div className="col-5">
								<div className="box">
									<img src={meal.strMealThumb} alt=""/>
								</div>
							</div>
							<div className="col-7">
								
								<p>{meal.strInstructions}</p>
							</div>
						</div>
						<div className={'ingredients'}>
							<h3 style={{textAlign: 'center', paddingBottom: '10px'}}>Ingredients:</h3>
							<div style={{display: 'flex', justifyContent: 'space-around'}}>
								<ul type={'circle'}>
									
									{
										meal.strIngredient1 === '' ? '' :
											<li>{meal.strIngredient1}</li>
									}{
									meal.strIngredient2 === '' ? '' :
										<li>{meal.strIngredient2}</li>
								}{
									meal.strIngredient3 === '' ? '' :
										<li>{meal.strIngredient3}</li>
								}{
									meal.strIngredient4 === '' ? '' :
										<li>{meal.strIngredient4}</li>
								}{
									meal.strIngredient5 === '' ? '' :
										<li>{meal.strIngredient5}</li>
								}
								</ul>
								<ul type={'circle'}>
								
									{
										meal.strIngredient6 === '' ? '' :
										<li>{meal.strIngredient6}</li>
									}{
										meal.strIngredient7 === '' ? '' :
										<li>{meal.strIngredient7}</li>
									}{
										meal.strIngredient8 === '' ? '' :
										<li>{meal.strIngredient8}</li>
									}{
										meal.strIngredient9 === '' ? '' :
										<li>{meal.strIngredient9}</li>
									}{
										meal.strIngredient10 === '' ? '' :
										<li>{meal.strIngredient10}</li>
									}
								</ul>
							</div>
						</div>
						<button><Link to={'/'}>go back</Link></button>
					</div>
					
				}
			</div>
		</div>
	);
};

export default MealPage;