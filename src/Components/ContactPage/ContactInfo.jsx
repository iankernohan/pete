export default function ContactInfo({ name, number }) {
  return (
    <section className="contact-info">
      <h3>{name}</h3>
      <div className="numbers">
        <div>
          <strong>Mobile:</strong>
          <span>{number}</span>
        </div>
        <div>
          <strong>Office:</strong>
          <span>(248) 970-1026</span>
        </div>
      </div>
      <div>embuilding100@gmail.com</div>
    </section>
  );
}
