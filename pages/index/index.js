//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541420763577&di=b9cf6ad95e1754f2a2eb3321e66e5a43&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F65c84ea21551dd33c5ac89265c44feec30e1c7c3.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541420743697&di=23c073278fcaf239e5ab4c98cb8ab1a7&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h360%2F20180119%2Fc15d-fyqtwzu7594995.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541420701636&di=81a5550d2b8422256434fdaf9f26e323&imgtype=0&src=http%3A%2F%2Fx.itunes123.com%2Fuploadfiles%2F563680c3ec1d4a8ffd4956d7751fdffe.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name: '外卖',
        url: 'dishes'
      },
      {
        name: '堂食',
        url: 'take',
        isSplot: true
      },
      {
        name: 'N',
        url: 'out'
      },
      {
        name: 'M',
        url: 'bill'
      },
      {
        name: '$',
        url: 'bill',
        isSplot: true
      },
      {
        name: 'L',
        url: 'bill'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
