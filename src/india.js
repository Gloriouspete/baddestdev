import React from 'react';
import translapp from './translapp.png';
import mysearch from './mysearch.png';
import reddit from './redditcrawler.png';
import { Github, Demo } from './misc';
export const India = () => {
    return (
        <>
            <div className='project-section'>
                <h3 className='proone'>I Made a special page to showcase all
                    my project because what's a better way to say i'm competent?</h3>
                <div className='workyy'>
                    <div className='workbox 1'>
                        <div className='morty'>
                        <img src={translapp}  alt="Description of"/>
                        </div>
                        <div className='textbased-box'>
                            <div className='headline'>
                                <h2>Rant HQ</h2>
                                <div className='redbox'>
                                    <a href="https://example.com"><Demo /></a>
                                    <a href='https://github.com/Gloriouspete/social'><Github /></a>
                                </div>
                            </div>
                            <p className='mytexts'>
                                Rant Hq is an anonymous but public chat application for people
                                who doesn't want their information exposed.

                            </p>
                            <div className='subject-box'>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>Socket.io</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>

                    </div>
                    <div className='workbox 2'>
                        <div className='morty'>
                        <img src={translapp}  alt="Description of "/>
                        </div>
                        <div className='textbased-box'>
                            <div className='headline'>
                                <h2>Translapp</h2>
                                <div className='redbox'>
                                    <a href="https://translapp.vercel.app/"><Demo /></a>
                                    <a href='https://github.com/Gloriouspete/translator'><Github /></a>
                                </div>
                            </div>
                            <p className='mytexts'>
                                Translapp is a translation web app that converts over 15 different
                                languages and i add more on requests.
                            </p>
                            <div className='subject-box'>
                                <p className='mafor'>Static</p>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>Axios</p>
                                <p className='mafor'>REST API</p>
                            </div>
                        </div>


                    </div>
                    <div className='workbox 2'>
                        <div className='morty'>
                        <img src={mysearch}  alt="Description o"/>
                        </div>
                        <div className='textbased-box'>
                            <div className='headline'>
                                <h2>MySearch</h2>
                                <div className='redbox'>
                                    <a href="https://mysearch.vercel.app/"><Demo /></a>
                                    <a href='https://github.com/Gloriouspete/mysearch'><Github /></a>
                                </div>
                            </div>
                            <p className='mytexts'>
                                My search is a search engine that uses an API to retrieve data
                                all my API are consumed from the backend which makes it safer.

                            </p>
                            <div className='subject-box'>
                                <p className='mafor'>REST API</p>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>Axios</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>


                    </div>
                    <div className='workbox 2'>
                        <div className='morty'>
                       <img src={reddit}  alt="Description of "/>
                        </div>
                        <div className='textbased-box'>
                            <div className='headline'>
                                <h2>Tikfav</h2>
                                <div className='redbox'>
                                    <a href="https://"><Demo /></a>
                                    <a href='https://github.com/gloriouspete/tikfav'><Github /></a>
                                </div>
                            </div>
                            <p className='mytexts'>
                                Tikfav is a web app that accept json file from tiktok
                                and downloads your favorited videos to your file manager.

                            </p>
                            <div className='subject-box'>
                                <p className='mafor'>Axios</p>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>REST API</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>


                    </div>
                    <div className='workbox 2'>
                        <div className='morty'>

                        </div>
                        <div className='textbased-box'>
                            <div className='headline'>
                                <h2>Upwork Seeker</h2>
                                <div className='redbox'>
                                    <a href="https://"><Demo /></a>
                                    <a href='https://github.com/gloriouspete/tikfav'><Github /></a>
                                </div>
                            </div>
                            <p className='mytexts'>
                               Upwork seeker relieves the stress of searching for job when you can just search here,view the content and press the link to Apply.
                            </p>
                            <div className='subject-box'>
                                <p className='mafor'>Axios</p>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>REST API</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>
                    </div>
                    <div className='workbox 2'>
                        <div className='morty'>
                            <img src={reddit}  alt="Description of"/>

                        </div>
                        <div className='textbased-box'>
                            <div className='headline'>
                                <h2>Reddit Crawler</h2>
                                <div className='redbox'>
                                    <a href="https://redditcrawler.vercel.app"><Demo /></a>
                                    <a href='https://github.com/gloriouspete/redditcrawler'><Github /></a>
                                </div>
                            </div>
                            <p className='mytexts'>
                             Reddit Crawler is a search based web app that retrieves any information from reddit, Specically useful for job seekers.

                            </p>
                            <div className='subject-box'>
                                <p className='mafor'>Axios</p>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>REST API</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}