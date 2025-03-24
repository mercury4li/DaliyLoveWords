Page({
  data: {
    quotes: [
      '你是最棒的！',
      '继续努力，成功在望！',
      '每一天都是新的开始',
      '坚持就是胜利',
      '你的潜力超乎想象'
    ],
    currentQuote: '点击抽卡获取鼓励',
    animationData: {}
  },

  onReady() {
    this.animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease'
    })
  },

  drawCard() {
    // 随机选择语句
    const randomIndex = Math.floor(Math.random() * this.data.quotes.length);
    
    // 执行动画
    this.animation.rotate(360).scale(0.8).step()
    this.animation.rotate(0).scale(1).step({ duration: 600 })
    
    this.setData({
      currentQuote: this.data.quotes[randomIndex],
      animationData: this.animation.export()
    })
  }
})