import React from "react";
import "./Home.scss";
import ItemListContainer from "../ItemListContainer/ItemListContainer.js";

let Home = () => {
    return (
        <div className="home">
            <ItemListContainer parrafo="Bienvenidos a la store de la empresa Ingelec S.R.L." />
        </div>
    );
};
export default Home;
