var app = getApp();
Page({
  data: {
    priceinfo: [],
  },
  onLoad: function (options) {
    var header = {
      'content-type': 'application/x-www-form-urlencoded',
    };
    var that = this;
    wx.request({
      url: app.globalData.url + '/routine/auth_api/get_price?uid=' + app.globalData.uid,
      method: 'POST',
      header: header,
      success: function (res) {
        // console.log(res);
        if (res.data.code == 200) {
        that.setData({
          priceinfo: res.data.data
        })
        }else{
          that.setData({
            extractsum: ''
          })
        }
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }
    })
  },
})