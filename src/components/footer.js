import './footer.css'
const Footer =()=>{
    return(
        <>
        <div className="row footer">
            <div className="col-md-12">
                <div className="links">
                    <ul>
                        <li><a href="#home">Register</a></li>
                        <li><a href="#home">Forum</a> </li>
                        <li><a href="#home">Affiliate</a></li>
                        <li><a href="#home">FAQ</a></li>
                    </ul>
                </div>
                <div className="icons">
                    <ul>
                        <li><a href="#home"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#home"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#home"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#home"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="#home"><i className="fa-brands fa-instagram"></i></a></li>
                        
                    </ul>
                </div>
                <p>© 2021. Foodera. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}
export default Footer