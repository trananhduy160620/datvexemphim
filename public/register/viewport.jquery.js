!(function (a) {
  var b = function (e, d) {
    this.$el = a(e);
    this.cb = d;
    this.watch();
    return this;
  };
  b.prototype = {
    isIn: function c() {
      var e = this;
      var d = a(window);
      var g = e.$el.offset().top;
      var f = g + e.$el.outerHeight();
      var i = d.scrollTop();
      var h = i + d.height();
      return f > i && g < h;
    },
    watch: function () {
      var e = this;
      var d = false;
      a(window).on("resize scroll", function () {
        if (e.isIn() && d === false) {
          e.cb.call(e.$el, "entered");
          d = true;
        }
        if (d === true && !e.isIn()) {
          e.cb.call(e.$el, "leaved");
          d = false;
        }
      });
    },
  };
  a.fn.isInViewport = function (d) {
    return this.each(function () {
      var e = a(this);
      var f = e.data("isInViewport");
      if (!f) {
        e.data("isInViewport", new b(this, d));
      }
    });
  };
})(window.jQuery);
