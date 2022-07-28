import React from "react";
import '../components/foodapp.css'



export default function FoodMenuCard({menuData}) {
  console.log("menuData",menuData)
  return (
    <div className="container">
{menuData.map((elem)=>{
  return(
    <>
    <div className="card" key={elem.id}>
        <p className="p-text1">{elem.id}</p>
        <p className="p-text2">{elem.category}</p>
        <p className="p-text3">{elem.name}</p>
        <p className="p-text3">{elem.price}</p>
        <p className="p-text4">{elem.description}</p>
        <p className="p-text5">READ</p>
        <img className="img1"
          src={elem.image}
          alt=""
        ></img>
      </div>

    </>
  )
})}
      


    </div>
  );
}
