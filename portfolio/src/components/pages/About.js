import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const About = (props) => {
  const bgcolor={
    // position:'fixed',
    backgroundColor:'#122222',
    height:'100%'
  }
  const Image = {
    marginTop:'-3px',
    float:'',
    width:'300px',
    height:'280px'
  }

  const Margin={
    padding:'20px',
    width:'auto',
    margin:'auto',
    color:'white'
  }

  return (
   <>
   <div>
      <Jumbotron style={bgcolor}>
        <img style={Image} src='./image/profileImage.jpg' alt='image-wrap'/>
        <div style={Margin}>
        <h3 className="display-5">Hello I,m Abrar Ali </h3>
        <p className="lead"> <h>I am working with HTML5 , CSS3 , Bootstrap , ReactStrap , Jquery , Javascript , JS6 , React.js  technologies as front-End developer </h></p>
        <p className="lead"> <h>I,m front End developer i,m continuously working as an #Front-End developer as well backEnd developer.</h></p>
        <hr className="my-1" />
        <p><h5>As i understand  about my self i,m passionate about learning and serving into development. i am passionate to learning new things and adapt to the Enviroment as well </h5></p>
        <p className="lead">
        </p>
        </div>
      </Jumbotron>
    </div>

   </>
  );
};

export default About;