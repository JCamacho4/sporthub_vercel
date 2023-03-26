import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/changePersonalInfo.css"

export default function ChangePersonalInfo({ userLogged, setUserLogged }) {

    let params = useParams();
    let username = params.username;

    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <>
            <form>
                <div className="row ">
                    <div className="tittle-subtittle">
                        <h2>Change your personal info</h2>
                        <p> Hello {username}, here you can change your personal info</p>
                    </div>


                    <div className="card row mt-3 mb-2 p-3 div-input-group" >
                        <h3 className="section-input"> Personal Information</h3>
                        <div className="input-field">
                            <label htmlFor="name-f">First Name</label>
                            <input type="text" className="form-control input-formulario" name="fname" id="name-f" />

                        </div>
                        <div className="input-field">
                            <label htmlFor="name-l">Last name</label>
                            <input type="text" className="form-control input-formulario" name="lname" id="name-l" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control input-formulario" name="email" id="email" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="tel">Phone</label>
                            <input type="tel" name="phone" className="form-control input-formulario" id="tel" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="Date">Date Of Birth</label>
                            <input type="Date" name="dob" className="form-control input-formulario" id="Date" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="sex">Gender</label>
                            <select id="sex" className="form-control browser-default custom-select">
                                <option value="unspesified">Unspecified</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>

                    </div>

                    <div className="card row mt-3 mb-3 p-3 div-input-group">
                        <h3 className="section-input"> Location Information</h3>
                        <div className="input-field">

                            <label htmlFor="address-1">Address Line-1</label>
                            <input type="address" className="form-control input-formulario" name="Locality" id="address-1" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="address-2">Address Line-2</label>
                            <input type="address" className="form-control input-formulario" name="address" id="address-2" />

                        </div>

                        <div className="input-field">
                            <label htmlFor="State">Contry</label>
                            <input type="address" className="form-control input-formulario" name="State" id="State" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="zip">Postal-Code</label>
                            <input type="zip" className="form-control input-formulario" name="Zip" id="zip" />
                        </div>
                    </div>

                    <div className="card row mt-3 mb-3 p-3 div-input-group">

                        <h3 className="section-input"> Confirm your changes</h3>
                        <p id="extra-info"> We need you to introduce your password to confirm your changes </p>


                        <div className="input-field">
                            <label htmlFor="pass">Password</label>
                            <input type="Password" name="password" className="form-control" id="pass" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="pass2">Confirm Password</label>
                            <input type="Password" name="cnf-password" className="form-control" id="pass2" />
                        </div>

                        <br/>

                        <button className="button-submit">Submit changes</button>
                    </div>

                </div>
            </form>
        </>
    );
}
