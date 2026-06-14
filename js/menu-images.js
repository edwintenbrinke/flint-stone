(function () {
  const STORAGE_KEY = "flintstone-menu-images";
  const body = document.body;
  const btn = document.getElementById("menu-images-toggle");
  if (!btn) return;

  function setVisible(visible) {
    body.classList.toggle("menu-images-hidden", !visible);
    btn.setAttribute("aria-pressed", String(visible));
    btn.textContent = visible ? "Foto's verbergen" : "Foto's tonen";
    try {
      localStorage.setItem(STORAGE_KEY, visible ? "1" : "0");
    } catch (_) {}
  }

  let visible = true;
  try {
    if (localStorage.getItem(STORAGE_KEY) === "0") visible = false;
  } catch (_) {}

  setVisible(visible);

  btn.addEventListener("click", function () {
    setVisible(body.classList.contains("menu-images-hidden"));
  });
})();
