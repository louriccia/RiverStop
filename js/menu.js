/*
  River Stop menu data.

  Edit this file to change the menu. Each section has a title and a list of items.
  Item fields:
    name   - required
    desc   - optional description / ingredients
    tags   - optional list of small labels, e.g. ["Seasonal"]
    image  - optional path to art, e.g. "images/hazelnut-stout.webp"

  A section's optional "placeholder" image is shown for items without their
  own image. Delete those lines to show no art for items that have none.
*/
const MENU = [
  {
    id: "brews",
    placeholder: "images/placeholders/brew.svg",
    title: "Tap List",
    items: [
      {
        name: "Hazelnut Stout",
        desc: "Barrel-aged stout with hints of cocoa and vanilla infusing the rich, nutty hazelnut flavor."
      },
      {
        name: "Kalimdor Pale Ale",
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
        name: "Starlight Gose",
        desc: "A dwarven-style sour wheat ale with a rosy color and a sparkling finish."
      },
      {
        name: "Dreamberry Sour",
        desc: "Made with berries imported from Val’sharah, this sour beer combines a floral-bitter flavor with the tart sweetness of blue dreamberries."
      },
      {
        name: "Lunar Pear Cider",
        desc: "Tangy and crisp, this pear cider is equal parts sweet and tart."
      },
      {
        name: "Mead",
        desc: "A traditional Dwarven honeywine, made from our partner’s apiaries. Ask about the seasonal flavor.",
        tags: ["Seasonal"]
      }
    ]
  },
  {
    id: "spirits",
    placeholder: "images/placeholders/cocktail.svg",
    title: "Cocktails",
    items: [
      {
        name: "River Stop’s Famous Eluneshine",
        desc: "Our flagship drink, brewed right here under the gaze of Mother Moon. Ask about seasonal flavors.",
        tags: ["Flagship", "Seasonal"]
      },
      {
        name: "Tequila Moonrise",
        desc: "Tequila, moonberry juice, lunar pear syrup."
      },
      {
        name: "Elune-adore, Motherf*cker (EMF)",
        desc: "Vodka, rum, tequila, gin, blue Eluneshine, a splash of ginger beer and a sunfruit wedge garnish."
      },
      {
        name: "Auberdine Iced Tea",
        desc: "Vodka, rum, tequila, gin, sunfruit liquor, lemon juice, and a splash of Kaja’Cola."
      },
      {
        name: "Sex in the Moonwell",
        desc: "Vodka, heaven peach schnapps, sunfruit juice, and moonberry juice."
      },
      {
        name: "Midnight Starpepper Margarita",
        desc: "Tequila, lime juice, muddled midnight starpeppers with a spicy salt rim.",
        tags: ["Spicy"]
      },
      {
        name: "Starfire Espresso Martini",
        desc: "Vodka, kafa liquor, Starfire espresso. Does not sober you up."
      },
      {
        name: "One-Way Ticket to Mother Moon",
        desc: "Your choice of beer with a shot of 100-proof Teldrassil White Lightning, bomb-shot style.",
        tags: ["Roll d20"]
      }
    ]
  },
  {
    id: "zero-proof",
    placeholder: "images/placeholders/zero-proof.svg",
    title: "Zero Proof",
    compact: true,
    items: [
      { name: "Fruit Juice", desc: "Sunfruit or moonberry." },
      { name: "Heaven Peach Milk Tea" },
      { name: "Ginger Beer" },
      { name: "Lemonade" },
      { name: "Just Milk" },
      { name: "Kafa", desc: "Iced or hot." },
      { name: "Tea", desc: "Iced or hot. Ask about our seasonal flavor.", tags: ["Seasonal"] }
    ]
  },
  {
    id: "kitchen",
    placeholder: "images/placeholders/kitchen.svg",
    title: "From the Kitchen",
    items: [
      {
        name: "Elk Brat with Homemade Kimchi",
        desc: "A quarter-pound all-elk brat in a seeded bun, topped with our homemade kimchi, spicy mayo and Darnassian furikake seasoning."
      },
      {
        name: "Smoked Salmon Poke Bowl",
        desc: "Locally caught salmon, smoked fresh, on top of a bed of wild rice with pickled root vegetables, seaweed salad and everything seasoning."
      },
      {
        name: "Wild Boar Chili",
        desc: "A hearty Darnassian curry-based chili with savory wild boar, three kinds of beans, and cornbread cakes on the side."
      },
      {
        name: "Trout on a Stick",
        desc: "Exactly what it sounds like: a whole roasted fish kebab featuring trout from the river, well seasoned with fresh garden herbs and crispy."
      },
      {
        name: "Chicken of the Woods and Waffles",
        desc: "Foraged chicken of the woods mushrooms, seasoned and fried atop a stack of sweet potato waffles, dripping with 100% Azsharan maple syrup."
      },
      {
        name: "World Tree Pretzel",
        desc: "A giant hanging pretzel with stone-ground mustard or whipped Azsunian feta for dipping."
      }
    ]
  },
  {
    id: "sweets",
    placeholder: "images/placeholders/sweets.svg",
    title: "Sweets",
    items: [
      {
        name: "Moonberry Crème Brûlée",
        desc: "A rich moonberry-flavored custard base with a burnt sugar topping, made to order."
      },
      {
        name: "Hand Pie",
        desc: "Seasonal filling wrapped in buttery pastry, sprinkled with sugar. The perfect walking dessert!",
        tags: ["Seasonal"]
      },
      {
        name: "Scoop of Ice Cream",
        desc: "Single or double. Ask about our seasonal flavor.",
        tags: ["Seasonal"]
      }
    ]
  }
];
