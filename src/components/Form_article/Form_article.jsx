import React from "react";
import { TextAreae } from "..";
import { Input } from "../../ui";

const Form_article = (props) => {
  const {
    title,
    setTitle,
    discription,
    setDiscription,
    body,
    setBody,
    FormHandler,
  } = props;

  return (
    <form onSubmit={FormHandler} className="w-75 mx-auto mt-2">
      <Input state={title} setState={setTitle} label={"Title"} />
      <TextAreae
        state={discription}
        setstate={setDiscription}
        label={"Discription"}
      />
      <TextAreae
        height="200px"
        state={body}
        setstate={setBody}
        label={"Body"}
      />

      <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form_article;
