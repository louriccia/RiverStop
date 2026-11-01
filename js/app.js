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

  // 16x16 line icons for tags, drawn in each tag's color.
  const ICONS = {
    star: "M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6z",
    leaf: "M3 13C3 6.5 7 3 13 3c0 6.5-3.5 10-10 10zM3 13l6-6",
    flame: "M8 1.5c.6 2.6 4 4.2 4 8a4 4 0 0 1-8 0c0-1.8.9-3 1.8-3.8.1 1.3.7 2.1 1.5 2.3C7.6 6 7 4 8 1.5z",
    d20: "M8 1.3l5.8 3.35v6.7L8 14.7l-5.8-3.35v-6.7zM8 4.6l3.3 5.7H4.7zM8 1.3v3.3M2.2 4.65l2.5 5.65M13.8 4.65l-2.5 5.65M2.2 11.35l2.5-1.05M13.8 11.35l-2.5-1.05M8 14.7v-4.4"
  };
  const SVG_NS = "http://www.w3.org/2000/svg";

  // A tag's icon, colored by its tag-<slug> class. Tags without an icon in
  // TAGS fall back to a plain text chip.
  function renderTag(tag) {
    const slug = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const info = TAGS[tag];
    const icon = info && ICONS[info.icon];
    if (!icon) return el("span", "tag tag-" + slug, tag);

    const mark = el("span", "tag-mark tag-" + slug);
    mark.setAttribute("role", "img");
    mark.setAttribute("aria-label", tag);
    mark.title = tag + ": " + info.note;
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", icon);
    svg.appendChild(path);
    mark.appendChild(svg);
    return mark;
  }

  // Legend of the tags that actually appear on the menu, in TAGS order.
  function renderLegend() {
    const used = {};
    MENU.forEach(function (section) {
      section.items.forEach(function (item) {
        (item.tags || []).forEach(function (tag) { used[tag] = true; });
      });
    });
    const tags = Object.keys(TAGS).filter(function (tag) {
      return used[tag] && ICONS[TAGS[tag].icon];
    });
    if (!tags.length) return;

    const legend = el("dl", "tag-legend");
    legend.setAttribute("aria-label", "What the tags mean");
    tags.forEach(function (tag) {
      const entry = el("div", "legend-entry");
      const term = el("dt");
      term.appendChild(renderTag(tag));
      entry.appendChild(term);
      entry.appendChild(el("dd", null, TAGS[tag].note));
      legend.appendChild(entry);
    });
    main.appendChild(legend);
  }

  function renderItem(item, section) {
    const article = el("article", "item");
    const image = item.image || section.placeholder;

    if (image) {
      const img = el("img", item.image ? "item-art" : "item-art placeholder");
      img.src = image;
      img.alt = "";
      img.loading = "lazy";
      article.appendChild(img);
    }

    const body = el("div", "item-body");
    const head = el("div", "item-head");
    const name = el("h3", "item-name");
    head.appendChild(name);

    if (item.tags && item.tags.length) {
      // Glue the name's last word to the tag icons so the icons never wrap
      // onto a line by themselves.
      const split = item.name.lastIndexOf(" ") + 1;
      const tail = el("span", "name-tail", item.name.slice(split));
      const tags = el("span", "item-tags");
      item.tags.forEach(function (tag) {
        tags.appendChild(renderTag(tag));
      });
      tail.appendChild(tags);
      name.appendChild(document.createTextNode(item.name.slice(0, split)));
      name.appendChild(tail);
    } else {
      name.textContent = item.name;
    }

    body.appendChild(head);
    if (item.desc) body.appendChild(el("p", "item-desc", item.desc));
    article.appendChild(body);
    return article;
  }

  renderLegend();

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
