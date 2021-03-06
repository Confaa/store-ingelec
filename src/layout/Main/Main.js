import React from "react";
import { Route, Switch } from "react-router-dom";

import Productos from "views/Productos/Productos";
import Cuenta from "views/Cuenta/Cuenta";
import ItemListContainer from "components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "components/ItemDetailContainer/ItemDetailContainer";
import "./Main.scss";
import CartContainer from "components/CartContainer/CartContainer";
import { Container } from "react-bootstrap";

const Main = () => {
    return (
        <Container>
            <Switch>
                <Route path="/" exact component={ItemListContainer} />

                <Route path="/categories/:id" exact component={ItemListContainer} />

                <Route path="/categories/:id/:subid" exact component={ItemListContainer} />

                <Route path="/Productos" component={Productos} />

                <Route path="/Cuenta" component={Cuenta} />

                <Route path="/item/:id" component={ItemDetailContainer} />

                <Route path="/Cart" component={CartContainer} />
            </Switch>
        </Container>
    );
};

export default Main;
