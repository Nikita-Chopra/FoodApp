import React, { useState } from 'react'
import FoodMenuCard from './FoodMenuCard'
import Menu from '../components/FoodMenuApi'
import FoodAppNavbar from './FoodAppNavbar'


const categoryList = [ ...new Set(Menu.map((curElem)=>{
return curElem.category
})
),"All",
]

console.log("category", categoryList)

export default function FoodApp() {
const [ menuData, setMenuData] = useState(Menu)
const [menuList, setMenuList] = useState(categoryList)



const filterItem=(category)=>{
  if(category==="All"){
      setMenuData(Menu)
      return
  }
const updatedList = Menu.filter((curElem)=>{
 return curElem.category === category

})
setMenuData(updatedList)
}



  return (
    <>

<FoodAppNavbar filterItem={filterItem} menuList={menuList}/>


      <FoodMenuCard menuData={menuData} />
    </>
  )
}

