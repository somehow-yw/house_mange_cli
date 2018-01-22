(function () {
  let req = {}
  let send = function (obj, method, url, data, callback, header) {
    if (!obj) return
    var Headers = header ? {'Cache-Control': 'no-cache', 'Accept': 'application/json', 'Content-Type': header, 'Access-Control-Allow-Origin': '*'} : {'Cache-Control': 'no-cache', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'}
    let reqOption = {}
    reqOption.method = method
    reqOption.url = url + '?r=' + Math.random()
    if (method === 'post' || method === 'POST') {
      reqOption.data = data
    } else {
      reqOption.params = data  // vue中应该为params
    }
    if (header) {
      reqOption.header = Headers
    }
    let request = obj.axios(reqOption).then((res) => {
      callback.call(this, res.data ? res.data : res.body)
    })

    return request
  }
     // 获取用户信息
  req.getUserInfo = function (obj, data, callback) {
    return send(obj, 'get', '/static/mock/user.json', data, callback, 'Accept:application/json')
  }
  // 获取待出租套房
  req.getWaitRent = function (obj, data, callback) {
    return send(obj, 'get', '/static/mock/rent/waitrent.json', data, callback, 'Accept:application/json')
  }
  req.getWaitRentSingle = function (obj, data, callback) {
    return send(obj, 'get', '/static/mock/rent/waitrentsingle.json', data, callback, 'Accept:application/json')
  }
  req.getRented = function (obj, data, callback) {
    return send(obj, 'get', '/static/mock/rent/rented.json', data, callback, 'Accept:application/json')
  }
  req.getSell = function (obj, data, callback) {
    return send(obj, 'get', '/static/mock/sell/selled.json', data, callback, 'Accept:application/json')
  }
  window.req = req
})()
