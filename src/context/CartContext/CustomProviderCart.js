import React, { useContext, useState } from "react";
import { Provider } from "context/CartContext/CartContext.js";
import { getFirestore } from "firebase/firebaseSetup";
import productContext from "context/ProductContext/ProductContext";
const CustomProviderCart = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalCompra, setTotalCompra] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [nombre, setNombre] = useState("");

    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [repEmail, setRepEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [idCompra, setIdCompra] = useState(false);

    const { updateStock } = useContext(productContext);

    let aux = carrito;

    const addItem = (item, quantity) => {
        //AGREGAR ITEM SEGUN CANTIDAD
        let producto = {
            item: item,
            quantity: quantity
        };
        console.log(producto);
        let enCarrito = isInCart(producto.item.id);
        if (enCarrito) {
            carrito.forEach((element, index) => {
                if (element.item.id === producto.item.id) {
                    aux[index].quantity += producto.quantity;
                }
            });
        } else {
            aux.push(producto);
        }
        setCarrito(aux);
        calcularTotal(aux);
    };

    const removeItem = (itemId) => {
        //REMOVER ITEM POR ID
        aux = aux.filter((aux) => aux.item.id !== itemId);
        setCarrito(aux);
        calcularTotal(aux);
    };

    const clearCart = () => {
        //BORRAR TODOS LOS ITEMS
        setCarrito([]);
        calcularTotal([]);
        setIdCompra(false);
    };

    const clearForm = () => {
        setNombre("");
        setTelefono("");
        setEmail("");
        setRepEmail("");
    };

    const isInCart = (id) => {
        let inCart = false;
        carrito.forEach((element) => {
            if (id === element.item.id) {
                inCart = true;
            }
        });
        return inCart;
    };

    const fechaCompra = () => {
        let fecha = new Date();

        console.log(fecha.toUTCString());
        setFecha(fecha.toUTCString());
    };
    const calcularTotal = (carrito) => {
        let importe = 0;
        let cant = 0;

        carrito.forEach((element) => {
            importe += element.quantity * element.item.price;
            cant += element.quantity;
        });
        setTotalCompra(importe);
        setCantidad(cant);
    };
    const finalizarCompra = (e) => {
        e.preventDefault();
        if (email !== repEmail) {
            alert("Compruebe el email cargado");
        } else {
            let itemsEnCompra = carrito.map((element) => {
                return {
                    id: element.item.id,
                    title: element.item.title,
                    price: element.item.price * element.quantity,
                    quantity: element.quantity
                };
            });
            let datosCompra = {
                buyer: {
                    name: nombre,
                    telefono: telefono,
                    email: email
                },
                items: { ...itemsEnCompra },
                date: fecha,
                total: totalCompra,
                status: "generated"
            };
            console.log(datosCompra);
            console.log(e);

            const db = getFirestore();
            const orderCollection = db.collection("orders");
            orderCollection
                .add(datosCompra)
                .then((resultado) => {
                    console.log(resultado.id);
                    alert("Compra finalizada!");
                    setIdCompra(resultado.id);
                    updateStock(carrito);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    let form = {
        nombre,
        telefono,
        email,
        repEmail,
        setNombre,
        setTelefono,
        setEmail,
        setRepEmail,
        fechaCompra,
        clearForm
    };
    return (
        <Provider
            value={{
                carrito: carrito,
                totalCompra: totalCompra,
                cantidad: cantidad,
                addItem: addItem,
                removeItem: removeItem,
                clearCart: clearCart,
                form: form,
                finalizarCompra: finalizarCompra,
                idCompra: idCompra
            }}
        >
            {children}
        </Provider>
    );
};

export default CustomProviderCart;
