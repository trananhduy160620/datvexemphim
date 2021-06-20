!(function (a) {
  a.fn.niceSelect = function (d) {
    function c(h) {
      h.after(
        a("<div></div>")
          .addClass("nice-select")
          .addClass(h.attr("class") || "")
          .addClass(h.attr("disabled") ? "disabled" : "")
          .attr("tabindex", h.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var g = h.next(),
        f = h.find("option"),
        e = h.find("option:selected");
      g.find(".current").html(e.data("display") || e.text()),
        f.each(function (l) {
          var k = a(this),
            j = k.data("display");
          g.find("ul").append(
            a("<li></li>")
              .attr("data-value", k.val())
              .attr("data-display", j || null)
              .addClass(
                "option" +
                  (k.is(":selected") ? " selected" : "") +
                  (k.is(":disabled") ? " disabled" : "")
              )
              .html(k.text())
          );
        });
    }
    if ("string" == typeof d) {
      return (
        "update" == d
          ? this.each(function () {
              var g = a(this),
                f = a(this).next(".nice-select"),
                e = f.hasClass("open");
              f.length && (f.remove(), c(g), e && g.next().trigger("click"));
            })
          : "destroy" == d
          ? (this.each(function () {
              var f = a(this),
                e = a(this).next(".nice-select");
              e.length && (e.remove(), f.css("display", ""));
            }),
            0 == a(".nice-select").length && a(document).off(".nice_select"))
          : console.log('Method "' + d + '" does not exist.'),
        this
      );
    }
    this.hide(),
      this.each(function () {
        var e = a(this);
        e.next().hasClass("nice-select") || c(e);
      }),
      a(document).off(".nice_select"),
      a(document).on("click.nice_select", ".nice-select", function (f) {
        var e = a(this);
        a(".nice-select").not(e).removeClass("open"),
          e.toggleClass("open"),
          e.hasClass("open")
            ? (e.find(".option"),
              e.find(".focus").removeClass("focus"),
              e.find(".selected").addClass("focus"))
            : e.focus();
      }),
      a(document).on("click.nice_select", function (e) {
        0 === a(e.target).closest(".nice-select").length &&
          a(".nice-select").removeClass("open").find(".option");
      }),
      a(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (h) {
          var g = a(this),
            f = g.closest(".nice-select");
          f.find(".selected").removeClass("selected"), g.addClass("selected");
          var e = g.data("display") || g.text();
          f.find(".current").text(e),
            f.prev("select").val(g.data("value")).trigger("change");
        }
      ),
      a(document).on("keydown.nice_select", ".nice-select", function (j) {
        var h = a(this),
          g = a(h.find(".focus") || h.find(".list .option.selected"));
        if (32 == j.keyCode || 13 == j.keyCode) {
          return (
            h.hasClass("open") ? g.trigger("click") : h.trigger("click"), !1
          );
        }
        if (40 == j.keyCode) {
          if (h.hasClass("open")) {
            var e = g.nextAll(".option:not(.disabled)").first();
            e.length > 0 &&
              (h.find(".focus").removeClass("focus"), e.addClass("focus"));
          } else {
            h.trigger("click");
          }
          return !1;
        }
        if (38 == j.keyCode) {
          if (h.hasClass("open")) {
            var f = g.prevAll(".option:not(.disabled)").first();
            f.length > 0 &&
              (h.find(".focus").removeClass("focus"), f.addClass("focus"));
          } else {
            h.trigger("click");
          }
          return !1;
        }
        if (27 == j.keyCode) {
          h.hasClass("open") && h.trigger("click");
        } else {
          if (9 == j.keyCode && h.hasClass("open")) {
            return !1;
          }
        }
      });
    var b = document.createElement("a").style;
    return (
      (b.cssText = "pointer-events:auto"),
      "auto" !== b.pointerEvents && a("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);
