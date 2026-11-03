/*
  River Stop menu data.

  Edit this file to change the menu. Each section has a title and a list of items.
  Item fields:
    name   - required
    desc   - optional description / ingredients
    tags   - optional list of small labels, e.g. ["Seasonal"]
    image  - optional path to art, e.g. "images/hazelnut-stout.webp"

  A section's optional "art" image is shown on both sides of its title, and
  its optional "theme" recolors it (see .theme-* in css/styles.css) and swaps
  placeholder icons for the copies in images/placeholders/<theme>/.
  flow: "columns" fills the two desktop columns top to bottom (left column
  first) instead of row by row, which evens out columns of mixed heights.

  A section with no items shows its "empty" line instead.

  Seasonal Specials uses "seasons" instead of "items": one list per season.
  The menu shows the current season's list, switching on its own:
    winter Dec–Feb, spring Mar–May, summer Jun–Aug, autumn Sep–Nov.
*/
const MENU = [
  {
    id: "seasonal",
    art: "images/placeholders/seasonal.svg",
    title: "Seasonal Specials",
    theme: "harvest",
    flow: "columns",
    empty: "This season’s specials are still brewing. Ask your server!",
    seasons: {
      winter: [],
      spring: [],
      summer: [],
      autumn: [
        {
          name: "Seasonal Eluneshine: Apple Pie",
          image: "images/placeholders/cocktail.svg",
          desc: "Warm, sweet spices mulled with a bright harvest apple flavor."
        },
        {
          name: "Mead: FallRiver Honeywine",
          image: "images/placeholders/brew.svg",
          desc: "Made with late-season honey, giving it a rich golden color and a hint of cinnamon."
        },
        {
          name: "Tea: Equinox Blend",
          image: "images/placeholders/zero-proof.svg",
          desc: "A mix of tart highland berries and warm autumnal spices."
        },
        {
          name: "Hand Pie: Purple Sweet Potato",
          image: "images/placeholders/sweets.svg",
          desc: "Purple sweet potato filling mixed with ribbons of toasted marshmallow, wrapped in a buttery pastry."
        },
        {
          name: "Ice Cream by Illi-Dairy: Pumpkin Cheesecake",
          image: "images/placeholders/sweets.svg",
          desc: "Chunks of Elwynn pumpkin cheesecake swirled into a salted butterscotch ice cream."
        }
      ]
    }
  },
  {
    id: "brews",
    art: "images/placeholders/brew.svg",
    title: "Tap List",
    items: [
      {
        name: "Hazelnut Stout",
        desc: "A barrel-aged stout with hints of cocoa and vanilla infusing the rich, nutty hazelnut flavor."
      },
      {
        name: "Kalimdor Pale Ale (KPA)",
        desc: "A traditional pale ale with a pleasantly bitter, piney undertone."
      },
      {
        name: "Elderflower Ale",
        desc: "A classic wheat ale with a slightly malty flavor and a citrusy, floral finish."
      },
      {
        name: "Lilac Saison",
        desc: "A bright, refreshing brew with a floral, peppery finish."
      },
      {
        name: "Dreamberry Sour",
        desc: "Made with berries imported from Val’sharah, this sour beer combines a floral-bitter flavor with the tart sweetness of blue dreamberries."
      },
      {
        name: "Lunar Pear Cider",
        desc: "Tangy and crisp, this pear cider is equal parts sweet and tart."
      }
    ]
  },
  {
    id: "wine",
    art: "images/placeholders/wine.svg",
    title: "Wine Selection",
    items: [
      {
        name: "Hyjal Cabernet",
        desc: "A full-bodied, oaky red wine, aged to perfection in the temperate Hyjal climate."
      },
      {
        name: "Starbreeze Chardonnay",
        desc: "A crisp, dry white with notes of green apple, melon, and peach."
      },
      {
        name: "Starlight Rosé",
        desc: "A pale, crisp rosé with floral undertones and a faint sparkle, imported from Suramar."
      },
      {
        name: "Kaluvor: Elvish Festival Wine",
        desc: "A sweet dessert wine brewed with honey, peacebloom, and moonpetal lily nectar."
      }
    ]
  },
  {
    id: "spirits",
    art: "images/placeholders/cocktail.svg",
    title: "Cocktails",
    items: [
      {
        name: "River Stop’s Famous Eluneshine",
        desc: "Our flagship drink, brewed right here under the gaze of Mother Moon. Ask about seasonal flavors.",
        tags: ["Flagship", "Seasonal"]
      },
      {
        name: "Tequila Moonrise",
        desc: "Tequila, moonberry juice, and lunar pear syrup."
      },
      {
        name: "Elune-adore, Motherf*cker (EMF)",
        desc: "Vodka, rum, tequila, gin, blue dreamberry Eluneshine, a splash of ginger beer, and a sunfruit wedge garnish."
      },
      {
        name: "Auberdine Iced Tea",
        desc: "Vodka, rum, tequila, gin, sunfruit liqueur, lemon juice, and a splash of Kaja’Cola."
      },
      {
        name: "Sex in the Moonwell",
        desc: "Vodka, heaven peach schnapps, sunfruit juice, and moonberry juice."
      },
      {
        name: "Midnight Starpepper Margarita",
        desc: "Tequila, lime juice, and muddled midnight starpeppers, with a spicy salt rim.",
        tags: ["Spicy"]
      },
      {
        name: "Starfire Espresso Martini",
        desc: "Vodka, kafa liqueur, and Starfire espresso. Does not sober you up."
      },
      {
        name: "One-Way Ticket to Mother Moon",
        desc: "Your choice of beer with a shot of 100-proof Teldrassil White Lightning, bomb style.",
        tags: ["Roll D20"]
      }
    ]
  },
  {
    id: "bartender-picks",
    art: "images/placeholders/cocktail.svg",
    title: "Bartender Picks",
    empty: "Ask your bartender what they’re pouring tonight.",
    items: [
      {
        name: "Liquid Peacebloom",
        desc: "Spiced rum, coconut rum, melonfruit liqueur, pineapple juice, and sweet and sour."
      },
      {
        name: "Moonheaded Saint",
        desc: "Teldrassil White Lightning, moonberry juice, and an Eluneshine-soaked peach slice, served in a shot glass with a sprinkle of glitter."
      },
      {
        name: "Lavenbloom Gin Fizz",
        desc: "Lavenderbloom gin, lemon juice, and sparkling soda, with wildflowers suspended in ice."
      }
    ]
  },
  {
    id: "zero-proof",
    art: "images/placeholders/zero-proof.svg",
    title: "Zero Proof",
    items: [
      { name: "Fruit Juice", desc: "Sunfruit or moonberry." },
      { name: "Heaven Peach Milk Tea", desc: "Freshly brewed black tea with cream and heaven peach purée." },
      { name: "Lemonade", desc: "Fresh-squeezed. Ask to add a splash of heaven peach, sunfruit, or moonberry." },
      { name: "Milk", desc: "Just milk." },
      { name: "Kafa", desc: "Iced or hot." },
      { name: "Tea", desc: "Iced or hot. Ask about our seasonal flavor.", tags: ["Seasonal"] }
    ]
  },
  {
    id: "kitchen",
    art: "images/placeholders/kitchen.svg",
    title: "From the Kitchen",
    items: [
      {
        name: "Elk Brat with Homemade Kimchi",
        desc: "A quarter-pound all-elk brat in a seeded bun, topped with our homemade kimchi, spicy mayo, and Darnassian seaweed seasoning."
      },
      {
        name: "Smoked Salmon Poke Bowl",
        desc: "Locally caught salmon, smoked fresh, on top of a bed of wild rice with pickled root vegetables, seaweed salad, and everything seasoning."
      },
      {
        name: "Wild Boar Chili",
        desc: "A hearty Darnassian curry-based chili with savory wild boar, three kinds of beans, and cornbread cakes on the side."
      },
      {
        name: "Trout on a Stick",
        desc: "Exactly what it sounds like: a whole roasted river trout, seasoned with fresh garden herbs."
      },
      {
        name: "Chicken of the Woods and Waffles",
        desc: "Foraged chicken-of-the-woods mushrooms, seasoned and fried atop a stack of sweet potato waffles, dripping with 100% Azsharan maple syrup."
      },
      {
        name: "World Tree Pretzel",
        desc: "A giant hanging pretzel with stone-ground mustard or whipped Azsunian feta for dipping."
      }
    ]
  },
  {
    id: "sweets",
    art: "images/placeholders/sweets.svg",
    title: "Sweets",
    items: [
      {
        name: "Moonberry Crème Brûlée",
        desc: "A rich moonberry-flavored custard base with a burnt-sugar topping, made to order."
      },
      {
        name: "Winterspring Bingsu",
        desc: "A scoop of vanilla ice cream covered in shaved ice, sweetened condensed milk, ube sauce, and shredded coconut."
      },
      {
        name: "Sweet Rice Cakes",
        desc: "Three half-moon-shaped rice cakes filled with red bean paste."
      }
    ]
  }
];

/*
  Tag legend. Each tag used above gets an icon and a short meaning, shown in
  the legend at the bottom of the menu. Icons: star, leaf, flame, d20.
  A tag that isn't listed here still shows as a plain chip.
*/
const TAGS = {
  "Flagship": { icon: "star", note: "House specialty" },
  "Seasonal": { icon: "leaf", note: "Flavor changes with the season" },
  "Spicy": { icon: "flame", note: "Brings the heat" },
  "Roll D20": { icon: "d20", note: "Roll a D20 when you order" }
};
