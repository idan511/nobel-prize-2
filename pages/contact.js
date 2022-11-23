
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

import { CONTACT_FORM_ENDPOINT } from "../config";

async function postContactForm(data) {
  console.log(data);
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  console.log(response);
  return response;
}

export default function ContactPage() {

  const [formData, setFormData] = useState({});
  const [formResponseStatus, setFormResponseStatus] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await postContactForm(formData);
    setFormResponseStatus(response.status);
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
        {formResponseStatus ?
             <div>{formResponseStatus === 200 ? "Thank you." : "Something went wrong."}</div> :
          <form onSubmit={handleSubmit} className="contact_form">
            <div className="content">
              Contact us if you found any mistakes or missing data, or if you just want to say hello!
            </div>
            <div className="form_meta">
              <input id="form-name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              <input id="form-email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
            </div>
            <textarea id="form-comment" placeholder="Your comment" value={formData.comment} onChange={handleChange}></textarea>
            <div className="form_futton_holder"><button type="submit">Send</button></div>
          </form>}
        </div>
      </div>
    </div >
  )
}
