import React from 'react'
import { Container } from './styles';
import {FiSearch} from "react-icons/fi";

export default function Searchbar() {
    return (
        <Container>
            <input placeholder="Buscar" />
            <span><FiSearch/></span>
        </Container>
    )
}
