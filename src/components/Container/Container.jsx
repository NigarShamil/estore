import './index.css'
import List from './final-products.json'
import React, { useState } from 'react'
import Cart from '../Card/Card'
import Navbar from "../Navbar/Navbar"

function getStore(){
    return JSON.parse(localStorage.getItem('store'))?? []
}

export default function Container(){
    const [list, setList] = useState(getStore())
    console.log(list)

    const handleShoppingBag = (el) => {
        console.log(el)
        let store = (JSON.parse(localStorage.getItem('store')) || [])
        store.push(el)
        setList((prev) => [...prev, el])
        localStorage.setItem('store', JSON.stringify(store))
    }
    return (
        <>
        <p>Count {list.length}</p>
        <div className='container'>
            {List.map((el, index) => <Cart key={index} el={el} active={false} handler={handleShoppingBag}/>)}
        </div>
        </>
    )
}