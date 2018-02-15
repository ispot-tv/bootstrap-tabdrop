/* =========================================================
 * bootstrap-tabdrop.js 
 * Adam Youngers
 * http://adamyoungers.com
 * Based on the work of Stefan Petre, http://www.eyecon.ro/bootstrap-tabdrop
 * =========================================================
 * Copyright 2014 Adam Youngers
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
                e(t + " .li-more .dropdown-menu *").removeAttr("role data-toggle aria-expanded").removeClass("dropdown-menu dropdown-toggle dropdown caret fa fa-angle-down nav-tabs__caret js-subnav-params-ignore"),
                o();
            }
        }
        var t = '.' + this[0].className.replace(/\s/gi, '.'), r = e(t).html(), i = e(t).outerWidth(!0), a = o(), d = '<li class="li-more dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false"><span class="nav-tabs__title">More <span class="nav-tabs__title-second">Insights</span></span><i class="fa fa-angle-down nav-tabs__caret"></i></a><ul class="dropdown-menu" role="menu"></ul></li>';
        return n(), setTimeout(function () {
            e(window).on("resize", function () {
                setTimeout(function () {
                    e(t).html(r), i = e(t).outerWidth(!0), a = o(), n()
                }, 100)
            })
        }, 500), this
    }
}(jQuery);

