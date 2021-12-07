import React from 'react'
import { useState } from 'react'
import axios from "axios"
// import { useHistory } from "react-router-dom"

const Register = () => {

    // const history = useHistory()

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        address: "",
        phone: "",
        gender: "",
        password: "",
        cpassword: ""
    })

    const handlenChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })
    }

    const register = async(e) => {
        e.preventDefault();
        const { fname, lname, email, address, phone, gender, password, cpassword } = user

        // if (fname && lname && email && address && phone && gender && password && cpassword &&
        //     (password === cpassword)) {

            try {
                const res = await axios.post("http://localhost:9002/register",user)
                .then( res => {
                alert(res.data.message)
                // history.pushState("/login")   
            })
            } catch (error) {
                console.log(error);
            }
            // .then( res => console.log(res))

        // } else {
        //     alert("invalid Input")
        // }
    }


    return (
        <>
            <div>
                <div>
                    <form className="form-horizontal" method="POST">
                        {console.log("user", user)}
                        <div className="container p-5">
                            <div className="card border-1 shadow w-75 p-3 mx-auto">
                                <h2 className="text-center text-danger">Registration</h2>
                                <div className="form-group my-2">
                                    <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
                                    <div className="col-sm-13">
                                        <input type="text" id="firstName"
                                            name="fname"
                                            value={user.fname}
                                            placeholder="First Name"
                                            className="form-control" autofocus
                                            onChange={handlenChange} />
                                    </div>
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
                                    <div className="col-sm-13 ">
                                        <input type="text" id="lastName" name="lname"
                                            value={user.lname}
                                            placeholder="Last Name"
                                            className="form-control" autofocus
                                            onChange={handlenChange} />
                                    </div>
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                                    <div className="col-sm-13 ">
                                        <input type="email" id="email"
                                            name="email"
                                            value={user.email}
                                            placeholder="Email"
                                            className="form-control" name="email"
                                            onChange={handlenChange} />
                                    </div>
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="lastName" className="col-sm-3 control-label">Address</label>
                                    <div className="col-sm-13">
                                        <input type="text" id="lastName" name="address"
                                            value={user.address}
                                            placeholder="Enter Your Address"
                                            className="form-control" autofocus
                                            onChange={handlenChange} />
                                    </div>
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number </label>
                                    <div className="col-sm-13 ">
                                        <input type="phoneNumber" id="phoneNumber" name="phone"
                                            value={user.phone}
                                            placeholder="Phone number"
                                            className="form-control"
                                            onChange={handlenChange} />
                                        <span className="help-block"></span>
                                    </div>
                                </div>

                                <div className="form-group my-2 text-center">
                                    <label htmlFor="gender" className="mr-4">Choose Your Gender: </label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="male" defaultValue="male" 
                                        name="gender" 
                                        value={user.gender} 
                                        onChange={ handlenChange }/>
                                        <label className="form-check-label" htmlFor="male">male</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="female" defaultValue="female" 
                                        name="gender" value={user.gender} 
                                        onChange={ handlenChange }/>
                                        <label className="form-check-label" htmlFor="female">female</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="other" defaultValue="other" name="gender" 
                                        value={user.gender} 
                                        onChange={ handlenChange }/>
                                        <label className="form-check-label" htmlFor="other">other</label>
                                    </div>
                                </div>

                                <div className="form-group my-0">
                                    <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
                                    <div className="col-sm-13 ">
                                        <input type="password" id="password" name="password"
                                            value={user.password}
                                            placeholder="Password"
                                            className="form-control"
                                            onChange={handlenChange} />
                                    </div>
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label>
                                    <div className="col-sm-13 ">
                                        <input type="password" id="password" name="cpassword"
                                            value={user.cpassword}
                                            placeholder="Password"
                                            className="form-control"
                                            onChange={handlenChange} />
                                    </div>
                                </div>

                                <div className="form-group my-2">
                                    <div className="col-sm-13  col-sm-offset-3">
                                        <span className="help-block"></span>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block"
                                    onClick={register}>Register</button>

                                {/* <button className="btn btn-primary btn-block my-3" 
                                onClick={() => history.push("/login")}>Login</button> */}
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
