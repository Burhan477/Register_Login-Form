import React from 'react'

const Home = ({setLoginUser}) => {
    return (

        <div>
            <form className="form-horizontal" role="form">
                <div className="container p-5">
                    <div className="card border-1 shadow w-75 p-3 mx-auto">
                        <h2 className="text-center text-danger">   </h2>

                        <div>
                            <div className="">
                                <h1 className="text-center text-capitalize text-danger">Welcome!</h1>
                            </div>
                        </div>

                       
                        <button type="submit" 
                        onClick={() => setLoginUser({})}
                        className="btn btn-primary btn-block my-3">Log out</button>
                    </div>
                </div>
            </form>
        </div>




    )
}

export default Home
