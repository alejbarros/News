import _articles from './articles.json'


const TIMEOUT = 100

export default {
  getArticlesMock: (cb, timeout) => setTimeout(() => cb(_articles), timeout || TIMEOUT)
}