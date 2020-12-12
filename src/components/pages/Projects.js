import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

const Projects = (props) => {
const bgcolor={
    backgroundColor:'#122222'
}
const textColor={
    color:'white'
}
    return (
    <div>
    <div>
      <Card>
        <CardImg top width="100%" src="./image/netflix.jpg" alt="Card image cap" />
        <CardBody style={bgcolor}>
          <CardTitle style={textColor} tag="h4">Projects: Netflix-clone </CardTitle>
          <CardSubtitle style={textColor} tag="h6" > This Projects I developed by React.js and in backEnd i use Firebase server.</CardSubtitle>
          <CardText  style={textColor} tag="h5">this projects folder-structure follow some-other app folder-structure because i took some help by youtube.</CardText>
        </CardBody>
      
      </Card>

      <Card>
        <CardImg top width="100%" src="./image/Whatsapp.jpg" alt="Card image cap" />
        <CardBody style={bgcolor}>
          <CardTitle style={textColor} tag="h4">Projects: Whatsapp-clone </CardTitle>
          <CardSubtitle style={textColor} tag="h6" > This Projects I developed by React.js  with redux and in backEnd i use Firebase server.</CardSubtitle>
          <CardText  style={textColor} tag="h5">this projects folder-structure follow some-other app folder-structure because i took some help by youtube.</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="./image/.jpg" alt="Card image cap" />
        <CardBody style={bgcolor}>
          <CardTitle style={textColor} tag="h4">Projects: in Progress </CardTitle>
          <CardSubtitle style={textColor} tag="h6" ><strike>This Projects I developed by React.js  with redux and in backEnd i use Firebase server.</strike></CardSubtitle>
          <CardText  style={textColor} tag="h5"><strike>this projects folder-structure follow some-other app folder-structure because i took some help by youtube.</strike></CardText>
        </CardBody>
      </Card>


    </div>
    </div>
  );
};

export default Projects;