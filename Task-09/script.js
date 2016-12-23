$(document).ready(function(){
  var timeOutput = $("#time-output");
  var startBtn = $("#start-btn");
  var stopBtn = $("#stop-btn");
  var resetBtn = $("#reset-btn");
  var time = 0;
  var second = 0;
  var minute = 0;
  var hour = 0;
  stopBtn.hide();
  function timeClock(){
    time = time + 1;
    second = time % 60;
    minute = Math.floor(time / 60);
    hour = Math.floor(time / 3600);
    timeOutput.val(buLing(hour) + " : " + buLing(minute) + " : " + buLing(second));
  }
  function buLing(a){
    return a > 9 ? a : "0" + a ;
  }
  /*开始按钮*/
  startBtn.click(function(){
    startBtn.hide();
    stopBtn.show();
    var timerId = setInterval(timeClock,1000);
    startBtn.data("setInterval",timerId);
  });
  /*停止按钮*/
  stopBtn.click(function(){
    startBtn.show();
    stopBtn.hide();
    var timerId = startBtn.data("setInterval");
    clearInterval(timerId);
  });
  /*复位按钮*/
  resetBtn.click(function(){
    startBtn.show();
    stopBtn.hide();
    var timerId = startBtn.data("setInterval");
    clearInterval(timerId);
    second = 0;
    minute = 0;
    hour = 0;
    timeOutput.val("00 : 00 : 00");
  });
});
