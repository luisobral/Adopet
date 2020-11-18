
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import './styles.css'

import api from '../services/api';

export default function Register (){
    const history = useHistory();
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
            const res = await api.post('usuario',data);

            alert(`Seu Id de acesso ${res.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                
                
                <form onSubmit={handleRegister}>
                    <section>
                    <h1>Cadastro</h1>
                    
                    <img  src = "https://library.kissclipart.com/20191125/qoe/kissclipart-family-day-happy-family-day-family-fa3e1eccda3b196e.png"  width="100%" height="40%"/>
                    <p>Cadastre agora mesmo, Para poder adotar animais.</p>
                    
                    
                   
                    </section>
                    
                    <div class="container-fluid">
                    <input placeholder="Nome do Usuario" value={nome_User} onChange={e => setNomeU(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email_User} onChange={e => setEmailU(e.target.value)}/>
                    <input placeholder="WhatsApp" value={whatsApp_User} onChange={e => setWhatsAppU(e.target.value)}/>

                    <div className="input-group">
                        <input placeholder="Cidade" value={city_User} onChange={e => setCityU(e.target.value)}/>
                        <input placeholder="UF" style={{width:80}} value={uf_User} onChange={e => setUfU(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <a className="back-link" to="/http:localhost:registerU">
                        <FiArrowLeft size={16} color="#000000" />
                        <p>Já tenho cadastro</p>
                    </a>
                    </div>
                </form>
                
            </div>
        </div>
    );
}