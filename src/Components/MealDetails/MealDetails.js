import React, { useEffect, useState } from 'react';

const MealDetails = () => {
    const [meal, setMeal] = useState({});
    useEffect( () => {
       const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
       fetch(url)
       .then(res => res.json())
       .then(data => setMeal(data.meals[0]))
    }, [])
    return (
        <div>
            <h1>This is Meal Details</h1>
            <h2>Meal Name: {meal.strMeal}</h2>
        </div>
    );
};

export default MealDetails;