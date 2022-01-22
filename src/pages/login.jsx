import { useState } from "react";
import { AiFillEye } from "react-icons/ai"

const LogIN = () => {
    const [info, setInfo] = useState({
        email: "",
        pass: ""
    })

    const [error, setError] = useState({
        emailValidate: null,
        passValidate: null
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const changeValue = (e) => {
        if (e.target.name === "email") {
            setInfo({
                ...info,
                email: e.target.value
            })
            const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            setError({
                ...error,
                emailValidate:
                    e.target.value.length === 0 ?
                        "Please Enter Your Email"
                        : !e.target.value.match(regex) ?
                            "Please Enter A Correct Email Format"
                            : null
            })
        }

        else if (e.target.name === "pass") {
            setInfo({
                ...info,
                pass: e.target.value
            })
            setError({
                ...error,
                passValidate:
                    e.target.value.length < 8 ?
                        "please enter a valid Password"
                        : null
            })
        }
    }

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="box-shadow-full mt-4 ">



                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label >Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Email" onChange={(e) => changeValue(e)} required />
                        <small className="text-danger"> {error.emailValidate} </small>
                        <br />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <input type={passwordShown ? "text" : "password"} name="pass" className="form-control" placeholder="Password" onChange={(e) => changeValue(e)} required />
                            <span className="input-group-text" id="basic-addon1" onClick={togglePassword}><AiFillEye /></span>
                        </div>
                    </div>
                    <small className="text-danger"> {error.passValidate} </small>
                    <br />
                    <button type="submit"
                        className="btn btn-primary">Log in</button>
                </form>

            </div>
        </div>
    )
}


export default LogIN;