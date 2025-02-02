import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/changePersonalInfo.css"
import axios from "axios";

export default function ChangePersonalInfo({ userLogged, setUserLogged }) {
    let params = useParams();
    let username = params.username;

    useEffect(() => {
        axios.get(`http://localhost:8080/userInfo/`+username)
          .then(response => {
            console.log(response.data);
            if(response.data.gender === null){
                response.data.gender = "unspesified";
            }
            setUserData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    }, [username]);

    const [userData, setUserData] = useState(null);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    function handleDataChange(e) {
        setUserData({...userData, name: e.target.value});
    }

    const submitEvent = (e) => {
        e.preventDefault();
        console.log(userData.date);
        let password = document.getElementById("pass").value;
        let password_confirm = document.getElementById("pass2").value;
        if(password!==password_confirm){
            alert("Passwords do not match");
        }else{
            if(userData.name===""){
                setErrorNombre(true);
            }else{
                setErrorNombre(false);
            }
            if(userData.email===""){
                setErrorEmail(true);
            }else{
                setErrorEmail(false);
            }
            if(userData.lastname===""){
                setErrorLastName(true);
            }else{
                setErrorLastName(false);
            }
            if(userData.name !=="" && userData.email!=="" && userData.lastname!==""){
                axios
                .post("http://localhost:8080/updateUser/", {
                  username: userData.username,
                  password: password,
                  name: userData.name,
                    email: userData.email,
                    date: userData.date,
                    lastname: userData.lastname,
                    phone: userData.phone,
                    address1: userData.address1,
                    address2: userData.address2,
                    country: userData.country,
                    postalcode: userData.postalcode,
                    gender: userData.gender,
                })
                .then((response) => {
                    alert("User updated");
                })
                .catch((error) => {
                  alert("The password is incorrect.");
            });
            }else{
                alert("You have to fill all the mandatory fields");
            }
        }

    }

    return (
        <>
            <form onSubmit={submitEvent}>
                <div className="tittle-subtittle">
                    <h2>Change your personal info</h2>
                    <p> Hello , here you can change your personal info</p>
                </div>
                <div className="row project-div d-flex align-items-stretch">
                    <div className="col project-section">
                        <h3 className="section-input"> Personal Information</h3>
                        <div className="input-field col-sm-8">
                            <label htmlFor="name-f" >First Name *</label>
                            <div className={errorNombre?"error": "noerror"}>Name is mandatory</div>
                            <input type="text" maxLength={40} className="form-control input-formulario" name="fname" id="name-f" 
                            value={userData?.name} onChange={(e) => handleDataChange(e)} />
                        </div>
                        <div className="input-field col-sm-8">
                            <label htmlFor="name-l">Last name *</label>
                            <div className={errorLastName?"error": "noerror"}>LastName is mandatory</div>
                            <input type="text" maxLength={40} className="form-control input-formulario" name="lname" id="name-l"
                            value={userData?.lastname} onChange={(e) => setUserData({...userData, lastname: e.target.value})} />
                        </div>
                        <div className="input-field col-sm-8">
                            <label htmlFor="email">Email *</label>
                            <div className={errorEmail?"error": "noerror"}>Email is mandatory</div>
                            <input type="email" maxLength={60} className="form-control input-formulario" name="email" id="email" 
                            value={userData?.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                        </div>

                        <div className="input-field col-sm-4">
                            <label htmlFor="tel">Phone</label>
                            <input type="tel" name="phone" className="form-control input-formulario" id="tel"
                            value={userData?.phone} onChange={(e) => setUserData({...userData, phone: e.target.value})} />
                        </div>

                        <div className="input-field col-sm-3">
                            <label htmlFor="Date">Date Of Birth *</label>
                            <input type="Date" name="dob" className="form-control input-formulario" id="Date"
                            value={userData?.date} onChange={(e) => setUserData({...userData, date: e.target.value})} />
                        </div>

                        <div className="input-field col-sm-3">
                            <label htmlFor="sex">Gender</label>
                            <select id="sex" className="form-control browser-default custom-select input-formulario"
                            value={userData?.gender} onChange={(e) => setUserData({...userData, gender: e.target.value})} >
                                <option value="unspesified">Unspecified</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                    </div>
                    <div className="col project-section">
                        <h3 className="section-input"> Location Information</h3>
                        <div className="input-field">

                            <label htmlFor="address-1">Address Line-1</label>
                            <input type="address" className="form-control input-formulario" name="Locality" id="address-1"
                            value={userData?.address1} onChange={(e) => setUserData({...userData, address1: e.target.value})} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="address-2">Address Line-2</label>
                            <input type="address" className="form-control input-formulario" name="address" id="address-2"
                            value={userData?.address2} onChange={(e) => setUserData({...userData, address2: e.target.value})} />

                        </div>

                        <div className="input-field col-sm-5">
                            <label htmlFor="State">Country</label>
                            <input type="address" className="form-control input-formulario" name="State" id="State"
                            value={userData?.country} onChange={(e) => setUserData({...userData, country: e.target.value})} />
                        </div>

                        <div className="input-field col-sm-3">
                            <label htmlFor="zip">Postal-Code</label>
                            <input type="zip" className="form-control input-formulario" name="Zip" id="zip"
                            value={userData?.postalcode} onChange={(e) => setUserData({...userData, postalcode: e.target.value})} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col project-section d-flex justify-content-cente">
                            <div style={{width: "50%",}}>
                                <h3 className="section-input"> Confirm your changes</h3>
                                <p id="extra-info"> We need you to introduce your password to confirm your changes </p>


                                <div className="input-field">
                                    <label htmlFor="pass">Password</label>
                                    <input type="Password" name="password" className="form-control input-formulario" id="pass" />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="pass2">Confirm Password</label>
                                    <input type="Password" name="cnf-password" className="form-control input-formulario" id="pass2" />
                                </div>

                                <br />
                                <button className="button-submit">Submit changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
