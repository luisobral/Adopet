import React, { useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';
 
export default function Profile(){
    const [animals, setAnimals] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    
    const history = useHistory();

    useEffect(() => {
        api.get('profile',{headers:{
            Authorization:ongId,
        }
    }).then(response => {
        setAnimals(response.data);
    })
    }, [ongId]);

    async function handleDeletAnimal(id){
        try {
          api.delete(`animals/${id}`, {headers:{
            Authorization:ongId,
          }
        });
        setAnimals(animals.filter(animal => animal.id !== id));
        } catch (err) {
            alert('Erro ao deletar animal, tente novamente.');
        }
    }

    async function handleLogout(){
        localStorage.clear();   

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <span>
                    Bem Vinda, {ongName}
                </span>

                <Link to="/animals/new" className="button">Cadastrar Novo Animal</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size="18" color="#E02141"/>
                </button>
            </header>
            <h1>Animais Cadastrados</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal.id}>
                        <div className="ordenar">
                            <strong>Nome:</strong>
                            <p>{animal.nome}</p>
                        </div>
                        <div className="ordenar">
                            <strong>Idade:</strong>
                            <p>{animal.idade}</p>
                        </div>
                        <div className="ordenar">
                            <strong>Personalidade:</strong>
                            <p>{animal.personalidade}</p>
                        </div>
                        <div className="ordenar">
                            <strong>Tipo:</strong>
                            <p>{animal.id_categoria}</p>
                        </div>
                        <div className="ordenar">
                            <strong>Raça:</strong>
                            <p>{animal.id_raca}</p>
                        </div>
                        <div className="ordenar">
                            <strong>Chipado:</strong>
                            <p>{animal.chipado}</p>
                        </div>
                        <button onClick={() => handleDeletAnimal(animal.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                )
                )}
            </ul>
        </div>
    );
}