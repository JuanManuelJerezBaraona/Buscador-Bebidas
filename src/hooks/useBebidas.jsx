import { useContext } from "react";
import BebidasContext from "../context/BebidasProvider";

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias