import { useState } from "react";
import { AiFillEye } from "react-icons/ai"

const LogIN = () => {
    const [info, setInfo] = useState({
        email: "",
        pass: ""
    })

    const [error, setError] = useState({
        emailValidate: null,
        passValidate: null,
        passConfirm: null
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const changeValue = (e) => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
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
                    !e.target.value.match(strongRegex) ?
                        "please enter a valid Password"
                        : null
            })
        }
    }
    const onChange = (e) => {
        if (e.target.value.match(/\s/g)) {
            e.target.value = e.target.value.replace(/\s/g, "")
        }
    };
    const confirm = (e) => {
        let pss = document.getElementById("pass").value
        if (e.target.value !== pss)
            setError({
                ...error,
                passConfirm:
                    "Does Not Match"
            })
        else {
            setError({
                passConfirm:
                    null
            })
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="box-shadow-full mt-4 ">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3 mt-4">
                        <label >Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Email" onChange={(e) => changeValue(e)} required />
                        <span><small className="text-danger">  {error.emailValidate} </small></span>

                    </div>
                    <div className="mb-3 mt-4">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" required />
                    </div>
                    <div className="mb-3">
                        <label>Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username" onKeyDown={(e) => onChange(e)} required />
                    </div>

                    <div className="mb-3 mt-4">
                        <label className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <input type={passwordShown ? "text" : "password"} name="pass" id="pass" className="form-control" placeholder="Password" onChange={(e) => changeValue(e)} required />
                            <span className="input-group-text" id="basic-addon1" onClick={togglePassword}><AiFillEye /></span>
                        </div>
                        <small className="text-danger"> {error.passValidate} </small>
                    </div>
                    <div className="mb-3 mt-4">
                        <label className="form-label">Confirm Password</label>
                        <div className="input-group mb-3">
                            <input type={passwordShown ? "text" : "password"} name="pass" className="form-control" placeholder="Password" onChange={(e) => confirm(e)} required />
                            <span className="input-group-text" id="basic-addon1" onClick={togglePassword}><AiFillEye /></span>
                        </div>
                    </div>
                    <small className="text-danger"> {error.passConfirm} </small>
                    <br />
                    <button type="submit"
                        className="btn btn-primary">Log in</button>
                </form>
            </div>
        </div>
    )
}


export default LogIN;