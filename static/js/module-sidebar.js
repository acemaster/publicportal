!function e(t,n,r){function i(o,u){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!u&&l)return l(o,!0);if(s)return s(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var p=n[o]={exports:{}};t[o][0].call(p.exports,function(e){var n=t[o][1][e];return i(n?n:e)},p,p.exports,e,t,n,r)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({"./app/vendor/sidebar/js/main.js":[function(e){e("./_breakpoints"),e("./_sidebar-menu"),e("./_collapsible"),e("./_dropdown"),e("./_sidebar-toggle"),function(e){"use strict";e.fn.tkSidebar=function(t){if(this.length){var n=e.extend({menuType:!1,toggleBar:!1},t),r=this;"collapse"==n.menuType&&r.tkSidebarCollapse(),"dropdown"==n.menuType&&r.tkSidebarDropdown(),n.toggleBar===!0&&r.tkSidebarToggleBar()}}}(jQuery)},{"./_breakpoints":"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_breakpoints.js","./_collapsible":"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_collapsible.js","./_dropdown":"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_dropdown.js","./_sidebar-menu":"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-menu.js","./_sidebar-toggle":"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-toggle.js"}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_breakpoints.js":[function(){!function(e){"use strict";var t=function(){e("html").addClass("show-sidebar"),e(".sidebar.sidebar-visible-desktop").not(":visible").each(function(){var t=sidebar.options(e(this));sidebar.open(e(this).attr("id"),t)})},n=function(){e("html").removeClass("show-sidebar"),e(".sidebar:visible").each(function(){sidebar.close(e(this).attr("id"))})};if(e(window).bind("enterBreakpoint768",function(){e(".sidebar").length&&(e(".hide-sidebar").length||t())}),e(window).bind("enterBreakpoint1024",function(){e(".sidebar").length&&(e(".hide-sidebar").length||t())}),e(window).bind("enterBreakpoint480",function(){e(".sidebar").length&&n()}),e(window).width()<=480){if(!e(".sidebar").length)return;n()}}(jQuery)},{}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_collapsible.js":[function(){!function(e){"use strict";e.fn.tkSidebarCollapse=function(){if(this.length){var t=this;t.find(".sidebar-menu > li > a").off("mouseenter"),t.find(".sidebar-menu > li.dropdown > a").off("mouseenter"),t.find(".sidebar-menu > li > a").off("mouseenter"),t.find(".sidebar-menu > li > a").off("click"),t.off("mouseleave"),t.find(".dropdown").off("mouseover"),t.find(".dropdown").off("mouseout"),e("body").off("mouseout","#dropdown-temp .dropdown"),t.find("ul.collapse").off("shown.bs.collapse").off("show.bs.collapse").off("hide.bs.collapse").off("hidden.bs.collapse"),t.find("#dropdown-temp").remove(),t.find(".hasSubmenu").removeClass("dropdown").find("> ul").addClass("collapse").removeClass("dropdown-menu submenu-hide submenu-show").end().find("> a").attr("data-toggle","collapse").on("click",function(e){e.preventDefault()}),t.find(".collapse").on("shown.bs.collapse",function(){t.find("[data-scrollable]").getNiceScroll().resize()}),t.find(".collapse").on("show.bs.collapse",function(t){t.stopPropagation();var n=e(this).parents("ul:first").find('> li.open [data-toggle="collapse"]');n.length&&n.trigger("click"),e(this).closest(".hasSubmenu").addClass("open")}),t.find(".collapse").on("hidden.bs.collapse",function(t){t.stopPropagation(),e(this).closest(".hasSubmenu").removeClass("open")}),t.find(".collapse").collapse({toggle:!1})}},e('.sidebar[data-type="collapse"]').each(function(){e(this).tkSidebarCollapse()})}(jQuery)},{}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_dropdown.js":[function(){!function(e){"use strict";function t(){e('.sidebar[data-type="collapse"][data-transformed]').length&&(e('.sidebar[data-type="collapse"][data-transformed]').attr("data-type","dropdown").attr("data-transformed",!0),n())}e.fn.tkSidebarDropdown=function(){if(this.length){var t=this;t.find(".collapse").off("shown.bs.collapse").off("show.bs.collapse").off("hidden.bs.collapse");var n=t.find("[data-scrollable]").getNiceScroll()[0];n.scrollstart(function(){t.is('[data-type="dropdown"]')&&(t.addClass("scrolling"),t.find("#dropdown-temp > ul > li").empty(),t.find("#dropdown-temp").hide(),t.find(".open").removeClass("open"))}),n.scrollend(function(){t.is('[data-type="dropdown"]')&&(e.data(this,"lastScrollTop",n.getScrollTop()),t.removeClass("scrolling"))}),t.find(".hasSubmenu").addClass("dropdown").removeClass("open").find("> ul").addClass("dropdown-menu").removeClass("collapse in").removeAttr("style").end().find("> a").removeClass("collapsed").removeAttr("data-toggle"),t.find(".sidebar-menu > li.dropdown > a").on("mouseenter",function(){var n=t.find("#dropdown-temp");if(t.find(".open").removeClass("open"),n.hide(),!e(this).parent(".dropdown").is(".open")&&!t.is(".scrolling")){var r=e(this).parent(".dropdown"),i=r.find("> .dropdown-menu").clone().removeClass("submenu-hide");n.length||(n=e("<div/>").attr("id","dropdown-temp").appendTo(t),n.html("<ul><li></li></ul>")),n.show(),n.find(".dropdown-menu").remove(),n=n.find("> ul > li").css({overflow:"visible"}).addClass("dropdown open"),r.addClass("open"),i.appendTo(n).css({top:r.offset().top-n.offset().top,left:"100%"}).show(),t.is(".right")&&i.css({left:"auto",right:"100%"})}}),t.find(".sidebar-menu > li > a").on("mouseenter",function(){if(!e(this).parent().is(".dropdown")){var t=e(this).closest(".sidebar");t.find(".open").removeClass("open"),t.find("#dropdown-temp").hide()}}),t.find(".sidebar-menu > li > a").on("click",function(t){e(this).parent().is(".dropdown")&&(t.preventDefault(),t.stopPropagation())}),t.on("mouseleave",function(){e(this).find("#dropdown-temp").hide(),e(this).find(".open").removeClass("open")}),t.find(".dropdown").on("mouseover",function(){e(this).addClass("open").children("ul").removeClass("submenu-hide").addClass("submenu-show")}).on("mouseout",function(){e(this).children("ul").removeClass(".submenu-show").addClass("submenu-hide")}),e("body").on("mouseout","#dropdown-temp .dropdown",function(){e(".sidebar-menu .open",e(this).closest(".sidebar")).removeClass(".open")})}};var n=function(){e('.sidebar[data-type="dropdown"]').each(function(){e(this).tkSidebarDropdown()})},r=function(){e('.sidebar[data-type="collapse"]').each(function(){e(this).tkSidebarCollapse()})};n(),e(window).bind("enterBreakpoint480",function(){e('.sidebar[data-type="dropdown"]').length&&(e('.sidebar[data-type="dropdown"]').attr("data-type","collapse").attr("data-transformed",!0),r())}),e(window).bind("enterBreakpoint768",t),e(window).bind("enterBreakpoint1024",t)}(jQuery)},{}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_options.js":[function(e,t){t.exports=function(e){return{"transform-button":e.data("transformButton")===!0,"transform-button-icon":e.data("transformButtonIcon")||"fa-ellipsis-h"}}},{}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-menu.js":[function(e){!function(t){var n=t(".sidebar");n.each(function(){var n=t(this),r=e("./_options")(n);if(r["transform-button"]){var i=t('<button type="button"></button>');i.attr("data-toggle","sidebar-transform").addClass("btn btn-default").html('<i class="fa '+r["transform-button-icon"]+'"></i>'),n.find(".sidebar-menu").append(i)}})}(jQuery)},{"./_options":"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_options.js"}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-toggle.js":[function(){!function(e){"use strict";function t(){var e=!1;return function(t){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}e("#subnav").collapse({toggle:!1}),function(){var n={effect:"st-effect-1",duration:550,overlay:!1},r=".st-container",i=t()?"touchstart":"click",s=function(t,n){var r=t.data("layoutClasses");if(!r){var i=t.data("toggleLayout");if("string"==typeof i)return r=i.split(",").join(" "),t.data("layoutClasses",r),r;var s=new RegExp("sidebar-"+n+"(\\S+)","ig");r=e("html").get(0).className.match(s),null!==r&&r.length&&(r=r.join(" "),t.data("layoutClasses",r))}return r},o=function(e){return{effect:e.data("effect"),overlay:e.data("overlay")}},u=function(){return e("body").hasClass("animating")?!0:(e("body").addClass("animating"),setTimeout(function(){e("body").removeClass("animating")},n.duration),!1)},f=function(t,i){var o=e(r),u="undefined"!=typeof t?"#"+t:o.data("stMenuTarget"),f=e(u);if(!f.length)return!1;if(!f.is(":visible"))return!1;if(f.hasClass("sidebar-closed"))return!1;var l="undefined"!=typeof i&&i.effect?i.effect:o.data("stMenuEffect"),c=f.is(".left")?"l":"r",h=f.get(0).className.match(/sidebar-size-(\S+)/).pop(),p="st-effect-"+c+h,v=f.data("toggleLayout"),m=s(f,c),g={sidebar:f,target:u};e(document).trigger("sidebar.hide",g),e('[data-toggle="sidebar-menu"][href="'+u+'"]').removeClass("active").closest("li").removeClass("active"),e("html").addClass(p),f.addClass(l),o.addClass(l),o.removeClass("st-menu-open st-pusher-overlay"),setTimeout(function(){e("html").removeClass(p),v&&e("html").removeClass(m),f.removeClass(l),o.get(0).className="st-container",f.addClass("sidebar-closed").hide(),e(document).trigger("sidebar.hidden",g)},n.duration)},l=function(t,i){var o=e(r),u=e(t);if(!u.length)return!1;if(e(window).width()<768&&o.hasClass("st-menu-open"))return f();e('[data-toggle="sidebar-menu"][href="'+t+'"]').addClass("active").closest("li").addClass("active");var l=i.effect,c=i.overlay,h=u.is(".left")?"l":"r",p=u.get(0).className.match(/sidebar-size-(\S+)/).pop(),v="st-effect-"+h+p,m=u.data("toggleLayout"),g=s(u,h),y={sidebar:u,target:t};e(document).trigger("sidebar.show",y),e("html").addClass(v),u.show().removeClass("sidebar-closed"),o.data("stMenuEffect",l),o.data("stMenuTarget",t),u.addClass(l),o.addClass(l),c&&o.addClass("st-pusher-overlay"),setTimeout(function(){o.addClass("st-menu-open"),u.find("[data-scrollable]").getNiceScroll().resize(),e(window).trigger("resize")},25),setTimeout(function(){m&&e("html").addClass(g),e(document).trigger("sidebar.shown",y)},n.duration)},c=function(t){t.stopPropagation(),t.preventDefault();var r=u();if(r)return!1;var i,s=e(this),c=s.attr("href");if(c.length>3&&(i=e(c),!i.length))return!1;if(c.length<3){var p=e('[data-toggle="sidebar-menu"]').not(this).closest("li").length?e('[data-toggle="sidebar-menu"]').not(this).closest("li"):e('[data-toggle="sidebar-menu"]').not(this),d=e(this).closest("li").length?e(this).closest("li"):e(this);return p.removeClass("active"),d.addClass("active"),e("html").hasClass("show-sidebar")&&d.removeClass("active"),e("html").removeClass("show-sidebar"),void (d.hasClass("active")&&e("html").addClass("show-sidebar"))}var v=o(i),m={};s.data("effect")&&(m.effect=s.data("effect")),s.data("overlay")&&(m.overlay=s.data("overlay"));var y=e.extend({},n,v,m);return!i.hasClass("sidebar-closed")&&i.is(":visible")?void f(i.attr("id"),y):void l(c,y)};e("body").on(i,'[data-toggle="sidebar-menu"]',c),e(document).on("keydown",null,"esc",function(){var t=e(r);return t.hasClass("st-menu-open")?(f(),!1):void 0}),e.fn.tkSidebarToggleBar=function(){if(this.length){var t=this;if(t.data("toggleBar")){var n=e("<a></a>");n.attr("href","#"+t.attr("id")).attr("data-toggle","sidebar-menu").addClass("sidebar-toggle-bar"),t.append(n)}}},e(".sidebar").each(function(){e(this).tkSidebarToggleBar()}),window.sidebar={open:function(t,r){var i=u();return i?!1:(r=e.extend({},n,r),l("#"+t,r))},close:function(t,r){return r=e.extend({},n,r),f(t,r)},options:o}}()}(jQuery)},{}]},{},["./app/vendor/sidebar/js/main.js"])