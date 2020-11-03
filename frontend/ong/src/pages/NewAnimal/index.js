import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';


export default function NewAnimal(){
    const [categorias, setCategorias] = useState([]);
    const [id_categoria, setid_Categoria] = useState('');    
    const [racas, setRacas] = useState([]);
    const [id_raca, setid_Raca] = useState('');
    const [nome_animal, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [chipado, setChipado] = useState('');
    const [personalidade, setPersonalidade] = useState('');


    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
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

    async function handleAnimal(e){
        e.preventDefault();
        const data = {
            nome_animal,
            idade,
            chipado,
            personalidade,
            id_categoria,
            id_raca
        };
        try {
            await api.post('animals',data, 
                {headers:{
                    Authorization:ongId,
                }
            });
            
            history.push('/profile');
        } catch (error) {
            
            alert('Erro no cadastro, tente novamente');
        }
    }
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
                    <input type="text" placeholder="Nome do Animal" value={nome_animal} onChange={e => setNome(e.target.value)}/>
                    <div className="input-number">
                        <label>
                            <h3>Idade:</h3>
                            <input type="number" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)}/>
                        </label>
                        <label>
                            <h3>Chipado:</h3>
                            <select id="chip" onChange={e => setChipado(e.target.value)}> 
                            <option selected></option>
                                <option value="sim">
                                    sim
                                </option>
                                <option value="nao">
                                    não
                                </option>
                            </select>
                        </label>
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Personalidade" value={personalidade} onChange={e => setPersonalidade(e.target.value)}/>
                    </div>
                    <div className="input-group">
                    <label>
                        <h3>Categorias:</h3>
                    <select id="categoria" onChange={e => setid_Categoria(e.target.value)}>
                        <option selected></option>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome_categoria}
                            </option>
                        )
                        )}
                    </select>
                    </label>
                    <label>
                        <h3>Raças:</h3>
                    <select id='racas' onChange={e => setid_Raca(e.target.value)}>
                        <option selected></option>
                        {racas.map(raca => (
                            <option key={raca.id} value={raca.id} >
                                {raca.nome_raca}
                            </option>
                        )
                        )}
                    </select>
                    </label>
                    </div>
                    <button className="button" onClick={handleAnimal} type="submit">Cadastrar</button>

                    
                </form>
            </div>
        </div>
    );
}