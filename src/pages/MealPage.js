import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import CustomModalVideo from "../components/CustomModalVideo";

const MealPage = () => {
	
	const navigate = useNavigate()
	let params = useParams()
	const [meal, setMeal] = useState([])
	const [loading, setLoading] = useState(true)
	
	const [showMore, setShowMore] = useState(false)
	useEffect(() => {
		axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
			.then(({data}) => {
				setMeal(data.meals[0])
			})
			.finally(() => {
				setLoading(false)
			})
	}, [params.id])
	
	// console.log(meal)
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
									<CustomModalVideo id={meal.strYoutube}/>
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
									showMore &&
									<div className={'show-more-ingredients'}>
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
										
									</div>
								}
								<div>
									<button className={'show-more'} onClick={() => setShowMore(!showMore)}>
										{showMore ?
											<svg fill={'white'} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="48">
												<path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/>
											</svg>
											:
											<svg fill={'white'} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="48">
												<path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/>
											</svg>
										}
									</button>
								</div>
							</div>
						</div>
						<button><Link to={'/'} onClick={() => navigate(-1)}>go back</Link></button>
					</div>
				}
			</div>
		</div>
	);
};

export default MealPage;