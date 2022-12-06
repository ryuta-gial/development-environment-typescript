const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const outputPath = path.resolve(__dirname, "dist_client");

module.exports = {
    mode: "development", //webpack4以降はモード指定しなければいけない
    devtool: "source-map",
    //context: path.join(__dirname, "src"),
    entry: {
        main: "./src/index.ts",
        //'client/Client': './src/client/Client.tsx',
        // 'server/Server': './src/server/Server.tsx',
    },
    output: {
        path: outputPath,
        // [name]はentryで記述した名前
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
                // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
                loader: "ts-loader",
                test: /\.ts$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    // import文でファイル拡張子を書かずに名前解決するための設定
    // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
    resolve: {
        // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
        extensions: [".ts", ".js"],
    },
    //webpack-dev-server用設定
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist_client", "html"),
            watch: true, //コンテンツの変更監視をする
        },
      //  host: "localhost",
      //  port: 4000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            // 対象のテンプレートを設定
            template: "./src/index.html",
            // 書き出し先
            filename: "index.html",
            //filename: "main/index.html",
            // chunks: ['main/Main'],
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["build"],
        }),
    ],
};
