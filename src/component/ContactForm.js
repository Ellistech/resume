import { useState } from "react";
import { postContact } from "../service/data.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm() {
  const notify = () => toast("Message sent successfully " );   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handlesubmit =  async function (event) {
    event.preventDefault();
    const contactList = {
      name,
      email,
      subject,
      message,
    };
    const response = await postContact(contactList);
    // console.log(response);
  };

  return (
    //    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Haridwar</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>devanshuchauhan1603@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>63966665229 , 8057789565</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
              onSubmit={handlesubmit}
              // noValidate
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit" onClick={notify}>Send Message</button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
