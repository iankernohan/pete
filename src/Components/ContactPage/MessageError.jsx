import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";

export default function MessageError({ setSendError }) {
  return (
    <motion.section
      className="message-error"
      key={"modal"}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
    >
      <RxCrossCircled />
      <span>Message Failed to Send</span>
      <p>
        Try again later or email <b>sales@elliottandmurraybuilders.com</b>{" "}
        directly.
      </p>
      <small onClick={() => setSendError(false)}>(Click here to dismiss)</small>
    </motion.section>
  );
}
