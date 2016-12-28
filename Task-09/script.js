$(document).ready(function(){
  var timerBox = $(".timer-box");
  var timeOutput = $("#time-output");
  var startBtn = $("#start-btn");
  var stopBtn = $("#stop-btn");
  var resetBtn = $("#reset-btn");
  setBoxMiddle();
  
  function setBoxMiddle(){
      var windowHeight = $(window).height();
    var timerBoxHeight = timerBox.height();
    if(windowHeight > timerBoxHeight){
      var top = (windowHeight - timerBoxHeight) / 2;
      timerBox.css("margin-top" , top + "px");
    }
  }
  $(window).resize(setBoxMiddle);
  
  var time = 0;
  
  function displayTime(){
    time = time + 1;
    var second = time % 60;
    var minute = Math.floor(time / 60);
    var hour = Math.floor(time / 3600);
    timeOutput.html(complementZero(hour) + " : " + complementZero(minute) + " : " + complementZero(second));
  }
  function complementZero(a){
    return a > 9 ? "" + a : "0" + a ;
  }
  /*开始按钮*/
  startBtn.click(function(){
    startBtn.hide();
    stopBtn.show();
    var timeId = setInterval(displayTime,1000);
    startBtn.data("setInterval",timeId);
  });
  /*停止按钮*/
  stopBtn.click(function(){
    stopBtn.hide();
    startBtn.show();
    var timerId = startBtn.data("setInterval");
    clearInterval(timerId);
  });
  /*复位按钮*/
  resetBtn.click(function(){
    stopBtn.hide();
    startBtn.show();
    var timerId = startBtn.data("setInterval");
    clearInterval(timerId);
    time = 0;
    timeOutput.html("00 : 00 : 00");
  });
});
