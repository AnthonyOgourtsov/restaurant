import React from 'react'
import "../styling/Contact.css"
import emailjs from "@emailjs/browser";


function Contact() {
    const form = useRef();
     const [showForm, setShowForm] = useState(true);
   
     const handleSubmit = (e) => {
       e.preventDefault();
   
       emailjs
         .sendForm(
           "service ID",
           "template_jg7l49p",
           form.current,
           "private key"
         )
         .then(
           (result) => {
             console.log(result.text);
           },
           (error) => {
             console.log(error.text);
           }
         );
   
       clicked();
     };
   
     const clicked = () => setShowForm(false);

  return (
    <div className='contact'>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form 
        ref={form}
        onSubmit={handleSubmit}
        method="POST"
        targer="_blank"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id='name'  name='name' required/>
            </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="text" id='email'  name='email' required/>
            </div>
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <input type="text" id='message'  name='message' required/>
            </div>
            <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact