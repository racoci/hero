import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import logoImg from "../../assets/logo.svg";
import {FiPower, FiTrash2} from "react-icons/fi";
import api from "../../services/api"

import "./styles.css"

function Profile() {
    const [incidents, set_incidents] = useState([]);
    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongId");
    useEffect(() => {
        api.get("profile", {
            headers: {
                Authorization: ongId
            }
        }).then(({data}) => {
            set_incidents(data)
        })
    }, [ongId])
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1> Casos cadastrados</h1>
                <ul>{incidents.map(({id, title, description, value}) => (
                    <li key={id}>
                        <strong>CASO:</strong>
                        <p>{title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(value)}</p>
                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}</ul>
        </div>
    )
}

export default Profile