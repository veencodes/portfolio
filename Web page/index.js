
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 2000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.home-body', true);
  setVisible('#loading', false);
});
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 2000);
}
$("#about").bind("mouseover mouseout", function() {
  var shadow= $("#about");
   shadow.toggleClass("mouseover");
});
$("#work").bind("mouseover mouseout", function() {
  var shadow= $("#work");
   shadow.toggleClass("mouseover");
});
