
import { useState } from "react";

// This is a partially complete contact form, to show the basics of
// React useState to handle form data in a react app, which is a very common
// requirement. Notice how we listen to event handlers like in standard JavaScript
// And then we store our data using useState
// Also notice that useState, when initialized, returns an array of:
// i) the current state
// ii) a function to create a new state
// Pay attention to how both of these are used, as this is a simple example of
// The primary way of managing data/state in React


export default function ContactPage() {

  const [formData, setFormData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    alert("Not yet handling form submission");
  }

  function handleChange(event) {
    if (event.target.id === "form-name") {
      const name = event.target.value;
      setFormData(Object.assign(formData, { name }))
    }
    if (event.target.id === "form-email") {
      const email = event.target.value;
      setFormData(Object.assign(formData, { email }))
    }
    if (event.target.id === "form-comment") {
      const comment = event.target.value;
      setFormData(Object.assign(formData, { comment }))
    }
  }

  return (
    <div className="row">
      <div className="item">

        <div className="content">
          <form onSubmit={handleSubmit} className="contact_form">
            <div className="content">
              Contact us if you found any mistakes or missing data, or if you just want to say hello!
            </div>
            <div className="form_meta">
              <input id="form-name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              <input id="form-email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
            </div>
            <textarea id="form-comment" placeholder="Your comment" value={formData.comment} onChange={handleChange}></textarea><br />
            <div className="form_futton_holder"><button type="submit">Send</button></div>
          </form>
        </div>
      </div>
    </div >
  )
}
