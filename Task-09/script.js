$(document).ready(function(){
  var timeOutput = $("#time-output");
  var startBtn = $("#start-btn");
  var stopBtn = $("#stop-btn");
  var resetBtn = $("#reset-btn");
  var second = 0;
  var minute = 0;
  var hour = 0;
  stopBtn.hide();
  /*timeOutput.data("second",0);
    timeOutput.data("minute",0);
    timeOutput.data("hour",0);*/
  
  startBtn.click(function(){
    startBtn.hide();
    stopBtn.show();
    function timeClock(){
      if(second < 59){
        second = second + 1;
        if(second <= 9){
          if(minute <= 9){
            if(hour <= 9){
              timeOutput.val(hour + "0 : 0" + minute + " : 0" + second);
            }else if(hour > 9){
              timeOutput.val(hour + " : 0" + minute + " : 0" + second);
            }
          }else if(minute > 9){
            if(hour <= 9){
              timeOutput.val(hour + "0 : " + minute + " : 0" + second);
            }else if(hour > 9){
              timeOutput.val(hour + " : " + minute + " : 0" + second);
            }
          } 
        }else if(second > 9){
          if(minute <= 9){
            if(hour <= 9){
              timeOutput.val(hour + "0 : 0" + minute + " : " + second);
            }else if(hour > 9){
              timeOutput.val(hour + " : 0" + minute + " : " + second);
            }
          }else if(minute > 9){
            if(hour <= 9){
              timeOutput.val(hour + "0 : " + minute + " : " + second);
            }else if(hour > 9){
              timeOutput.val(hour + " : " + minute + " : " + second);
            }
          }
        }
      }else if(second >= 59){
        second = 0;
        minute = minute + 1;
        if(minute >= 59){
          minute = 0;
          hour = hour + 1;
        }
      }
    }
    var i = setInterval(timeClock,1000);
    startBtn.data("setInterval",i);
  });
  stopBtn.click(function(){
    startBtn.show();
    stopBtn.hide();
    var j = startBtn.data("setInterval");
    clearInterval(j);
  });
  resetBtn.click(function(){
    startBtn.show();
    stopBtn.hide();
    var j = startBtn.data("setInterval");
    clearInterval(j);
    second = 0;
    minute = 0;
    hour = 0;
    timeOutput.val(hour + "0 : 0" + minute + " : 0" + second);
  });
});
