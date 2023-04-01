import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './form.css';

function Register() {
    const [userData, setUserData] = useState({
        userName: "",
        lname:"",
        email:"",
        address:"",
        country:"",
        gender:"",
        phoneNumber:"",
        password: "",
        cpassword: ""
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.password !== userData.cpassword) {
            alert("Passwords are not matching..!")
        } else {
            axios({
                url: 'http://localhost:5000/user/signup',
                method: 'POST',
                headers: {},
                data: userData
            }).then((res) => {
                console.log(res);
                navigate('/');
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const inputHandle = (e, id) => {
        if (id === "fname") {
            setUserData({ ...userData, userName: e.target.value })
        }else if (id === "lname") {
            setUserData({ ...userData, lname: e.target.value })
        } else if (id === "email") {
            setUserData({ ...userData, email: e.target.value })
        } else if (id === "address") {
            setUserData({ ...userData, address: e.target.value })
        } else if (id === "country") {
            setUserData({ ...userData, country: e.target.value })
        } else if (id === "gender") {
            setUserData({ ...userData, gender: e.target.value })
        } else if (id === "phonenumber") {
            setUserData({ ...userData, phoneNumber: e.target.value })
        } else if (id === "password") {
            setUserData({ ...userData, password: e.target.value })
        } else {
            setUserData({ ...userData, cpassword: e.target.value })
        }
    }

    return (
        <div className="reg-container">
            <div className="reg-form">
                <div className="form-title">
                    <h1>Registration Form</h1>
                </div>
                <div className="form-container">
                    <form>
                        <div className="inputs"><input type="text" placeholder="First Name" onChange={(e) => inputHandle(e, 'fname')} value={userData.userName}></input></div>
                        <div className="inputs"><input type="text" placeholder="Last Name" onChange={(e) => inputHandle(e, 'lname')} value={userData.lname}></input></div>
                        <div className="inputs"><input type="text" placeholder="Email" onChange={(e) => inputHandle(e, 'email')} value={userData.email}></input></div>
                        <div className="inputs"><input type="textarea" placeholder="Address" onChange={(e) => inputHandle(e, 'address')} value={userData.address}></input></div>
                        <div className="inputs"><input type="text" placeholder="Country" onChange={(e) => inputHandle(e, 'country')} value={userData.country}></input></div>
                        <div className="inputs" onChange={(e) => inputHandle(e, 'gender')} value={userData.gender}>
                             Gender <input type="radio" value="MALE" name="gender" id="gender" /> Male
                            <input type="radio" value="FEMALE" name="gender" id="gender" /> Female
                        </div>
                        <div className="inputs"><input type="text" placeholder="Phone number" onChange={(e) => inputHandle(e, 'phonenumber')} value={userData.phoneNumber}></input></div>

                        <div className="inputs"><input type="password" placeholder="Password" onChange={(e) => inputHandle(e, 'password')} value={userData.password}></input>
                        </div>
                        <div className="inputs"><input type="password" placeholder="Confirm Password" onChange={(e) => inputHandle(e, 'cpassword')} value={userData.cpassword}></input>
                        </div>
                        <div className="btns">
                            <button onClick={handleSubmit} id='regBtn'>Register</button>
                            <p>Already registered? click login</p>
                            <Link to="/"> <button id='logBtn'>Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;