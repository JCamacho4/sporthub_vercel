import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/profile.css"

export default function Profile({ userLogged, setUserLogged }) {

    let params = useParams();
    let username = params.username;

    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <div class="container mt-3">
            <form>
                <div class="row jumbotron box8">
                    <div class="col-sm-12 mx-t3 mb-4">
                        <h2>Change your personal info</h2>
                        <p> Hello {username}, here you can change your personal info</p>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="name-f">First Name</label>
                        <input type="text" class="form-control" name="fname" id="name-f" placeholder="Enter your first name." />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="name-l">Last name</label>
                        <input type="text" class="form-control" name="lname" id="name-l" placeholder="Enter your last name." />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email." />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="address-1">Address Line-1</label>
                        <input type="address" class="form-control" name="Locality" id="address-1" placeholder="Locality/House/Street no." />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="address-2">Address Line-2</label>
                        <input type="address" class="form-control" name="address" id="address-2" placeholder="Village/City Name." />
                    </div>
                    <div class="col-sm-4 form-group">
                        <label for="State">State</label>
                        <input type="address" class="form-control" name="State" id="State" placeholder="Enter your state name." />
                    </div>
                    <div class="col-sm-2 form-group">
                        <label for="zip">Postal-Code</label>
                        <input type="zip" class="form-control" name="Zip" id="zip" placeholder="Postal-Code." />
                    </div>
                    
                
                    <div class="col-sm-6 form-group">
                        <label for="Date">Date Of Birth</label>
                        <input type="Date" name="dob" class="form-control" id="Date" placeholder="" />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="sex">Gender</label>
                        <select id="sex" class="form-control browser-default custom-select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unspesified">Unspecified</option>
                        </select>
                    </div>
                   
                    <div class="col-sm-4 form-group">
                        <label for="tel">Phone</label>
                        <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Contact Number." />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="pass">Password</label>
                        <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password." />
                    </div>
                    <div class="col-sm-6 form-group">
                        <label for="pass2">Confirm Password</label>
                        <input type="Password" name="cnf-password" class="form-control" id="pass2" placeholder="Re-enter your password." />
                    </div>
                    <div class="col-sm-12">
                        <input type="checkbox" class="form-check d-inline" id="chb" /><label for="chb" class="form-check-label">&nbsp;I accept all terms and conditions.
                        </label>
                    </div>

                    <div class="col-sm-12 form-group mb-0">
                        <button class="btn btn-primary float-right">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    );
}
