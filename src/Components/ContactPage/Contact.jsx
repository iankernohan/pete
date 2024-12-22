import { useState } from "react";
import "./contact.css";
import { AnimatePresence } from "framer-motion";
import SendConfirm from "./SendConfirm";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  function messageHasSent() {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setDetails("");
    console.log("submitted");
    messageHasSent();
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name*</label>
          <input
            name="name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email*</label>
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address*</label>
          <input
            name="address"
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="city">City*</label>
          <input
            name="city"
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="details">Details*</label>
          <textarea
            name="details"
            id="details"
            rows={10}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </div>

        <button>Send</button>
      </form>

      <div className="contact-info">
        <section>
          <h3>Pete Elliott</h3>
          <div className="numbers">
            <strong>Mobile:</strong>
            <span>(248) 224-8700</span>
            <strong>Office:</strong>
            <span>(248) 970-1026</span>
          </div>
          <div>embuilding100@gmail.com</div>
        </section>
        <section>
          <h3>Tim Murray</h3>
          <div className="numbers">
            <strong>Mobile:</strong>
            <span>(248) 224-2435</span>
            <strong>Office:</strong>
            <span>(248) 970-1026 </span>
          </div>
          <div>embuilding101@gmail.com</div>
        </section>
      </div>
      <AnimatePresence>{messageSent && <SendConfirm />}</AnimatePresence>
      {/* <AnimatePresence>
        {sendError && <MessageError setSendError={setSendError} />}
      </AnimatePresence> */}
    </div>
  );
}
