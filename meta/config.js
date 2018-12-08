module.exports = {
  siteTitle: "Kittenbot -- Robot Maker", // <title>
  shortSiteTitle: "Kittenbot -- Robot Maker", // <title> ending for posts and pages
  siteDescription: "Kittenbot provide robot for stem education.",
  siteUrl: "https://www.kittenbot.cn",
  // pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "zh",

  /* author */
  authorName: "Kittenbot Team",
  authorTwitterAccount: "Kittenbot1",

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

  // top menu
  menu: {
    blog: { to: "/blogs/", label: "Blog" },
    products: { to: "/products/", label: "产品" },
    bbs: { to: "http://kittenbot.cn/bbs/index.php", label: "论坛" },
    contact: { to: "/contact/", label: "联系我们" }
  }
};
