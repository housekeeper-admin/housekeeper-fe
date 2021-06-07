import client from './http';

/**
 * 获取文章详情
 * @param {number} articleId
 */
export const getArticleDetail = articleId => {
  const res = client.post('/queryTxtById', {
    txtId: articleId,
  });
  return res;
};

/**
 *
 * @param {object} article
 * @param {string} article.title
 * @param {string} article.content
 */
export const newArticle = article => {
  const { title, content } = article;
  const res = client.post('/addTxt', {
    title,
    content,
    time: Date.now(),
    message: title,
  });
  return res;
};

/**
 * 获取所有文章列表
 */
export const getArticleList = () => {
  const res = client.post('/queryTxtAll');
  return res;
};
