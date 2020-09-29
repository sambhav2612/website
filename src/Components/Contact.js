import React from 'react';

function Contact(props) {
  if (props.data) {
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var message = props.data.contactmessage;
  }

  return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action="https://getsimpleform.com/messages?form_api_token=1194ca1ac74480ae6a5c56735b4e6b71"
                  method="post">
              <input type='hidden'/>
              <div>
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="name" name="name" required/>
              </div>
              <div>
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" defaultValue="" size="35" id="email" name="email" required/>
              </div>
              <div>
                <label htmlFor="subject">Subject <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="subject" name="subject" required/>
              </div>
              <div>
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="message" name="message" required/>
              </div>

              <button className="submit" type="submit">Submit</button>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}<br/>
                {street} <br/>
                {city}, {state} {zip}<br/>
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
  );
}

export default Contact;
