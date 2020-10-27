import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import { FiLogIn} from 'react-icons/fi';

import api from '../../services/api'

import CapaImg from '../../assets/capa.jpg'

export default function Login(){
    const [id,setId] = useState('');

    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try {
            const res = await api.post('sessions', {id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',res.data.nome_ong);
            
            history.push('/profile')
        } catch (err) {
            alert('Falha no Login, tente novamente');
        }
    }
    
    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <div className="Image-capa">
                <img src={CapaImg} alt="Capa"/>
            </div>
        </div>
    );
}