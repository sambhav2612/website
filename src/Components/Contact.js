import React, {useState} from 'react';

function Contact(props) {
  const [nameF, setName] = useState('');
  const [emailF, setEmail] = useState('');
  const [subjectF, setSubject] = useState({});
  const [messageF, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k])
    });
    return formData;
  }

  const handleSubmit = e => {
    const data = {"form-name": "contact", name: nameF, email: emailF, subject: subjectF, message: messageF}

    fetch("/", {
      method: "POST",
      body: encode(data)
    })
        .then(() => setStatus("Your message was sent, thank you!"))
        .catch(error => setError("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'subject') {
      return setSubject(value);
    }
    if (name === 'message') {
      return setMessage(value);
    }
  }

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
            <form onSubmit={handleSubmit} name="contactForm">
              <input type="hidden" name="contactForm" value="contact"/>
              <div>
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="name" name="name" required onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" defaultValue="" size="35" id="email" name="email" required onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="subject">Subject <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="subject" name="subject" required
                       onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="message" name="message" required onChange={handleChange}/>
              </div>

              <button className="submit" type="submit">Submit</button>
            </form>

            {error && <div id="message-warning">{error}</div>}
            {status && <div id="message-success">
              <i className="fa fa-check"/>
              {status}
              <br/>
            </div>}
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
