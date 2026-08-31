/* ============================================================
   杨焕琳 · 作品集 交互脚本
   - 明暗主题切换（localStorage 记忆，默认亮色）
   - 吸顶导航滚动高亮
   - 滚动显现动画（IntersectionObserver）
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. 明暗主题切换（默认亮色） ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  // 读取偏好：localStorage > 系统偏好；无偏好时默认亮色（与模板一致）
  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme");
  } catch (e) { /* ignore */ }

  if (savedTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = root.classList.toggle("dark");
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (e) { /* ignore */ }
    });
  }

  /* ---------- 2. 吸顶导航滚动高亮 ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.length > 1 ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === id;
      link.classList.toggle("active", isActive);
    });
  }

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    var currentId = null;
    // 优先：视口上缘附近的区块
    var probe = scrollY + window.innerHeight * 0.35;
    sections.forEach(function (sec) {
      if (sec && sec.offsetTop <= probe) {
        currentId = "#" + sec.id;
      }
    });
    if (!currentId && sections.length > 0 && scrollY < sections[0].offsetTop) {
      currentId = null;
    }
    if (currentId) setActive(currentId);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 3. 滚动显现动画 ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // 降级：直接显示
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
