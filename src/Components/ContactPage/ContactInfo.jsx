export default function ContactInfo({ name, mobile, office, email }) {
  return (
    <section className="contact-info">
      <h3>{name}</h3>
      <div className="numbers">
        <div>
          <strong>Mobile:</strong>
          <span>{mobile}</span>
        </div>
        <div>
          <strong>Office:</strong>
          <span>{office}</span>
        </div>
      </div>
      <div>{email}</div>
    </section>
  );
}
