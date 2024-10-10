import React, { useEffect, useState, useContext, createContext } from "react";
import { Firebasecontextceom } from "./FirebaseEcom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
import Headercom2 from "./Header2";



const Providers = createContext();

const Usersignin = (props) => {

    const navigate = useNavigate();
    const firebaseusecontextecom = useContext(Firebasecontextceom);
    const [userdata, setuserdata] = useState([])

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')

    const changeemail = (e) => {
        setemail(e.target.value)
    }
    const changepassword = (e) => {
        setpassword(e.target.value)
    }

    // useEffect(()=>
    // {
    //   firebaseusecontextecom.getuserdataforsignin().then((dataa)=> setuserdata(dataa.docs))

    // }, [])

    // const signinofuser =(e)=>{

    //     e.preventDefault();

    //     for(let i=0; i<userdata.length; i++)
    //     {
    //         if (userdata[i].email === email && userdata[i].password === password)
    //         {
    //                    navigate('/')
    //         }

    //         else{
    //             alert('incorecct')
    //         }
    //     }
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataa = await firebaseusecontextecom.getuserdataforsignin();
                setuserdata(dataa.docs);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const signinofuser = (e) => {
        e.preventDefault();

        const userFound = userdata.find(user => user.data().email === email && user.data().password === password);

        if (userFound) {
            alert("Successfully Login")
            navigate('/home');
        } else {
            alert('Incorrect email or password');
        }
    }




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
                marginRight: '350px'
            }}>
                <div>
                    <h2>Sign In</h2>
                </div>

                <div className="group" style={{ marginTop: '50px' }}>
                    <input type="email" onChange={changeemail} value={email} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                </div>

                <div className="group">
                    <input type="password" onChange={changepassword} value={password} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                </div>
                <Button onClick={signinofuser} style={{ width: "280px" }} variant="dark">Sign In</Button>
            </div>
        </div>

        <div>
            <Footer />
        </div>

        <Providers.Provider value={{ email }}>{props.children}</Providers.Provider>

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


export { Usersignin, Providers };