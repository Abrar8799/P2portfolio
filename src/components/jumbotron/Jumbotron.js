import React from 'react';
import './style/jumbo.css';
import { Jumbotron, Card, CardBody, CardTitle} from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
        
      <Jumbotron className="Jumbotron">
      <CardTitle className="Title"><h1>Skills</h1></CardTitle>
     <Card className="Card">
        <CardBody className='CardBody'>
        <img className="SetImage" src="./Skills/HTML.jpg" alt="React Js Image"/>
        </CardBody>          
      </Card >

      <Card className="Card">
        <CardBody className='CardBody'>
        <img className="SetImage" src="./Skills/Css.jpg" alt="React Js Image"/> 
        </CardBody>          
      </Card >

      <Card className="Card">
        <CardBody className='CardBody'>
        <img className="SetImage" src="./Skills/bootstrap.jpg" alt="React Js Image"/> 
        </CardBody>          
      </Card >

      <Card className="Card">
        <CardBody className='CardBody'>
        <img className="SetImage" src="./Skills/ReactStrap.jpg" alt="React Js Image"/>
        </CardBody>          
      </Card >

      <Card className="Card">
        <CardBody className='CardBody'>
          <img className="SetImage" src="./Skills/Jquery.jpg" alt="React Js Image"/>
        </CardBody>
      </Card>

      <Card className="Card">
        <CardBody className='CardBody'>
          <img className="SetImage" src="./Skills/js.jpg" alt="React Js Image"/>
        </CardBody>
      
      </Card>

      <Card className="Card">
        <CardBody className='CardBody'>
          <img className="SetImage" src="./Skills/ES6.jpg" alt="React Js Image"/>
        </CardBody>
      </Card>

        <Card className="Card">
        <CardBody className='CardBody'>
          <img  className="SetImage" src="./Skills/reactjs.jpg" alt="React Js Image"/>
        </CardBody>
      </Card>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;