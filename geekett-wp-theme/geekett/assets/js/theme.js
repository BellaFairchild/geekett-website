(function () {
  const menuBtn = document.querySelector("[data-gk-menu]");
  const mobile = document.getElementById("gk-mobile-nav");
  if (menuBtn && mobile) {
    menuBtn.addEventListener("click", () => {
      const open = mobile.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".gk-faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".gk-faq-item");
      const open = item.classList.contains("is-open");
      document.querySelectorAll(".gk-faq-item").forEach((el) => el.classList.remove("is-open"));
      if (!open) item.classList.add("is-open");
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  document.querySelectorAll("[data-gk-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-gk-filter");
      document.querySelectorAll("[data-gk-filter]").forEach((b) => b.classList.remove("is-on"));
      btn.classList.add("is-on");
      document.querySelectorAll("[data-gk-project]").forEach((card) => {
        card.style.display = value === "All" || card.getAttribute("data-gk-project") === value ? "" : "none";
      });
    });
  });

  const form = document.querySelector("[data-gk-brief]");
  if (!form) return;
  const panes = [...form.querySelectorAll(".gk-pane")];
  const markers = [...form.querySelectorAll("[data-gk-step]")];
  const bar = form.querySelector("[data-gk-bar]");
  const next = form.querySelector("[data-gk-next]");
  const back = form.querySelector("[data-gk-back]");
  const required = {
    0: ["name", "email", "business"],
    1: ["need", "goal", "who", "mustHaves", "content"],
    2: ["budget", "timeline"],
  };
  let step = 0;

  function show() {
    panes.forEach((p, i) => p.classList.toggle("is-on", i === step));
    markers.forEach((m, i) => m.classList.toggle("is-on", i <= step));
    if (bar) bar.style.width = ((step + 1) / 3) * 100 + "%";
    back.disabled = step === 0;
    next.textContent = step === 2 ? "Send my brief" : "Continue";
  }

  function valid() {
    return required[step].every((name) => {
      const el = form.elements[name];
      return el && String(el.value).trim().length > 0;
    });
  }

  back.addEventListener("click", () => {
    if (step > 0) {
      step -= 1;
      show();
    }
  });

  form.addEventListener("submit", (e) => {
    if (!valid()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    if (step < 2) {
      e.preventDefault();
      step += 1;
      show();
    }
  });

  show();
})();
