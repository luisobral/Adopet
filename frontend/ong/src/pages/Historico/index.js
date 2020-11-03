import React,{ useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './style.css'
import api from '../../services/api';

export default function Historico(){
    const [historico, setHistorico] = useState([]);
    const [vacinas, setVacinas] = useState([]);

    


    return( 
        <h1>Historico</h1>
    )
};