import React from 'react'
import './FooterBanner.css'


function FooterDevLinks() {

    return(
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <h2 style={{textAlign: 'center'}}>DevLink</h2>
                    <div class="row">
                        <div class="col-md-3 item">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            
                            <ul>
                                <li><a href="#">Terms</a></li>

                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <ul>
                                <li><a href="#">Code of Conduct</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default FooterDevLinks