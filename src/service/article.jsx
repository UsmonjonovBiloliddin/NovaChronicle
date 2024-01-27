import axios from "./api"


const ArticleService = {
    getArticle: async() => {
        const {data} = await axios.get("/articles")
        return data
    },
    getDetailArticle: async(slug) => {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    }
}

export default ArticleService