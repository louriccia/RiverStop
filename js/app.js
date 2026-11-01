// Renders MENU (from menu.js) into the page and keeps the section nav in sync.
(function () {
  const main = document.getElementById("menu");
  const linkList = document.getElementById("section-links");

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderItem(item, section) {
    const article = el("article", "item");
    const image = item.image || section.placeholder;

    if (image) {
      const img = el("img", "item-art");
      img.src = image;
      img.alt = "";
      img.loading = "lazy";
      article.appendChild(img);
    }

    const body = el("div", "item-body");
    const head = el("div", "item-head");
    head.appendChild(el("h3", "item-name", item.name));

    (item.tags || []).forEach(function (tag) {
      const slug = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      head.appendChild(el("span", "tag tag-" + slug, tag));
    });

    body.appendChild(head);
    if (item.desc) body.appendChild(el("p", "item-desc", item.desc));
    article.appendChild(body);
    return article;
  }

  MENU.forEach(function (section) {
    const sec = el("section", "menu-section" + (section.compact ? " compact" : ""));
    sec.id = section.id;
    sec.setAttribute("aria-labelledby", section.id + "-title");

    // Title plaque flanked by two decorative rules.
    const header = el("div", "section-header");
    const heading = el("h2", "section-title", section.title);
    heading.id = section.id + "-title";
    header.appendChild(el("span", "rule rule-left"));
    header.appendChild(heading);
    header.appendChild(el("span", "rule rule-right"));
    sec.appendChild(header);

    const list = el("div", "items");
    section.items.forEach(function (item) {
      list.appendChild(renderItem(item, section));
    });
    sec.appendChild(list);
    main.appendChild(sec);

    const li = el("li");
    const a = el("a", null, section.title);
    a.href = "#" + section.id;
    li.appendChild(a);
    linkList.appendChild(li);
  });

  // Sections are rendered after the browser tries to jump to #hash, and web fonts
  // shift the layout, so re-jump once everything has loaded.
  window.addEventListener("load", function () {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" });
  });

  // Highlight the nav link for the section currently in view.
  // The current section is the last one whose top has passed under the nav;
  // at the very bottom of the page it is the last section.
  const sections = main.querySelectorAll(".menu-section");
  const links = linkList.querySelectorAll("a");
  const nav = document.querySelector(".section-nav");
  let current = -1;
  let ticking = false;

  function updateActive() {
    ticking = false;
    const line = nav.offsetHeight + 40;
    let index = 0;
    sections.forEach(function (s, i) {
      if (s.getBoundingClientRect().top <= line) index = i;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      index = sections.length - 1;
    }
    if (index === current) return;
    current = index;

    links.forEach(function (link, i) {
      link.classList.toggle("active", i === index);
    });
    // Scroll only the nav strip sideways; scrollIntoView would also
    // move the page and fight the user's scrolling.
    const link = links[index];
    const left = link.offsetLeft - (linkList.clientWidth - link.offsetWidth) / 2;
    linkList.scrollTo({ left: left, behavior: "smooth" });
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateActive);
    }
  }, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();
})();
