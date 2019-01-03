const app = getApp()

Page({
  data: {
    showColorPicker1: true,
    showColorPicker2: false,
    colorData1: {
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#000000'
      },
      //色相控制条位置
      barY: 0
    },
    colorData2: {
      //基础色相(色盘右上顶点的颜色)
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息
      pickerData: {
        x: 0,
        y: 480,
        red: 0,
        green: 0,
        blue: 0,
        hex: '#000000'
      },
      //色相控制条位置
      barY: 0
    },
    rpxRatio: 1 //单位rpx实际像素
  },
  onLoad() {
    let _this = this
    wx.getSystemInfo({
      success(res) {
        _this.setData({
          rpxRatio: res.screenWidth / 750
        })
      }
    })
  },
  onChangeColor(e) {
    const index = e.target.dataset.id
    this.setData({
      [`colorData${index}`]: e.detail.colorData
    })
  },
  toggleColorPicker(e) {
    const index = e.currentTarget.dataset.id
    this.setData({
      [`showColorPicker${index}`]: !this.data[`showColorPicker${index}`]
    })
  },
  closeColorPicker() {
    this.setData({
      showColorPicker1: false,
      showColorPicker2: false
    })
  },
  onShareAppMessage(res) {
    return {
      title: '小插件库-拾色器',
      imageUrl: '/images/logo.jpg',
      path: '/pages/color_picker_demo/color_picker_demo'
    }
  }
})