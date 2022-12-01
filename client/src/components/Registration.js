import React, {useEffect, useRef, useState} from 'react';
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Registration.css';
import {registration} from "../http/userAPI";


const Registration = () => {

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PHONE_REGEX = /^[\d+]{6,10}$/;

    const userRef = useRef()
    const errRef = useRef()

    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)

    const [lastName, setLastName] = useState('')
    const [validLastName, setValidLastName] = useState(false)
    const [lastNameFocus, setLastNameFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [address, setAddress] = useState('')
    const [addressFocus, setAddressFocus] = useState(false)

    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false)
    const [phoneFocus, setPhoneFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const nameCheck = USER_REGEX.test(name)
        const lastNameCheck = USER_REGEX.test(lastName)
        const emailCheck = EMAIL_REGEX.test(email)
        const phoneCheck = PHONE_REGEX.test(phone)
        setValidName(nameCheck)
        setValidLastName(lastNameCheck)
        setValidEmail(emailCheck)
        setValidPhone(phoneCheck)
    }, [name, lastName, email, phone])



    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [pwd, matchPwd, email, phone, name, lastName])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = PWD_REGEX.test(pwd);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PHONE_REGEX.test(phone);
        const v4 = USER_REGEX.test(name);
        const v5 = USER_REGEX.test(lastName);

        if (!v1 || !v2 || !v3 || !v4 || !v5) {
            setErrMsg("Invalid Entry");
            return
        }
        try {
            let data;
            data = await registration(name, lastName, email, address, phone, pwd)
            console.log(data)
            setSuccess(true)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register 2</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Name:
                            <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validName || !name ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="namenote"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}

                        />
                        <p id="namenote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            4 to 24 characters.<br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed
                        </p>

                        <label htmlFor="lastname">
                            Lastname:
                            <span className={validLastName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validLastName || !lastName ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            aria-invalid={validLastName ? "false" : "true"}
                            aria-describedby="lastnamenote"
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}

                        />
                        <p id="lastnamenote" className={lastNameFocus && lastName && !validLastName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            4 to 24 characters.<br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed
                        </p>

                        <label htmlFor="email">
                            Email:
                            <span className={validEmail ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validEmail || !email ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-describedby="emailnote"
                            aria-invalid={validEmail ? "false" : "true"}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Please write correct email
                        </p>

                        <label htmlFor="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            id="address"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setAddress(e.target.value)}
                            onFocus={() => setAddressFocus(true)}
                            onBlur={() => setAddressFocus(false)}

                        />

                        <label htmlFor="phone">
                            Phone:
                            <span className={validPhone ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={validPhone || !phone ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="phone"
                            ref={userRef}
                            autoComplete="off"
                            aria-invalid={validPhone ? "false" : "true"}
                            aria-describedby="phonenote"
                            onChange={(e) => setPhone(e.target.value)}
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                        />
                        <p id="phonenote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Please write correct phone.<br/>
                            This field contains only numbers.
                        </p>

                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}

                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            8 to 24 characters.<br/>
                            Must include uppercase and lowercase letters, a number and a special character.<br/>
                            Allowed special characters:
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="hashtah">#</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm password:
                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}

                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Must match the first password input field.
                        </p>
                        <button disabled={!validName || !validLastName || !validEmail || !validPwd || !validMatch ? true : false}>Sign up</button>
                    </form>
                    <p>
                        Already registered?<br/>
                        <span className="line">
                        {/*put router link here*/}
                            <a href="#">Sign In</a>
                    </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Registration;