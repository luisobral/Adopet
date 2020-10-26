import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';


export default function NewAnimal(){
    const [categorias_array, setCategorias_array] = useState([]);
    const [categorias,setCategorias] = useState('');
    const [racas_array, setRacas_array] = useState([]);
    const [racas, setRacas] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [chipado, setChipado] = useState('');
    const [personalidade, setPersonalidade] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    useEffect(() => {
        api.get('categorias').then(response => {
        setCategorias_array(response.data);
    })
    }, []);

    useEffect(() => {
        api.get('racas').then(response => {
        setRacas_array(response.data);
    })
    }, []);

    async function handleAnimal(e){
        e.preventDefault();
        const data = {
            nome,
            idade,
            chipado,
            personalidade,
            categorias,
            racas
        };
        try {
            await api.post('animals',data, {
                headers: ongId,
            });
            history.push('/profile');
        } catch (error) {
            
            console.log(data);
            console.log(ongId);
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
                    <input type="text" placeholder="Nome do Animal" value={nome} onChange={e => setNome(e.target.value)}/>
                    <div className="input-number">
                        <label>
                            <h3>Idade:</h3>
                            <input type="number" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)}/>
                        </label>
                        <label>
                            <h3>Chipado:</h3>
                            <select value={chipado} onChange={e => setChipado(e.target.value)}> 
                                <option value='sim'>
                                    sim
                                </option>
                                <option value='nao'>
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
                    <select>
                        {categorias_array.map(categoria => (
                            <option key={categoria.id} value={categorias} onChange={e => setCategorias(e.target.value)}>
                                {categoria.nome}
                            </option>
                        )
                        )}
                    </select>
                    </label>
                    <label>
                        <h3>Raças:</h3>
                    <select>
                        {racas_array.map(raca => (
                            <option key={raca.id} value={racas} onChange={e => setRacas(e.target.value)}>
                                {raca.nome}
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