import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const IngredientPage = () => {
    const params = useParams()
    const [meal, setMeal] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data}) => {
                setMeal(data.meals)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [params.name])
    
    return (
        <div className={'container'}>
            <div style={{
                marginTop: '20px'
            }}>
                <div className="row a">
                    <div className="col-5">
                        <div className="box ingredient-desc">
                            <img src={`https://themealdb.com/images/ingredients/${params.name}.png`} alt=''/>
                            <h2>{params.name}</h2>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="box">
                            <h2>Meals</h2>
                            <div className="row">
                                {
                                    loading ? <h2>loading....</h2>:
                                        meal.map((meal, idx) =>
                                            <div key={idx} className={'col-3'}>
                                                <div className={'box meal-ingredient'}>
                                                    <img src={`${meal.strMealThumb}`} alt=""/>
                                                    <h5><Link to={`/meal/${meal.strMeal}`}>{meal.strMeal}</Link></h5>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IngredientPage;