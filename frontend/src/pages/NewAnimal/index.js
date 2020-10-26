import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';


export default function NewAnimal(){
    const [categorias, setCategorias] = useState([]);
    const [racas, setRacas] = useState([]);

    useEffect(() => {
        api.get('categorias').then(response => {
        setCategorias(response.data);
    })
    }, []);

    useEffect(() => {
        api.get('racas').then(response => {
        setRacas(response.data);
    })
    }, []);

    return(
        <div className="new-animal-container">
            <div className="content">
                <section>
                    <h1>Cadastrar Novo Animal</h1>

                    <p>Insira as informações do animal a ser adotado.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#000000" />
                        <p>Voltar para home</p>
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome do Animal"/>
                    <input type="number" placeholder="Idade"/>

                    <div className="input-group">
                        <textarea placeholder="Personalidade" id=""/>
                    </div>
                    <select>
                        {categorias.map(categoria => (
                            <option key={categoria.id}>
                                {categoria.nome}
                            </option>
                        )
                        )}
                    </select>
                    <select>
                        {racas.map(raca => (
                            <option key={raca.id}>
                                {raca.nome}
                            </option>
                        )
                        )}
                    </select>
                    <button className="button" type="submit">Cadastrar</button>

                    
                </form>
            </div>
        </div>
    );
}