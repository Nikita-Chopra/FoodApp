import React from "react";
import "../components/navbar.css";

export default function FoodAppNavbar({ filterItem, menuList }) {
  return (
    <div className="nav">
    <div className="nav-item" >
      {menuList.map((elem) => {
        return (
          <>
            
              <button className="btn-text1" onClick={()=>filterItem(elem)}>
               {elem}
              </button>
           
          </>
        );
      })}


      </div>
    </div>
  );
}
