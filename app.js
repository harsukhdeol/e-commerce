import React , {Component} from "react"
import {BrowserRouter as Router} from "react-router-dom" //put in index.js
import "./App.css"

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/ Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component{
    render(){
        return(
            <div>
                <React.Fragmnet>
                    <Navbar/>
                    <ProductList/>
                    <Details/>
                    <Cart/>
                    <Default/>

                </React.Fragmnet>
            </div>
        )
    }
}

   
