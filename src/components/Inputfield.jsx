const Inputfield = ({ label, isTextArea }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {isTextArea ? (
        <textarea rows="5" name={label}></textarea>
      ) : (
        <input name={label} type="text"></input>
      )}
    </div>
  );
};
export default Inputfield;
