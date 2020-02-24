export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.8mxf1ZMY6of.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.8mxf1ZMY6of.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.8mxf1ZMY6of.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.8mxf1ZMY6of.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.8mxf1ZMY6of.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.8mxf1ZMY6of.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.8mxf1ZMY6of.png"},"iconSrc":null,"iconFileName":"icon.png","sizes":[64,120,144,152,192,384,512],"targetDir":"icons"}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
