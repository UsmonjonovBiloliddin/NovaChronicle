import axios from "./api"

const ArticleService = {
    getArticle: async() => {
        const {data} = await axios.get("/articles")
        return data
    },
    getDetailArticle: async(slug) => {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    },
    postArticle: async(article) => {
        const {data} = await axios.post("/articles" , {article})
        return data
    },

    deleteArticle: async(slug) => {
        const {data} = await axios.delete(`/articles/${slug}` )
        return data
    },

    editArticle: async(slug , article) => {
        const {data} = await axios.put(`/articles/${slug}`, {article})
        return data
    },

}

export default ArticleService