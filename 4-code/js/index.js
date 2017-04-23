window.onload = function () {
  downTime();
  searchBg();
}

// 1.倒计时
var downTime = function () {
  // 步骤:
  // 1.获取元素 span
  var aSpan = document.querySelectorAll('.time-clock span');
  // 2. 规定倒计时时间
  var sumTime = 3 * 60 * 60;
  // 3.设置定时器
  var timer = setInterval(function () {
    // 3.1 让时间自减
    sumTime--;
    // 3.2 判断是否已经倒计时完了  清除定时器
    if (sumTime < 0) {
      clearInterval(timer);
      return false;
    }
    // 3.3 把时间做一个处理 把总时间分成小时 分钟 秒
    var h = Math.floor(sumTime / 3600);
    var m = Math.floor(sumTime / 60 - (h * 60));
    var s = Math.floor(sumTime % 60);
    // 3.4  把处理好的小时 分钟 秒 取出十位数和个位数
    aSpan[0].innerHTML = Math.floor(h / 10);
    aSpan[1].innerHTML = h % 10;


    aSpan[3].innerHTML = Math.floor(m / 10);
    aSpan[4].innerHTML = m % 10;

    aSpan[6].innerHTML = Math.floor(s / 10);
    aSpan[7].innerHTML = s % 10;
  }, 1000)



}
// 2.search背景色的变化
var searchBg = function () {
  // 1. 获取search元素 获取轮播图的高度
  var search = document.querySelector('.jd-search .search');
  var carHeight = document.querySelector('.jd-carousel').offsetHeight;
  // 2. 给window加一个滚动事件
  window.onscroll = function () {
    // 3. 获取卷曲的高度
    var top = document.body.scrollTop;
    var opacity = 0;
    // 4. 如果卷曲的高度>轮播图的高度 加一个背景色 透明度0.85
    if (top > carHeight) {
      opacity = 0.85;
    } else {
      // 5. 如果卷曲的高度<轮播图的告诉 加一个透明度变化的背景色
      opacity = top / carHeight * 0.85;
    }
    // background: rgba(201, 21, 35, 0.764706);
    search.style.backgroundColor='rgba(201, 21, 35,'+opacity+')';
  }

}