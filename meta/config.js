module.exports = {
  siteTitle: "Kittenbot -- Robot Maker", // <title>
  shortSiteTitle: "Kittenbot -- Robot Maker", // <title> ending for posts and pages
  siteDescription: "Kittenbot provide robot for stem education.",
  siteUrl: "https://www.kittenbot.cn",
  // pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",

  /* author */
  authorName: "Kittenbot Team",
  authorTwitterAccount: "Kittenbot1",
  herotitle: "Welcome to Kittenbot's Lab",

  /* info */
  headerTitle: "Kittenbot~",
  /* headerSubTitle: "presents another one GatsbyJS starter", */

  /* manifest.json */
  manifestName: "Kittenbot - Robot Maker",
  manifestShortName: "Kittenbot", // max 12 characters
  manifestStartUrl: "/index.html",
  manifestBackgroundColor: "white",
  manifestThemeColor: "#666",
  manifestDisplay: "standalone",

  /* multilanguage support */
  blogTitle: "News from kittenbot",
  conntactUs: "Conntact Us",
  productTitle: "Products",

  // gravatar
  // Use your Gravatar image. If empty then will use src/images/jpg/avatar.jpg
  // Replace your email adress with md5-code.
  // Example https://www.gravatar.com/avatar/g.strainovic@gmail.com ->
  // gravatarImgMd5: "https://www.gravatar.com/avatar/1db853e4df386e8f699e4b35505dd8c6",
  gravatarImgMd5: "",

  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/kittenbot" },
    { name: "twitter", url: "https://twitter.com/kittenbot1" },
    { name: "facebook", url: "http://facebook.com/kittenbotcc" }
  ],
  menu: {
    blog: { to: "/blogs/", label: "Blog" },
    products: { to: "/products/", label: "Product" },
    bbs: { to: "http://forum.kittenbot.cc/", label: "Forum" },
    contact: { to: "/contact/", label: "Contact" }
  }
};
