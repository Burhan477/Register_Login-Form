import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { useform } from 'react-hook-form';
import classNames from 'classnames';


const App = () => {
  const { register, handleSubmit, errors } = useform();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <h1 className="card1">This is Register form</h1>
      </div>

      <div className="card2">
        <div className="container-fluid py-3">
          <div className="card border-5 shadow w-75 p-3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input type="text"
                  className={classNames("form-control",{"is-invalid":true})}
                  name="firstname"
                  id="fname"
                  placeholder="Enter Your Full Name"
                  ref={register({
                    require: true,
                  })}
                />

                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>

              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input type="text"
                  className="form-control"
                  name="lastname"
                  id="lname"
                  placeholder="Enter Your Full Name"
                  ref={register({ require: "this field is require", })}
                />

                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail Address</label>
                <input type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-mail Address"
                  ref={register({ 
                    require: "this field is require",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "please enter valid email"
                    }
                    })}
                />

                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>

              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  ref={register({ 
                    require: "this field is require",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "please enter valid phone number"
                    }
                    })}
                />
                
                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>

              </div>
              <div className="form-group">
                <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="male" defaultValue="male" name="gender" ref={register({ require: true })} />
                  <label className="form-check-label" htmlFor="male">male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="female" defaultValue="female" name="gender" ref={register({ require: true })} />
                  <label className="form-check-label" htmlFor="female">female</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="other" defaultValue="other" name="gender" ref={register({ require: true })} />
                  <label className="form-check-label" htmlFor="other">other</label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="fullname">Address</label>
                <input type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Enter Your Address"
                  ref={register({ require: true })}
                />
                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text"
                  className="form-control"
                  name="password"
                  id="password" placeholder="Enter Your Password"
                  ref={register({ 
                    require: "this field is require",
                    pattern: {
                      value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/,
                      message: "please enter valid phone number"
                    }
                    })}
                />

                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>

              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="text"
                  className="form-control"
                  name="Cpassword"
                  id="password"
                  placeholder="Enter Your Confirm Password"
                  ref={register({ 
                    require: "this field is require",
                    pattern: {
                      value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/,
                      message: "please enter valid password"
                    }
                    })}
                />

                <small className="form-text text-danger">
                  {errors.firstname?.type === "required" && "This Field is require"}
                </small>

              </div>

              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>

//  patterns
//  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//  phone: ^\d{10}$
//  password: (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$
//  Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)

  )
}



export default App
