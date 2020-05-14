import React, { Component } from 'react'

import {Link} from "react-router-dom"

class Contact extends Component {
    render() {
        return (
            
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                
                <div className="row">
                    <div className="col-md-7">
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1CZSEVyzV1xq2CEdiHg9GoI6Not98643o" 
                        width="640" 
                        height="480"
                        style={{
                            border:'0',
                            width:'100%',
                            height:'315px',
                            frameborder:'0'
                        }}
                        allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-md-5">
                        <h4 className="col-md-5"><strong>Contact Us</strong></h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Phone"/>
                            </div>
                        
                            <textarea 
                            className="form-control"
                            cols="30" 
                            rows="3" 
                            placeholder="Message"/>
<br/>
                            <Link className="btn btn-outline-primary text-uppercase mt-1" >Send</Link>
                            
                        </form>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default Contact;