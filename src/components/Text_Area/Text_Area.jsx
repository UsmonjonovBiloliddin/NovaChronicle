const TextArea = ({label , state , setstate , height="100px"}) => {
  return (
    <div className="form-floating">
      <textarea
        className="form-control mt-2"
        placeholder={label}
        style={{height: height}}
        value={state}
        onChange={(e) => setstate(e.target.value)}
      ></textarea>
      <label htmlForfor="floatingTextarea2">{label}</label>
    </div>
  );
};

export default TextArea;
