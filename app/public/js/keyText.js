$(".section-heading").on("click", function() {
  $.ajax({
    type: "GET",
    url: "/catch",
    success: function(data) {
      WordCloud(document.getElementById('about-img'),{list:data,"maxFontSize": 60, //最大字号
      "minFontSize": 14, //最小字号
      "fontWeight": 'normal', //字体粗细
      "fontFamily": 'Times, serif', // 字体
      "color": 'random-light', // 字体颜色 'random-dark' 或者 'random-light'
      "backgroundColor": '#333', // 背景颜色
      "rotateRatio": 1
    });
    },
    error: function(error) {
      console.log(error);
      alert("keyText错误");
    }
  });
});
