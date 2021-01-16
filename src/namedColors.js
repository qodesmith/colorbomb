/*
  5/3/2020
  All CSS color names found here - https://drafts.csswg.org/css-color/#named-colors

  W3C color name definitions:
    * https://drafts.csswg.org/css-color-3/#html4 - basic color keywords.
    * https://drafts.csswg.org/css-color-3/#svg-color - extended color keywords.
*/

const namedColors = [
  // Red
  {name: "indianred", hex: "#cd5c5c"},
  {name: "lightcoral", hex: "#f08080"},
  {name: "salmon", hex: "#fa8072"},
  {name: "darksalmon", hex: "#e9967a"},
  {name: "lightsalmon", hex: "#ffa07a"},
  {name: "crimson", hex: "#dc143c"},
  {name: "red", hex: "#ff0000"},
  {name: "firebrick", hex: "#b22222"},
  {name: "darkred", hex: "#8b0000"},

  // Pink
  {name: "pink", hex: "#ffc0cb"},
  {name: "lightpink", hex: "#ffb6c1"},
  {name: "hotpink", hex: "#ff69b4"},
  {name: "deeppink", hex: "#ff1493"},
  {name: "mediumvioletred", hex: "#c71585"},
  {name: "palevioletred", hex: "#db7093"},

  // Orange
  {name: "lightsalmon", hex: "#ffa07a"},
  {name: "coral", hex: "#ff7f50"},
  {name: "tomato", hex: "#ff6347"},
  {name: "orangered", hex: "#ff4500"},
  {name: "darkorange", hex: "#ff8c00"},
  {name: "orange", hex: "#ffa500"},

  // Yellow
  {name: "gold", hex: "#ffd700"},
  {name: "yellow", hex: "#ffff00"},
  {name: "lightyellow", hex: "#ffffe0"},
  {name: "lemonchiffon", hex: "#fffacd"},
  {name: "lightgoldenrodyellow", hex: "#fafad2"},
  {name: "papayawhip", hex: "#ffefd5"},
  {name: "moccasin", hex: "#ffe4b5"},
  {name: "peachpuff", hex: "#ffdab9"},
  {name: "palegoldenrod", hex: "#eee8aa"},
  {name: "khaki", hex: "#f0e68c"},
  {name: "darkkhaki", hex: "#bdb76b"},

  // Purple
  {name: "lavender", hex: "#e6e6fa"},
  {name: "thistle", hex: "#d8bfd8"},
  {name: "plum", hex: "#dda0dd"},
  {name: "violet", hex: "#ee82ee"},
  {name: "orchid", hex: "#da70d6"},
  {name: "fuchsia", hex: "#ff00ff"},
  {name: "magenta", hex: "#ff00ff"},
  {name: "mediumorchid", hex: "#ba55d3"},
  {name: "mediumpurple", hex: "#9370db"},
  {name: "rebeccapurple", hex: "#663399"},
  {name: "blueviolet", hex: "#8a2be2"},
  {name: "darkviolet", hex: "#9400d3"},
  {name: "darkorchid", hex: "#9932cc"},
  {name: "darkmagenta", hex: "#8b008b"},
  {name: "purple", hex: "#800080"},
  {name: "indigo", hex: "#4b0082"},
  {name: "slateblue", hex: "#6a5acd"},
  {name: "darkslateblue", hex: "#483d8b"},
  {name: "mediumslateblue", hex: "#7b68ee"},

  // Green
  {name: "greenyellow", hex: "#adff2f"},
  {name: "chartreuse", hex: "#7fff00"},
  {name: "lawngreen", hex: "#7cfc00"},
  {name: "lime", hex: "#00ff00"},
  {name: "limegreen", hex: "#32cd32"},
  {name: "palegreen", hex: "#98fb98"},
  {name: "lightgreen", hex: "#90ee90"},
  {name: "mediumspringgreen", hex: "#00fa9a"},
  {name: "springgreen", hex: "#00ff7f"},
  {name: "mediumseagreen", hex: "#3cb371"},
  {name: "seagreen", hex: "#2e8b57"},
  {name: "forestgreen", hex: "#228b22"},
  {name: "green", hex: "#008000"},
  {name: "darkgreen", hex: "#006400"},
  {name: "yellowgreen", hex: "#9acd32"},
  {name: "olivedrab", hex: "#6b8e23"},
  {name: "olive", hex: "#808000"},
  {name: "darkolivegreen", hex: "#556b2f"},
  {name: "mediumaquamarine", hex: "#66cdaa"},
  {name: "darkseagreen", hex: "#8fbc8b"},
  {name: "lightseagreen", hex: "#20b2aa"},
  {name: "darkcyan", hex: "#008b8b"},
  {name: "teal", hex: "#008080"},

  // Blue
  {name: "aqua", hex: "#00ffff"},
  {name: "cyan", hex: "#00ffff"},
  {name: "lightcyan", hex: "#e0ffff"},
  {name: "paleturquoise", hex: "#afeeee"},
  {name: "aquamarine", hex: "#7fffd4"},
  {name: "turquoise", hex: "#40e0d0"},
  {name: "mediumturquoise", hex: "#48d1cc"},
  {name: "darkturquoise", hex: "#00ced1"},
  {name: "cadetblue", hex: "#5f9ea0"},
  {name: "steelblue", hex: "#4682b4"},
  {name: "lightsteelblue", hex: "#b0c4de"},
  {name: "powderblue", hex: "#b0e0e6"},
  {name: "lightblue", hex: "#add8e6"},
  {name: "skyblue", hex: "#87ceeb"},
  {name: "lightskyblue", hex: "#87cefa"},
  {name: "deepskyblue", hex: "#00bfff"},
  {name: "dodgerblue", hex: "#1e90ff"},
  {name: "cornflowerblue", hex: "#6495ed"},
  {name: "mediumslateblue", hex: "#7b68ee"},
  {name: "royalblue", hex: "#4169e1"},
  {name: "blue", hex: "#0000ff"},
  {name: "mediumblue", hex: "#0000cd"},
  {name: "darkblue", hex: "#00008b"},
  {name: "navy", hex: "#000080"},
  {name: "midnightblue", hex: "#191970"},

  // Brown
  {name: "cornsilk", hex: "#fff8dc"},
  {name: "blanchedalmond", hex: "#ffebcd"},
  {name: "bisque", hex: "#ffe4c4"},
  {name: "navajowhite", hex: "#ffdead"},
  {name: "wheat", hex: "#f5deb3"},
  {name: "burlywood", hex: "#deb887"},
  {name: "tan", hex: "#d2b48c"},
  {name: "rosybrown", hex: "#bc8f8f"},
  {name: "sandybrown", hex: "#f4a460"},
  {name: "goldenrod", hex: "#daa520"},
  {name: "darkgoldenrod", hex: "#b8860b"},
  {name: "peru", hex: "#cd853f"},
  {name: "chocolate", hex: "#d2691e"},
  {name: "saddlebrown", hex: "#8b4513"},
  {name: "sienna", hex: "#a0522d"},
  {name: "brown", hex: "#a52a2a"},
  {name: "maroon", hex: "#800000"},

  // White
  {name: "white", hex: "#ffffff"},
  {name: "snow", hex: "#fffafa"},
  {name: "honeydew", hex: "#f0fff0"},
  {name: "mintcream", hex: "#f5fffa"},
  {name: "azure", hex: "#f0ffff"},
  {name: "aliceblue", hex: "#f0f8ff"},
  {name: "ghostwhite", hex: "#f8f8ff"},
  {name: "whitesmoke", hex: "#f5f5f5"},
  {name: "seashell", hex: "#fff5ee"},
  {name: "beige", hex: "#f5f5dc"},
  {name: "oldlace", hex: "#fdf5e6"},
  {name: "floralwhite", hex: "#fffaf0"},
  {name: "ivory", hex: "#fffff0"},
  {name: "antiquewhite", hex: "#faebd7"},
  {name: "linen", hex: "#faf0e6"},
  {name: "lavenderblush", hex: "#fff0f5"},
  {name: "mistyrose", hex: "#ffe4e1"},

  // Gray
  {name: "gainsboro", hex: "#dcdcdc"},
  {name: "lightgray", hex: "#d3d3d3"},
  {name: "silver", hex: "#c0c0c0"},
  {name: "darkgray", hex: "#a9a9a9"},
  {name: "gray", hex: "#808080"},
  {name: "dimgray", hex: "#696969"},
  {name: "lightslategray", hex: "#778899"},
  {name: "slategray", hex: "#708090"},
  {name: "darkslategray", hex: "#2f4f4f"},
  {name: "black", hex: "#000000"},

  // GrEy - #BecauseEnglish
  {name: "darkgrey", hex: "#a9a9a9"},
  {name: "darkslategrey", hex: "#2f4f4f"},
  {name: "dimgrey", hex: "#696969"},
  {name: "grey", hex: "#808080"},
  {name: "lightgrey", hex: "#d3d3d3"},
  {name: "lightslategrey", hex: "#778899"},
  {name: "slategrey", hex: "#708090"},
];

export default namedColors;
