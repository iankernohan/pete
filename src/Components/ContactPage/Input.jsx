export default function Input({
  name,
  state,
  setState,
  setError,
  error,
  type = "text",
  extraText,
  isTextArea = false,
}) {
  const upperCaseName =
    String(name).charAt(0).toUpperCase() + String(name).slice(1);

  return (
    <div className="input-group">
      <label htmlFor={name}>
        {upperCaseName}
        {extraText && <small style={{ marginLeft: "5px" }}>{extraText}</small>}
        <span>*</span>
        {error && (
          <small className="required">{upperCaseName} is required.</small>
        )}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          rows={10}
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setError(false);
          }}
          className={error ? "error" : ""}
        ></textarea>
      ) : (
        <input
          name={name}
          id={name}
          type={type}
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setError(false);
          }}
          className={error ? "error" : ""}
        />
      )}
    </div>
  );
}
