// pages/index/index.js
const util = require("./utils/util");
Page({
  //页面的初始数据
  data: {
    //弹幕数据
    danmuTxt: "",
    //视频资源
    list: [{
        id: '1001',
        title: '杨国宜先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
      },
      {
        id: '1002',
        title: '唐成伦先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
      },
      {
        id: '1003',
        title: '倪光明先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
      },
      {
        id: '1004',
        title: '吴仪兴先生口述校史实录',
        videoUrl: 'http://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4'
      }
    ]
  },

  //生命周期函数--监听页面加载
  onLoad(options) {
    this.videoCtx = wx.createVideoContext('myVideo');
  },
  
  //生命周期函数--监听页面初次渲染完成
  onReady() {
    this.setData({
      src: 'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
    })
    //播放视频
    this.videoCtx.play();
  },

  //播放视频
  playVideo(e) {
    //停止之前正在播放的视频
    this.videoCtx.stop();
    //更新视频地址
    this.setData({
      src: e.currentTarget.dataset.url
    })
    //播放新视频
    this.videoCtx.play();
  },

  //获取视图层输入的弹幕内容
  getDanmu(e) {
    this.setData({
      danmuTxt: e.detail.value
    })
  },

  //发送弹幕
  sendDanmu(e) {
    let text = this.data.danmuTxt;
    this.videoCtx.sendDanmu({
      text: text,
      color: util.getRandomColor()
    })
  }
});