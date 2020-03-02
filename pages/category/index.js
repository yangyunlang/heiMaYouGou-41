import request from "../../utils/request.js"

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //记录当前点击了那个菜单
    current:0,
    //数据列表
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求分类页的数据
    request({
      //请求分类页的数据
      url:"/categories"
    }).then(res => {
      //把数据雷暴爆粗到data
      const {message} =res.data;
      this.setData({
        list:message
      })
    })
  },

  
})