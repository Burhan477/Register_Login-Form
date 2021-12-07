import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const [user, setUser] = useState({

        email: "",
        password: "",

    })

    const handlenChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                // setLoginUser(res.data.user)
                // history.pushState("/")
            })
    }
    return (
        <>
            <div>
                <form className="form-horizontal" role="form">
                    {/* {console.log(user)} */}
                    <div className="container p-5">
                        <div className="card border-1 shadow w-75 p-3 mx-auto">
                            <h2 className="text-center text-danger">Login</h2>


                            <div className="form-group my-2">
                                <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                                <div className="col-sm-13 ">
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        placeholder="Email"
                                        className="form-control" name="email"
                                        onChange={handlenChange} />
                                </div>
                            </div>

                            <div className="form-group my-0">
                                <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
                                <div className="col-sm-13 ">
                                    <input type="password"
                                        id="password"
                                        name="password"
                                        value={user.password}
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

                            <button type="submit" onClick={login} className="btn btn-primary btn-block my-3">Login</button>

                            {/* <button type="submit" 
                            onClick={() => history.push("/register")} 
                            className="btn btn-primary btn-block">Register</button> */}

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
