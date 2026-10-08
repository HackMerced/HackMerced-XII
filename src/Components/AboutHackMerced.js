// import React from 'react'; // seems really redundant to have to
// import this everywhere, need to look into for a fix
import React from 'react';
// import TeamPhoto from '../Assets/team-photo.JPG';
// import TeamPhoto from '..//Assets/Team/HM10Team/Team2.webp';
import GreenHill from '../Assets/green_hill.png';

//import { Card } from '@mui/material';

export default function AboutHackMerced(){
    return(
        <div className="About-HM">
            <div className="About-HM-Banner" style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden'
            }}>
                <img 
                    src={GreenHill} 
                    alt="Green Hill Banner" 
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <h2 className='About-HM-Title' style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '4rem'
                    }}>About HackMerced</h2>
                </div>
            </div>
                <div className="About-HM-Text" style={{
                    marginTop: 100,
                    margin: 100,
                    marginBotton:0,
                    paddingTop: 60,
                    paddingBottom: 60,
                    padding: 40
                }}>HackMerced is a hackathon hosted at the
                        University of California, Merced by an organization
                        comprised of UC Merced students and alumni. Students
                        from all schools and backgrounds, regardless of prior
                        experience in computer science, are invited to participate.
                        We aim to create a collaborative and interdisciplinary
                        environment that showcases the creativity and innovation
                        culminating in the San Joaquin Valley.
                        <br/><br/>
                        Celebrating 12 years of HackMerced! View our previous iterations here: <a href="https://archives.hackmerced.com/">HackMerced Archives</a>
                    </div>

        </div>
    )
}