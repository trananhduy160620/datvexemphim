(function () {
  var c;
  var e = function () {};
  var d = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var b = d.length;
  var a = (window.console = window.console || {});
  while (b--) {
    c = d[b];
    if (!a[c]) {
      a[c] = e;
    }
  }
})();
