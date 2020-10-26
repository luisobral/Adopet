import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import './styles.css'

import api from '../../services/api';

export default function Register (){
    const history = useHistory();
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [whatsApp,setWhatsApp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            nome,email,whatsApp,city,uf
        };
        try {
            const res = await api.post('ongs',data);

            alert(`Seu Id de acesso ${res.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>

                    <p>Cadastre agora mesmo, fazendo com que outras pessoas possam adotar os animais da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#000000" />
                        <p>Já tenho cadastro</p>
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da Ong" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="WhatsApp" value={whatsApp} onChange={e => setWhatsApp(e.target.value)}/>

                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{width:80}} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}