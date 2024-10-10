import React, { useState, useContext } from "react";
import { Firebasecontextceom } from "./FirebaseEcom";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Headercom2 from "./Header2";

const Usersignup = () => {

    const navigate = useNavigate();
    const firebaseusecontextecom = useContext(Firebasecontextceom);


    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [country, setcountry] = useState('')
    const [password, setpassword] = useState('')


    const changefirstname = (e) => {
        setfirstname(e.target.value)
    }


    const changelastname = (e) => {
        setlastname(e.target.value)
    }

    const changeemail = (e) => {
        setemail(e.target.value)
    }



    const changecountry = (e) => {
        setcountry(e.target.value)
    }


    const changepassword = (e) => {
        setpassword(e.target.value)
    }


    const adduserdata = async (e) => {
        try {

            if (firstname === '' || lastname === '' || email === '' || password === '' || country === '') {
                alert('Please Fill All The Fields')
            }

            else {
                e.preventDefault();

                await firebaseusecontextecom.Usersignupdata(
                    firstname,
                    lastname,
                    email,
                    password,
                    country
                )



                setfirstname('');
                setemail('');
                setcountry('');
                setlastname('')
                setpassword('')
                alert("Listing added successfully");
                navigate('/usersignin');
            }


        }
        catch {
            console.log('Error adding orders:')
        }
    };





    return (
       
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", gap: '10px' }}>
            <div>
                <Headercom2 />
            </div>

            <div className="content-wrapper" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: '50px',
                width: '100%',
                padding: '20px',
                marginLeft: '160px'
            }}>
                <div className="video-container" style={{ flex: '1', width: '75%', marginLeft: '200px' }}>
                    <video autoPlay muted loop style={{ width: '100%', height: '600px' }}>
                        <source src="/videoo.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="form-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: '1',
                    width: '25%',
                    marginRight: '500px'
                }}>
                    <div>
                        <h2>Sign Up Details</h2>
                    </div>

                    <div className="group" style={{ marginTop: '30px' }}>
                        <input type="text" onChange={changefirstname} value={firstname} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>First Name</label>
                    </div>

                    <div className="group">
                        <input type="text" onChange={changelastname} value={lastname} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Last Name</label>
                    </div>

                    <div className="group">
                        <input type="email" onChange={changeemail} value={email} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Email</label>
                    </div>

                    <div className="group">
                        <input type="text" onChange={changecountry} value={country} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Country</label>
                    </div>

                    <div className="group">
                        <input type="password" onChange={changepassword} value={password} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Password</label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", gap: '30px' }}>
                        <Button onClick={adduserdata} style={{ width: "140px", textDecoration: 'none' }} variant="dark">Sign Up</Button>
                        <Button style={{ width: "140px", textDecoration: 'none', color: 'white' }} variant="dark">
                            <NavLink to='/usersignin'>Already Have Account</NavLink>
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .content-wrapper {
                        flex-direction: column !important;
                        margin-left: 0 !important;
                    }
                    .video-container {
                        width: 100% !important;
                        margin-left: 0 !important;
                    }
                    .form-container {
                        width: 100% !important;
                        margin-right: 0 !important;
                        margin-top: 20px;
                    }
                    .group {
                        width: 100% !important;
                    }
                    .group input {
                        width: 100% !important;
                    }
                    video {
                        height: auto !important;
                        width: 100% !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default Usersignup;