import { useState } from "react";
import "./contact.css";
import { AnimatePresence } from "framer-motion";
import SendConfirm from "./SendConfirm";
import Input from "./Input";

export default function Contact() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [address, setAddress] = useState("");
  const [addressErr, setAddressErr] = useState(false);
  const [city, setCity] = useState("");
  const [cityErr, setCityErr] = useState(false);
  const [details, setDetails] = useState("");
  const [detailsErr, setDetailsErr] = useState(false);

  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  function messageHasSent() {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 2000);
  }

  function okToSend() {
    return name && email && phone && address && city && details;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) setNameErr(true);
    if (!email) setEmailErr(true);
    if (!phone) setPhoneErr(true);
    if (!address) setAddressErr(true);
    if (!city) setCityErr(true);
    if (!details) setDetailsErr(true);
    const x = okToSend();
    console.log(x);
    if (okToSend()) {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCity("");
      setDetails("");
      console.log("submitted");
      messageHasSent();
    }
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          state={name}
          setState={setName}
          setError={setNameErr}
          error={nameErr}
        />
        <Input
          name="email"
          state={email}
          setState={setEmail}
          setError={setEmailErr}
          error={emailErr}
          type="email"
        />
        <Input
          name="phone"
          state={phone}
          setState={setPhone}
          setError={setPhoneErr}
          error={phoneErr}
          type="tel"
          extraText={"(e.g. 123-456-7890)"}
        />
        <Input
          name="address"
          state={address}
          setState={setAddress}
          setError={setAddressErr}
          error={addressErr}
        />
        <Input
          name="city"
          state={city}
          setState={setCity}
          setError={setCityErr}
          error={cityErr}
        />
        <Input
          name="details"
          state={details}
          setState={setDetails}
          setError={setDetailsErr}
          error={detailsErr}
          isTextArea={true}
        />

        <button>Send</button>
      </form>

      <div className="contact-info">
        <section>
          <h3>Pete Elliott</h3>
          <div className="numbers">
            <div>
              <strong>Mobile:</strong>
              <span>(248) 224-8700</span>
            </div>
            <div>
              <strong>Office:</strong>
              <span>(248) 970-1026</span>
            </div>
          </div>
          <div>embuilding100@gmail.com</div>
        </section>
        <section>
          <h3>Tim Murray</h3>
          <div className="numbers">
            <div>
              <strong>Mobile:</strong>
              <span>(248) 224-2435</span>
            </div>
            <div>
              <strong>Office:</strong>
              <span>(248) 970-1026 </span>
            </div>
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
