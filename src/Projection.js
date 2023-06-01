import React, { useState } from 'react';
import './projection.css';
import { Link } from 'react-router-dom';
import {Github,Demo } from './misc'

export const Project = () => {
    const [isOn, setisOn] = useState(false);

    const Handlehoveron = () => {
        setisOn(true);
    }
    const Handlehoveroff = () => {
        setisOn(false);
    }

    return (
        <>
            <div className="project">
                <p className="seven" >PROJECTS</p>
                <h3>Peep my projects?</h3>
                <div className="project-box">
                    <div className="projectm"
                        onMouseEnter={Handlehoveron}
                        onMouseLeave={Handlehoveroff}
                        style={{ cursor: 'pointer' }}>
                        {isOn && <div className='allay'
                            style={{
                                width: '100%',
                                height: '100%',
                                flexDirection: 'column',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <p
                                style={{
                                    fontWeight: 600,
                                    color: 'black',
                                    textAlign: 'center'
                                }}>A working Social media Application made with Node js.</p>
                                 
                            <button style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                margin:'5px 5px'}} 
                            ><a href='https://nokidigital.com'><Demo/></a></button>
                            
                            <button style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                margin:'5px 5px'}} >
                                    <Github/>

                            </button>
                        </div>}
                    </div>

                    <div className="projectm a"
                        onMouseEnter={Handlehoveron}
                        onMouseLeave={Handlehoveroff}
                        style={{ cursor: 'pointer' }}>

                        {isOn && <div className='allay'
                            style={{
                                width: '100%',
                                height: '100%',
                                flexDirection: 'column',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <p
                                style={{
                                    fontWeight: 600,
                                    color: 'black',
                                    textAlign: 'center'
                                }}> Landing Page for a Materclass tutorial</p>
                            
                            <button style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                padding:'5px 5px'}}
                            ><a href='https://nokidigital.com'><Demo/></a></button>
                            <button style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                margin:'5px 5px'}} >
                                    <Github/>

                            </button>
                        </div>}
                    </div>

                    <div className="projectm b"
                        onMouseEnter={Handlehoveron}
                        onMouseLeave={Handlehoveroff}
                        style={{ cursor: 'pointer' }}>


                        {isOn && <div className='allay'
                            style={{
                                width: '100%',
                                height: '100%',
                                flexDirection: 'column',
                                display: 'flex',
                                justifyContent: 'center',
                                fill:'purple',
                                alignItems: 'center'
                            }}>
                            <p
                                style={{
                                    fontWeight: 600,
                                    color: 'black',
                                    textAlign: 'center'
                                }}>A Tiktok Favorite video downloader with just JSON file</p>
                            
                            <button style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                padding:'5px 5px'}}
                            >     <a href='https://nokidigital.com'><Demo/> </a></button>
                           
                            <button style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                margin:'5px 5px'}} >
                                    <Github/>

                            </button>
                        </div>}
                    </div>
                    <div className="projectm c"
                        onMouseEnter={Handlehoveron}
                        onMouseLeave={Handlehoveroff}
                        style={{ cursor: 'pointer' }}>

                        {isOn && <div className='allay'
                            style={{
                                width: '100%',
                                height: '100%',
                                flexDirection: 'column',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <p style={{
                                fontWeight: 600,
                                color: 'black',
                                textAlign: 'center'
                            }}>A reddit search app to retrieve the most recent posts.</p>
                             
                            <button style={{
                            width:'40%',
                            height:'40px',
                            backgroundColor:'#f1f1f1',
                            borderRadius:'5px',
                            margin:'5px 5px'
                            
                            }}
                            ><a href='https://redditcrawler.vercel.app'><Demo/></a></button>
                            <button className='github' 
                            style={{
                                width:'40%',
                                height:'40px',
                                backgroundColor:'#f1f1f1',
                                borderRadius:'5px',
                                padding:'5px 5px'}}
                            >
                                <Github/>
                            </button>
                        </div>}
                    </div>
                </div>
                <h3 className='separate'
                style={{
                    textAlign:'center'
                }}>I have a separate page for all my projects!</h3>
                <div className='dean'>
               <Link to='/Project'><button className="button">Please show!</button></Link>
              </div>
            </div>
        </>
    )
}