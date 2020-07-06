const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
  build: path.join(__dirname, "build")
};

const pages = ["home", "actionA", "actionB", "animalA", "animalB", "clothes", "emotions", "professions", "sport", "statistic"];

const generateHtml = (page) => new HtmlWebpackPlugin({
  filename: `${page}.html`,
  chunks: [page]
});

const generateEntryPoints = () => {
  const entryPoints = {};
  pages.forEach((page) => {
    entryPoints[page] = `${PATHS.src}/pages/${page}/${page}.js`;
  });
  return entryPoints;
};

const generatePages = () => pages.map((page) => generateHtml(page));

module.exports = {
  entry: {
    ...generateEntryPoints(),
  },
  output: {
    path: PATHS.build,
    filename: "./js/[name].js"
  },
  plugins: [
    ...generatePages()
  ],
  devServer: {
    contentBase: "./build",
    before: (app) => {
      app.get("/", (req, res) => {
        res.redirect("/home.html");
      });
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|mp3|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
