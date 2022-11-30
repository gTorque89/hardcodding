import React from "react";

const Footer = () => {
    return(
    
        <footer className="footer-distributed d-flex justify-content-around py-5">
            <hr />
            <div className="footer-right col-md-6 ">
                <a href="www.facebook.com/hardcodding"><img src="images/icon/facebook.svg" alt="facebook" /></a>
                <a href="www.instagram.com/hardcodding"><img src="images/icon/instagram.svg" alt="instagram" /></a>
                <a href="www.github.com/hardcodding"><img src="images/icon/github.svg" alt="github" /></a>
                <a href="www.linkedin.com/victor-leguizamon"><img src="images/icon/linkedin.svg" alt="linkedin" /></a>
            </div>
            <div className="footer-left col-md-6 text-end">
                <p>Hardcodding! <img src="images/logo.jpg" alt="logo" width="90px" /></p>
            </div>
        </footer>
  
        
    )
}

export default Footer