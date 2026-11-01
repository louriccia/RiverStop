# River Stop Menu

Static menu site for River Stop, an in-game tavern on a World of Warcraft RP server. Plain HTML, CSS and JavaScript: no build step, no dependencies.

## Files

```
index.html       page shell (header, section nav, footer)
css/styles.css   all styling
js/menu.js       THE MENU: edit this to add, remove or change items
js/app.js        renders menu.js into the page
images/          drop item art here (create when art arrives)
.nojekyll        tells GitHub Pages to serve files as-is
```

## Editing the menu

Open `js/menu.js`. Each item looks like:

```js
{
  name: "Hazelnut Stout",
  desc: "Barrel-aged stout with...",
  tags: ["Seasonal"],                  // optional
  image: "images/hazelnut-stout.webp"  // optional, add when art is ready
}
```

Tags with special colors: `Flagship`, `Spicy`, `Roll D20`. Any other tag uses the default color.

The `TAGS` list at the bottom of `js/menu.js` gives each tag an icon (`star`, `leaf`, `flame` or `d20`) and the meaning shown in the legend at the top of the menu. The legend only lists tags that some item actually uses.

## Previewing locally

Just double-click `index.html`. It works straight from disk.

## Publishing on GitHub Pages

1. Create a new GitHub repository and push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<username>.github.io/<repo-name>/`.

### Custom domain (later)

1. In **Settings → Pages → Custom domain**, enter the domain and save. GitHub adds a `CNAME` file to the repo.
2. At your domain registrar, point DNS at GitHub Pages (a `CNAME` record to `<username>.github.io` for a subdomain like `menu.example.com`, or GitHub's `A` records for an apex domain).
3. Once DNS resolves, tick **Enforce HTTPS**.

## QR code

Generate the QR code from the final live URL (custom domain if you have one, so the code never has to change).
