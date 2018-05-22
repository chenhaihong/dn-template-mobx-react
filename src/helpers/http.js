export const get = function (url, parmas = {}) {
  return new Promise((resolve, reject) => {
    const settings = {
      method: 'GET',
      url,
      contentType: parmas.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
      headers: parmas.headers || {},
      data: parmas.data || {},
      dataType: parmas.dataType || 'json',
      success: (res) => {
        resolve(res);
      },
      error: (err) => {
        reject(err);
      }
    };
    $.ajax(settings);
  });
};

export const post = function (url, parmas = {}) {
  return new Promise((resolve, reject) => {
    const settings = {
      method: 'POST',
      url,
      contentType: parmas.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
      headers: parmas.headers || {},
      data: parmas.data || {},
      dataType: parmas.dataType || 'json',
      success: (res) => {
        resolve(res);
      },
      error: (err) => {
        reject(err);
      }
    };
    $.ajax(settings);
  });
};

export const jsonp = function (url, parmas = {}) {
  return new Promise((resolve) => {
    const settings = {
      url,
      contentType: parmas.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
      headers: parmas.headers || {},
      data: parmas.data || {},
      dataType: parmas.dataType || 'json',
      jsonp: true,
      jsonpCallback: (res) => {
        resolve(res);
      }
    };
    $.ajax(settings);
  });
};