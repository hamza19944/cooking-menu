import { useState } from "react";

function Body(props){
    const mealList = props.mealData.map(meal => {
        return(
            <div key={meal.idMeal}>
                <img src={meal.strMealThumb} />
                <h3>{meal.strMeal}</h3>
            </div>
        )
    })
    return (
        <main>{mealList}</main>
    )
}

export default Body;