import React from "react";
import { Link } from "react-router-dom";
import "./ViewInConstruction.scss";
const ViewInConstruction = () => {
    return (
        <div id="viewInConstruction">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M634.66 460.17L349.5 15.92c-13.62-21.23-45.38-21.23-59 0L5.34 460.17C-9.14 482.73 7.52 512 34.85 512h570.3c27.33 0 43.99-29.27 29.51-51.83zM308 160a28 28 0 1 1-28 28 28 28 0 0 1 28-28zm-4 272a16 16 0 0 1-32 0v-32.77l-46.31-29.92-18.25 66.89A16 16 0 0 1 192 448a15.64 15.64 0 0 1-4.22-.56 16 16 0 0 1-11.24-19.64l29.75-109.11 83.06 53.67A31.91 31.91 0 0 1 304 399.23zm48 16l12-29.94A16 16 0 0 1 378.83 408h35.64l-94.8-58.34s-.08 0-.11-.07l-103.95-64a16 16 0 0 1-4.41-23.22l11.61-15.49a47.88 47.88 0 0 1 48.83-18l24.58 7.28c17.45 3.82 31.84 18.53 35.56 37.14l10.55 52.7L430 380l21.16-42.44a16 16 0 0 1 27.78-1.5L550.8 448z" />
            </svg>

            <span className="animate__animated animate__zoomIn animate__fast animate__delay-1s">
                <p>Vista en construcción!</p>
                <Link to="/">Nuestro catalogo de productos</Link>
            </span>
        </div>
    );
};

export default ViewInConstruction;