import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom"
import logoImg from "../../assets/logo.svg";
import {FiPower, FiTrash2} from "react-icons/fi";
import api from "../../services/api"

import "./styles.css"

function Profile() {
    const [incidents, set_incidents] = useState([]);
    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongId");
    const history = useHistory();

    useEffect(() => {
        api.get("profile", {
            headers: {
                Authorization: ongId
            }
        }).then(({data}) => {
            set_incidents(data)
        })
    }, [ongId])

    async function handleDeleteIncident(deletingId) {
        try {
            await api.delete(`incidents/${deletingId}`, {
                headers: {
                    Authorization: ongId
                }
            })
            set_incidents(incidents.filter( ({id}) => deletingId !== id ))
        } catch (e) {
            alert("Erro ao deletar caso, tente novamente")
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push("/")
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
                <button onClick={handleLogout} type="button">
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
                        <button 
                            onClick={() => handleDeleteIncident(id)}
                            type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}</ul>
        </div>
    )
}

export default Profile