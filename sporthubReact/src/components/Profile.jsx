import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/profile.css"
// import axios from "axios";

export default function Profile({ userLogged, setUserLogged }) {

    let params = useParams();
    let username = params.username;

    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <section>
            <div className="card">
                <div className="img">
                    <img src="https://telematicanet.ucol.mx/egresados/assets/images/la-imagen-del-usuario-con-el-fondo-negro-626x626.jpg" alt="error"/>
                </div>
                <div className="content">
                    <h2>Pepe</h2>
                    <p><strong>@</strong>{username}</p>
                    <button className="button">Change Personal Info</button> 
                </div>                 
            </div>    
        </section>

    );

    /*<div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <img className="mt-3 mb-3" src="https://media.licdn.com/dms/image/D4D03AQFUwl4mPqQsZw/profile-displayphoto-shrink_800_800/0/1678213291434?e=1683763200&v=beta&t=farvhqaQUz7fsOJepXpuLSWbJ1wNUvaVOId0_4z7IhM" height="100" width="100" />
                        <span className="name mt-3">Eleanor Pena</span>
                        <span className="idd">@{username}</span>

                        <div className=" d-flex mt-2 p-3">
                            <button className="btn1 btn-dark">Change my personal information</button>
                        </div>
                    </div>
                </div>
            </div>*/

}
