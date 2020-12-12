import React  from 'react';
// import Webviewer from '@pdftron/webviewer';
import {Form , FormGroup , NavLink , FormText   } from 'reactstrap';

const Contacts = (props) => {


  // const viewDiv = useRef<HTMLDivElement>(null);

  // useEffect(()=> {
  //   Webviewer({
  //    path : 'li',
  //    initialDoc: 'https://drive.google.com/file/d/1MAiZt2a8budoTQrUcz8ItnsKwHVMAzqV/view?usp=sharing' } , viewDiv.current ).then(instance=> { 
  //   }) ;
  // },[]);



  //
  const bgcolor={
    backgroundColor:'#122222'
  }
  const margin={
    marginTop:'100px',
    marginLeft:'100px'
  }


  const color={
    color:'white'
  }
  return (
    <>
    <Form style={bgcolor}>
    <FormGroup style={margin}>
       <NavLink style={color} href="https://drive.google.com/file/d/1MAiZt2a8budoTQrUcz8ItnsKwHVMAzqV/view?usp=sharing" alt="Resume"> <h3>Click to Updated Cv</h3></NavLink>
          <FormText color="muted">
             <h6 style={color}>   All information in this resume is true and correct to the best of my knowledge and belief</h6>
        </FormText>
      </FormGroup>
    </Form>
    
      {/* <div className="webViewer" ref={viewDiv}></div> */}

    </>
  );
};

export default Contacts;