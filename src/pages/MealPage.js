import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const MealPage = () => {
	
	let params = useParams()
	const [meal, setMeal] = useState([])
	const [loading, setLoading] = useState(true)
	
	// const [showMore, setShowMore] = useState(false)
	
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
							
							<div className={'ingr'}>
								{
									meal.strIngredient1 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient1}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient1}`}>{meal.strIngredient1}</Link></p>
									</div>
								}
								{
									meal.strIngredient2 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient2}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient2}`}>{meal.strIngredient2}</Link></p>
									</div>
								}
								{
									meal.strIngredient3 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient3}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient3}`}>{meal.strIngredient3}</Link></p>
									</div>
								}
								{
									meal.strIngredient4 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient4}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient4}`}>{meal.strIngredient4}</Link></p>
									</div>
								}
								{
									meal.strIngredient5 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient5}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient5}`}>{meal.strIngredient5}</Link></p>
									</div>
								}
								{
									meal.strIngredient6 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient6}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient6}`}>{meal.strIngredient6}</Link></p>
									</div>
								}
								{
									meal.strIngredient7 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient7}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient7}`}>{meal.strIngredient7}</Link></p>
									</div>
								}
								{
									meal.strIngredient8 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient8}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient8}`}>{meal.strIngredient8}</Link></p>
									</div>
								}
								{
									meal.strIngredient9 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient9}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient9}`}>{meal.strIngredient9}</Link></p>
									</div>
								}
								{
									meal.strIngredient10 &&
									<div className={'ingredient'}>
										<img src={`https://themealdb.com/images/ingredients/${meal.strIngredient10}.png`} alt=''/>
										<p><Link to={`/ingredient/${meal.strIngredient10}`}>{meal.strIngredient10}</Link></p>
									</div>
								}
								{/*<button onClick={() => setShowMore(true)}>Show more</button>*/}
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