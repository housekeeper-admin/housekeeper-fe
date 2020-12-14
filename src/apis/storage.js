/**
 * @class Storage 浏览器Storag类
 */
class base_storages {
  constructor() {
    this.writeTime = Number(Date.now());
  }
  isNotExist(value) {
    return value === null || typeof value === "undefined";
  }
}
/**
* @class storages get&set storage
*/
class storages extends base_storages {
  /**
   * @method set - Stored value
   * @param {object} param0
   * @param {string} param0.key - Key name
   * @param {*} param0.value - Stored value
   * @param {number} param0.expired - Storage time, unit: millisecond
   * @param {boolean} param0.flag - Whether it is localstorage storage
   */
  set({ key, value, expired, flag = true }) {
    let data = {
      value,
      writeTime: this.writeTime, // 写入时间，继承自 Stroage
      expired,
    };
    // 值是数组，不能直接存储，需要转换 JSON.stringify
    if (flag) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      sessionStorage.setItem(key, JSON.stringify(data));
    }
  }

  /**
   * @method get - Get value
   * @param {object} param0
   * @param {string} param0.key - Key name
   * @param {boolean} param0.flag - Whether it is localstorage storage
   */
  get({ key, flag = true }) {
    let dataJSON = null;
    if (flag) {
      dataJSON = localStorage.getItem(key);
    } else {
      dataJSON = sessionStorage.getItem(key);
    }
    // 当目标不存在时直接结束
    if (this.isNotExist(dataJSON)) {
      return null;
    }
    let data = JSON.parse(dataJSON);
    // 当数据的存在周期未定义时，它被认为是永久的
    if (this.isNotExist(data.expired)) {
      return data.value;
    }
    // 数据声明期结束时释放数据
    if (this.isOutPeriod(data)) {
      this.del({ key: key, flag: flag });
      return null;
    }
    return data.value;
  }

  /**
   * @method del - Delete value
   * @param {object} param0
   * @param {string} param0.key - Key name
   * @param {boolean} param0.flag - Whether it is localstorage storage
   */
  del({ key, flag = true }) {
    if (flag) {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  }

  /**
   * @method isOutPeriod - Determine whether it is expired
   * @param {object} obj - The storage object stored, not the key name
   */
  isOutPeriod(obj) {
    if (!obj.value) {
      return true;
    }
    let readTime = Number(Date.now());
    return readTime - obj.writeTime > obj.expired;
  }
}

const storage = new storages();
export default storage;