import {Link} from 'react-router-dom';
import React, {useState} from 'react';
export const Boxman = ()=>{
    
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredProject, setIsHoveredProject] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const handleMouseOnHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseOffHome = () => {
    setIsHoveredHome(false);
  };

  const handleMouseOnAbout = () => {
    setIsHoveredAbout(true);
  };

  const handleMouseOffAbout = () => {
    setIsHoveredAbout(false);
  };

  const handleMouseOnProject = () => {
    setIsHoveredProject(true);
  };

  const handleMouseOffProject = () => {
    setIsHoveredProject(false);
  };

  const handleMouseOnContact = () => {
    setIsHoveredContact(true);
  };

  const handleMouseOffContact = () => {
    setIsHoveredContact(false);
  };
    return(
        <>
         <div className='boxman'>
        <Link to="/">
            <div className="homie"
              onMouseEnter={handleMouseOnHome}
              onMouseLeave={handleMouseOffHome}
              style={{ cursor: 'pointer' }}
            >

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              {isHoveredHome && <p id="layee">Home</p>}
            </div>
          </Link>
          <Link to="/About">
            <div className='homie'
              onMouseEnter={handleMouseOnAbout}
              onMouseLeave={handleMouseOffAbout}
              style={{ cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
              {isHoveredAbout && <p id="layee">About</p>}
            </div>
          </Link>
          <Link to="/Project"><div className='homie'
            onMouseEnter={handleMouseOnProject}
            onMouseLeave={handleMouseOffProject}
            style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
            {isHoveredProject && <p id="layee">Project</p>}
          </div></Link>
          <Link to="/Contact">
            <div className='homie'
              onMouseEnter={handleMouseOnContact}
              onMouseLeave={handleMouseOffContact}
              style={{ cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z" /></svg>
              {isHoveredContact && <p id="layee">Contact</p>}
            </div>
          </Link>

        </div>
        </>
    )
}