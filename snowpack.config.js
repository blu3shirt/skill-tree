// snowpack.config.js
module.exports = {
  mount: {
    // serve everything in src/ at the site root
    src: { url: '/' },
  },
  buildOptions: {
    // output your production files here
    out: 'docs',
    // if your GitHub Pages site is under a sub-path, set baseUrl
    // baseUrl: '/skill-tree',
  },
  // add plugins here if you need transforms (e.g. JSX, TypeScript)
  plugins: [],
};
