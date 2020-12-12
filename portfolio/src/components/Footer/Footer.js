import React from 'react';
import './stylefooter.css';
// import { Button } from 'reactstrap';;


const Footer =()=> {

return (
  <>
<div className="row">
<footer className="page-footer font-small cyan darken-3">


  <div className="container">
  
    <div className="row">

     
      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center Alignment">

        
          <a className="fb-ic">
            <a  href=" https://www.facebook.com/profile.php?id=100009522296327" className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x text-white"> </a>
          </a>
         
          <a className="tw-ic">
            <a   href=" https://twitter.com/Abrar97527252" className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x text-white"> </a>
          </a>
          
          <a className="gplus-ic">
            <a  href='https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com%3Fhl%3Den-US'  className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x text-white"> </a>
          </a>
         
          <a className="li-ic">
            <a  href="https://www.linkedin.com/in/abrar-ali-a28986188/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bym1KC%2FYcR%2Fy2H6Xy2ZMBRQ%3D%3D" className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x text-white"> </a>
          </a>
        
         
          <a className="ins-ic">
            <a  href='https://www.instagram.com/abrar87992/' className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x text-white"> </a>
          </a>
         
          <a className="pin-ic">
            <a   href="https://in.pinterest.com/abrarhussain8799/" className="fab fa-pinterest fa-lg white-text fa-2x text-white"> </a>
          </a>
        </div>
      </div>
     

    </div>
    

  </div>

</footer>
</div>
<div className="Button">
  <button type="button" className="SignIn">Sign In</button>
  <button type="button"  className="SignUp">Sign Up</button>
  </div>
  </>
)

}
export default  Footer;