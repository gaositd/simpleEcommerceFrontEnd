import React from "react";


import Button from 'react-bootstrap/Button';
//import {Form} from 'react-bootstrap/Form';

function SearchBar(){
    return(
        <form>
            <input type='text' id="searchBar" name="searchBar" className="" />
            <Button type="button" id="btnSearch" name="btnSearch" className="" >
                Buscar artículo
            </Button>
        </form>
    );
}

export default SearchBar;