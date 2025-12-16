if (!crypto.randomUUID) {
  crypto.randomUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
}

(function() {
  document.documentElement.setAttribute("saved-theme", "dark");
  var a = t => {
    let n = new CustomEvent("themechange", {
      detail: {
        theme: t
      }
    });
    document.dispatchEvent(n);
  };
  document.addEventListener("nav", () => {
    // All theme switching logic is commented out to force dark mode.
    /*
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
    */
  });
})();
