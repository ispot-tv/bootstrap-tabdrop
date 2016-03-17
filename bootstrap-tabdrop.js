/* =========================================================
 * bootstrap-tabdrop.js 
 * Adam Youngers
 * http://adamyoungers.com
 * Based on the work of Stefan Petre, http://www.eyecon.ro/bootstrap-tabdrop
 * Copyright 2014 Adam Youngers
 * ========================================================= */

!function (e) {
    e.fn.tabdrop = function () {
        function o() {
            return a = 0, e(t + ">li").each(function () {
                a += parseFloat(e(this).outerWidth(!0))
            }), a
        }
        function n() {
            for (a > i && e(".nav-more").append(d); a > i;) {
                var n = e(t + " > li:nth-last-child(2)")[0].outerHTML;
                e(t + " .li-more .dropdown-menu").prepend(n),
                e(t + " > li:nth-last-child(2)").remove(),
                e(t + " .li-more .dropdown-menu .divider").remove(),
                e(t + " .li-more .dropdown-menu *").removeAttr("role data-toggle aria-expanded").removeClass("dropdown-menu dropdown-toggle dropdown caret js-subnav-params-ignore"),
                o();
            }
        }
        var t = this.selector, r = e(t).html(), i = e(t).outerWidth(!0), a = o(), d = '<li class="li-more dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">more <span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>';
        return n(), setTimeout(function () {
            e(window).on("resize", function () {
                setTimeout(function () {
                    e(t).html(r), i = e(t).outerWidth(!0), a = o(), n()
                }, 100)
            })
        }, 500), this
    }
}(jQuery);
