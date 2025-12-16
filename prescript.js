if (!crypto.randomUUID) {
  crypto.randomUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
}

(function() {
  var o = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  var r = localStorage.getItem("theme") ?? o;
  document.documentElement.setAttribute("saved-theme", r);
  var a = t => {
    let n = new CustomEvent("themechange", {
      detail: {
        theme: t
      }
    });
    document.dispatchEvent(n);
  };
  document.addEventListener("nav", () => {
    let t = c => {
      let e = document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("saved-theme", e), localStorage.setItem("theme", e), a(e);
    }, n = c => {
      let e = c.matches ? "dark" : "light";
      document.documentElement.setAttribute("saved-theme", e), localStorage.setItem("theme", e), a(e);
    }, d = document.querySelector("#darkmode");
    d && (d.addEventListener("click", t), window.addCleanup(() => d.removeEventListener("click", t)));
    let m = window.matchMedia("(prefers-color-scheme: dark)");
    m.addEventListener("change", n), window.addCleanup(() => m.removeEventListener("change", n));
  });
})();
