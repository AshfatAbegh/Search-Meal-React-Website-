import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const handleChange = event =>{
      console.log(event.target.value);
      setSearch(event.target.value);
    }
    useEffect( () =>{
       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setMeals(data.meals))
    },[search])

    return (
        <div>
            <h1>Find Meals</h1>
            <h3>Search Your Meal: <input type="text" onChange={handleChange} placeholder="Find Meal"/></h3>
            <p>Searching: {search}</p>
            <p>Meal Found: {meals?.length || 0}</p>
            <ul>
                {
                  meals?.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;