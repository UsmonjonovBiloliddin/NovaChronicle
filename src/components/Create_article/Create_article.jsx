import { useState } from "react";
import { Form_article,  } from "..";
import ArticleService from "../../service/article";
import { useDispatch } from "react-redux";
import {
  createArticleError,
  createArticleStart,
  createArticleSucces,
} from "../../slice/article";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const FormHandler = async () => {
    dispatch(createArticleStart());
    // e.preventDefault()

    const article = {
      title,
      description: discription,
      body,
    };

    try {
      dispatch(createArticleSucces());
      navigate("/");
      const response = await ArticleService.postArticle(article);
    } catch (error) {
      dispatch(createArticleError());
      console.log(error);
    }
  };

  const FormProps = {
    title,
    setTitle,
    discription,
    setDiscription,
    body,
    setBody,
    FormHandler,
  };

  return (
    <div className="text-center">
      <div className="fs-2">Create Article</div>
      <Form_article {...FormProps} />
    </div>
  );
};

export default CreateArticle;
