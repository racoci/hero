import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import api from "../../services/api"

import "./styles.css";

import logoImg from "../../assets/logo.svg";

function Register() {
    const [name, set_name] = useState("");
    const [email, set_email] = useState("");
    const [whatsapp, set_whatsapp] = useState("");
    const [city, set_city] = useState("");
    const [uf, set_uf] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name, email, whatsapp, city, uf
        };
        try{
            const {data: {id} } = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${id}`)
            history.push("/")
        } catch (e) {
            alert(`Erro no cadastro: ${e}`)
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => set_name(e.target.value)} 
                    />
                    <input
                        placeholder="E-mail" 
                        type="email" 
                        value={email}
                        onChange={e => set_email(e.target.value)} 
                    />
                    <input
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => set_whatsapp(e.target.value)} 
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => set_city(e.target.value)} 
                        />
                        <input
                            placeholder="UF" 
                            value={uf}
                            onChange={e => set_uf(e.target.value)} 
                            style={{
                                widht: 80
                            }}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register