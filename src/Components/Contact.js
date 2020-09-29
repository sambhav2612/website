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
