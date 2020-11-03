
import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import './styles.css'

import api from '../../services/api';

export default function Register (){
    const history = useHistoryU();
    const [nome_User,setNomeU] = useState('');
    const [email_User,setEmailU] = useState('');
    const [whatsApp_User,setWhatsAppU] = useState('');
    const [city_User,setCityU] = useState('');
    const [uf_User,setUfU] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            nome_User,email_User,whatsApp_User,city_User,uf_User
        };
        try {
            const res = await api.post('users',data);

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

                    <p>Cadastre agora mesmo, Para poder adotar animais.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#000000" />
                        <p>Já tenho cadastro</p>
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome do Usuario" value={nome_users} onChange={e => setNomeU(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email_user} onChange={e => setEmailU(e.target.value)}/>
                    <input placeholder="WhatsApp" value={whatsApp_user} onChange={e => setWhatsAppU(e.target.value)}/>

                    <div className="input-group">
                        <input placeholder="Cidade" value={city_user} onChange={e => setCityU(e.target.value)}/>
                        <input placeholder="UF" style={{width:80}} value={uf_user} onChange={e => setUfU(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}