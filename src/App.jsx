import { Routes , Route} from "react-router-dom";
import {Navbar, Main , Login , Register , PageNotFound, ArticleDetail, CreateArticle, EditArticle} from "./components"
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";
import ArticleService from "./service/article";
import { articleStart, articleSuccess } from "./slice/article";
const App = () => {

  const dispatch = useDispatch()


  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user))
    } catch (error) {
        console.log(error);
    }
  }


  // const getArticles = async () => {
  //   dispatch(articleStart())
  //   try {
  //       const response = await ArticleService.getArticle()
  //       dispatch(articleSuccess(response.articles))
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }



  useEffect(() => {
    const token = getItem('token')

    if(token){
      getUser()
    }

  }, [])



	return (
		<div className="container mx-auto">
      <Navbar />
			<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:slug" element={<ArticleDetail />}  />
        <Route path="/create_article" element={<CreateArticle />}  />
        <Route path="/edit_article/:slug" element={<EditArticle />}  />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
		</div>
	);
};

export default App;
