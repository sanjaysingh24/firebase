import React from 'react'
import {StoreContext} from '../Context/Store';
import { useContext } from 'react'
export default function Dashboard() {
    const{adddata,addcategory,addproducts,getdata } = useContext(StoreContext);
  return (
    <div>
      <h1>welcome to dashboard</h1>
      <button onClick={adddata}> add Meal </button>
      <button onClick={addproducts}>addproducts</button>
      <button onClick={addcategory}>Add Category</button>
      <button onClick={getdata}>getdata </button>
    </div>
  )
}
