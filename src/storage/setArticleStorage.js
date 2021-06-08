import storage from 'apis/storage';
import STORAGE_KEY_MAP from '@/storage/storage-key-map.config';

const updateStorage = articleData => {
  if (articleData) {
    storage.set({
      key: STORAGE_KEY_MAP.ARTICLE,
      value: articleData,
      expired: 1000 * 60 * 60 * 8,
    });
  }
};

/**
 *
 * @param {object} articleData 文章信息
 */
const setArticleStorage = articleData => {
  updateStorage(articleData);
  const info = storage.get({
    key: STORAGE_KEY_MAP.ARTICLE,
  });
  return info;
};

export default setArticleStorage;
