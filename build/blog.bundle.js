webpackJsonp([3],{0:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar links = document.querySelectorAll("[href^=\'#\']");\nvar V = 0.6; // scrolling speed\n\n\nvar _loop = function _loop(iter) {\n    iter.addEventListener("click", function (e) {\n        e.preventDefault();\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n            for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var _iter = _step2.value;\n\n                _iter.classList.remove("is-active");\n            }\n        } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                    _iterator2.return();\n                }\n            } finally {\n                if (_didIteratorError2) {\n                    throw _iteratorError2;\n                }\n            }\n        }\n\n        e.target.classList.add("is-active");\n        var anchor = document.querySelector(iter.getAttribute("href"));\n        var coordAnchor = anchor.getBoundingClientRect().top;\n        var windowY = window.pageYOffset;\n\n        var start = null;\n\n        requestAnimationFrame(step);\n\n        function step(time) {\n            if (start === null) start = time;\n            var progress = time - start;\n\n            var coordY = coordAnchor < 0 ? Math.max(windowY - progress / V, windowY + coordAnchor) : Math.min(windowY + progress / V, windowY + coordAnchor);\n\n            window.scrollTo(0, coordY);\n            if (coordY != windowY + coordAnchor) {\n                requestAnimationFrame(step);\n            }\n        }\n    });\n};\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var iter = _step.value;\n\n        _loop(iter);\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXYtbWVudS1jbGljay5qcz84MTU0Il0sIm5hbWVzIjpbImxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiViIsIml0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwiYWRkIiwiYW5jaG9yIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImNvb3JkQW5jaG9yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93WSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwidGltZSIsInByb2dyZXNzIiwiY29vcmRZIiwiTWF0aCIsIm1heCIsIm1pbiIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQVYsQyxDQUFlOzs7MkJBR0pDLEk7QUFDUEEsU0FBS0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsYUFBSztBQUNoQ0MsVUFBRUMsY0FBRjtBQURnQztBQUFBO0FBQUE7O0FBQUE7QUFFNUIsa0NBQW1CUCxLQUFuQixtSUFBMEI7QUFBQSxvQkFBZkksS0FBZTs7QUFDdEJBLHNCQUFLSSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsV0FBdEI7QUFDSDtBQUoyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUt4QkgsVUFBRUksTUFBRixDQUFTRixTQUFULENBQW1CRyxHQUFuQixDQUF1QixXQUF2QjtBQUNSLFlBQU1DLFNBQVNYLFNBQVNZLGFBQVQsQ0FBdUJULEtBQUtVLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsQ0FBZjtBQUNBLFlBQU1DLGNBQWNILE9BQU9JLHFCQUFQLEdBQStCQyxHQUFuRDtBQUNBLFlBQU1DLFVBQVVDLE9BQU9DLFdBQXZCOztBQUVBLFlBQUlDLFFBQVEsSUFBWjs7QUFFQUMsOEJBQXNCQyxJQUF0Qjs7QUFFQSxpQkFBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCLGdCQUFJSCxVQUFVLElBQWQsRUFBb0JBLFFBQVFHLElBQVI7QUFDcEIsZ0JBQUlDLFdBQVdELE9BQU9ILEtBQXRCOztBQUVBLGdCQUFJSyxTQUNBWCxjQUFjLENBQWQsR0FDTVksS0FBS0MsR0FBTCxDQUFTVixVQUFVTyxXQUFXdEIsQ0FBOUIsRUFBaUNlLFVBQVVILFdBQTNDLENBRE4sR0FFTVksS0FBS0UsR0FBTCxDQUFTWCxVQUFVTyxXQUFXdEIsQ0FBOUIsRUFBaUNlLFVBQVVILFdBQTNDLENBSFY7O0FBS0FJLG1CQUFPVyxRQUFQLENBQWdCLENBQWhCLEVBQW1CSixNQUFuQjtBQUNBLGdCQUFJQSxVQUFVUixVQUFVSCxXQUF4QixFQUFxQztBQUNqQ08sc0NBQXNCQyxJQUF0QjtBQUNIO0FBQ0o7QUFDTCxLQTVCQTs7Ozs7Ozs7QUFESix5QkFBbUJ2QixLQUFuQiw4SEFBMEI7QUFBQSxZQUFmSSxJQUFlOztBQUFBLGNBQWZBLElBQWU7QUE4QnpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHJlZl49JyMnXVwiKTtcclxuY29uc3QgViA9IDAuNjsgLy8gc2Nyb2xsaW5nIHNwZWVkXHJcblxyXG5cclxuZm9yIChjb25zdCBpdGVyIG9mIGxpbmtzKSB7XHJcbiAgICBpdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlciBvZiBsaW5rcykge1xyXG4gICAgICAgICAgICAgICAgaXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuICAgICAgICBjb25zdCBjb29yZEFuY2hvciA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgY29uc3Qgd2luZG93WSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWUgLSBzdGFydDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZFkgPVxyXG4gICAgICAgICAgICAgICAgY29vcmRBbmNob3IgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1heCh3aW5kb3dZIC0gcHJvZ3Jlc3MgLyBWLCB3aW5kb3dZICsgY29vcmRBbmNob3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbih3aW5kb3dZICsgcHJvZ3Jlc3MgLyBWLCB3aW5kb3dZICsgY29vcmRBbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGNvb3JkWSk7XHJcbiAgICAgICAgICAgIGlmIChjb29yZFkgIT0gd2luZG93WSArIGNvb3JkQW5jaG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgIH0pO1xyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbmF2LW1lbnUtY2xpY2suanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},15:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _navMenuScroll = __webpack_require__(16);\n\nvar _navMenuScroll2 = _interopRequireDefault(_navMenuScroll);\n\n__webpack_require__(0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _navMenuScroll2.default)();\n\nvar menuBtn = document.querySelector('.hero__menu');\nvar popap = document.querySelector('.popap-page');\n\nmenuBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    menuBtn.classList.toggle(\"active\");\n    popap.classList.toggle(\"is-active\");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbIm1lbnVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3BhcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUVBLElBQUlBLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZDtBQUNBLElBQUlDLFFBQVFGLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjs7QUFHQUYsUUFBUUksZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVUMsQ0FBVixFQUFhO0FBQzNDQSxNQUFFQyxjQUFGO0FBQ0FOLFlBQVFPLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FMLFVBQU1JLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0gsQ0FKRCIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgc2Nyb2xsUGFnIGZyb20gXCIuL21vZHVsZXMvbmF2LW1lbnUtc2Nyb2xsLmpzXCJcclxuaW1wb3J0IFwiLi9tb2R1bGVzL25hdi1tZW51LWNsaWNrLmpzXCJcclxuXHJcbnNjcm9sbFBhZygpO1xyXG5cclxudmFyIG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fbWVudScpO1xyXG52YXIgcG9wYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wYXAtcGFnZScpO1xyXG5cclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgcG9wYXAuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n")},16:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = scrollPage;\nfunction scrollPage() {\n    var sideBarHolder = document.getElementsByClassName('sidebar')[0];\n    console.log(sideBarHolder);\n    var links = document.querySelectorAll(\".nav-blog__link\");\n    var articleItems = document.getElementsByClassName('blog-content__item');\n    var menuList = document.getElementsByClassName('nav-blog__list');\n    console.log(menuList);\n\n    // получаем массив из объектов с top и bottom у каждой стаьти\n    var positionArticle = [];\n    var offsetHeight = 0;\n    console.log(positionArticle);\n\n    // передаем в функцию массив всех article\n    function scrollMenu(elements) {\n        for (var i = 0; i < elements.length; i++) {\n            var item = elements[i];\n            var obj = {};\n            console.log(item);\n\n            obj.top = item.offsetTop;\n            obj.bottom = obj.top + item.clientHeight;\n            positionArticle.push(obj);\n        }\n    }\n\n    function scrollPageFixMenu(e) {\n        var scroll = window.pageYOffset;\n        console.log(scroll);\n        if (scroll < positionArticle[0].offsetTop) {\n            sideBarHolder.classList.remove('fixed');\n        } else {\n            sideBarHolder.classList.add('fixed');\n        }\n\n        for (var i = 0; i < positionArticle.length; i++) {\n            var item = positionArticle[i];\n\n            if (scroll > item.top && scroll < item.bottom) {\n                links[i].classList.add('is-active');\n            } else {\n                links[i].classList.remove('is-active');\n            }\n        }\n    }\n\n    menuList.onclick = function (e) {\n        e.preventDefault();\n        console.log(e);\n    };\n\n    window.addEventListener('wheel', scrollPageFixMenu);\n    scrollMenu(articleItems);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXYtbWVudS1zY3JvbGwuanM/NmEwMSJdLCJuYW1lcyI6WyJzY3JvbGxQYWdlIiwic2lkZUJhckhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlSXRlbXMiLCJtZW51TGlzdCIsInBvc2l0aW9uQXJ0aWNsZSIsIm9mZnNldEhlaWdodCIsInNjcm9sbE1lbnUiLCJlbGVtZW50cyIsImkiLCJsZW5ndGgiLCJpdGVtIiwib2JqIiwidG9wIiwib2Zmc2V0VG9wIiwiYm90dG9tIiwiY2xpZW50SGVpZ2h0IiwicHVzaCIsInNjcm9sbFBhZ2VGaXhNZW51IiwiZSIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxVO0FBQVQsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxRQUFNQyxnQkFBZ0JDLFNBQVNDLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLENBQXRCO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWUosYUFBWjtBQUNBLFFBQU1LLFFBQVFKLFNBQVNLLGdCQUFULENBQTBCLGlCQUExQixDQUFkO0FBQ0EsUUFBTUMsZUFBZU4sU0FBU0Msc0JBQVQsQ0FBZ0Msb0JBQWhDLENBQXJCO0FBQ0EsUUFBTU0sV0FBV1AsU0FBU0Msc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQWpCO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWUksUUFBWjs7QUFFSjtBQUNJLFFBQUlDLGtCQUFrQixFQUF0QjtBQUNBLFFBQUlDLGVBQWUsQ0FBbkI7QUFDQVAsWUFBUUMsR0FBUixDQUFZSyxlQUFaOztBQUVKO0FBQ0ksYUFBU0UsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDMUIsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFNBQVNFLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN0QyxnQkFBSUUsT0FBT0gsU0FBU0MsQ0FBVCxDQUFYO0FBQ0EsZ0JBQUlHLE1BQU0sRUFBVjtBQUNBYixvQkFBUUMsR0FBUixDQUFZVyxJQUFaOztBQUVBQyxnQkFBSUMsR0FBSixHQUFVRixLQUFLRyxTQUFmO0FBQ0FGLGdCQUFJRyxNQUFKLEdBQWFILElBQUlDLEdBQUosR0FBVUYsS0FBS0ssWUFBNUI7QUFDQVgsNEJBQWdCWSxJQUFoQixDQUFxQkwsR0FBckI7QUFDSDtBQUNKOztBQUdELGFBQVNNLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QjtBQUMxQixZQUFJQyxTQUFTQyxPQUFPQyxXQUFwQjtBQUNBdkIsZ0JBQVFDLEdBQVIsQ0FBWW9CLE1BQVo7QUFDQSxZQUFJQSxTQUFTZixnQkFBZ0IsQ0FBaEIsRUFBbUJTLFNBQWhDLEVBQTJDO0FBQ3ZDbEIsMEJBQWMyQixTQUFkLENBQXdCQyxNQUF4QixDQUErQixPQUEvQjtBQUNILFNBRkQsTUFFTztBQUNINUIsMEJBQWMyQixTQUFkLENBQXdCRSxHQUF4QixDQUE0QixPQUE1QjtBQUNIOztBQUVELGFBQUssSUFBSWhCLElBQUksQ0FBYixFQUFnQkEsSUFBSUosZ0JBQWdCSyxNQUFwQyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDN0MsZ0JBQUlFLE9BQU9OLGdCQUFnQkksQ0FBaEIsQ0FBWDs7QUFFQSxnQkFBSVcsU0FBU1QsS0FBS0UsR0FBZCxJQUFxQk8sU0FBU1QsS0FBS0ksTUFBdkMsRUFBK0M7QUFDM0NkLHNCQUFNUSxDQUFOLEVBQVNjLFNBQVQsQ0FBbUJFLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0gsYUFGRCxNQUVPO0FBQ0h4QixzQkFBTVEsQ0FBTixFQUFTYyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixXQUExQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRHBCLGFBQVNzQixPQUFULEdBQW1CLFVBQVNQLENBQVQsRUFBWTtBQUMzQkEsVUFBRVEsY0FBRjtBQUNBNUIsZ0JBQVFDLEdBQVIsQ0FBWW1CLENBQVo7QUFDRixLQUhGOztBQUtGRSxXQUFPTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ1YsaUJBQWpDO0FBQ0VYLGVBQVdKLFlBQVg7QUFFSCIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFBhZ2UoKSB7XHJcbiAgICBjb25zdCBzaWRlQmFySG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhcicpWzBdO1xyXG4gICAgY29uc29sZS5sb2coc2lkZUJhckhvbGRlcik7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJsb2dfX2xpbmtcIik7XHJcbiAgICBjb25zdCBhcnRpY2xlSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibG9nLWNvbnRlbnRfX2l0ZW0nKTtcclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWJsb2dfX2xpc3QnKTtcclxuICAgIGNvbnNvbGUubG9nKG1lbnVMaXN0KTtcclxuXHJcbi8vINC/0L7Qu9GD0YfQsNC10Lwg0LzQsNGB0YHQuNCyINC40Lcg0L7QsdGK0LXQutGC0L7QsiDRgSB0b3Ag0LggYm90dG9tINGDINC60LDQttC00L7QuSDRgdGC0LDRjNGC0LhcclxuICAgIGxldCBwb3NpdGlvbkFydGljbGUgPSBbXTtcclxuICAgIGxldCBvZmZzZXRIZWlnaHQgPSAwO1xyXG4gICAgY29uc29sZS5sb2cocG9zaXRpb25BcnRpY2xlKTtcclxuXHJcbi8vINC/0LXRgNC10LTQsNC10Lwg0LIg0YTRg9C90LrRhtC40Y4g0LzQsNGB0YHQuNCyINCy0YHQtdGFIGFydGljbGVcclxuICAgIGZ1bmN0aW9uIHNjcm9sbE1lbnUoZWxlbWVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBvYmoudG9wID0gaXRlbS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIG9iai5ib3R0b20gPSBvYmoudG9wICsgaXRlbS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uQXJ0aWNsZS5wdXNoKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxQYWdlRml4TWVudShlKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGwpO1xyXG4gICAgICAgIGlmIChzY3JvbGwgPCBwb3NpdGlvbkFydGljbGVbMF0ub2Zmc2V0VG9wKSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXJIb2xkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXJIb2xkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbkFydGljbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBwb3NpdGlvbkFydGljbGVbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsID4gaXRlbS50b3AgJiYgc2Nyb2xsIDwgaXRlbS5ib3R0b20pIHtcclxuICAgICAgICAgICAgICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbnVMaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgc2Nyb2xsUGFnZUZpeE1lbnUpO1xyXG4gICAgc2Nyb2xsTWVudShhcnRpY2xlSXRlbXMpO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL25hdi1tZW51LXNjcm9sbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n")}},[15]);