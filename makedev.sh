git init

yarn init -y

yarn add  -D webpack webpack-cli webpack-dev-server html-loader html-webpack-plugin@next
yarn add  -D webpack-merge

yarn add  -D css-loader style-loader

yarn add -D eslint prettier eslint-config-prettier
yarn add -D typescript ts-loader ts-node-dev nodemon concurrently @typescript-eslint/{parser,eslint-plugin}

yarn add -D hard-source-webpack-plugin clean-webpack-plugin

yarn add  axios
yarn add  @types/axios

yarn add  express @types/express

yarn add   @types/node

yarn add -D ts-node


mkdir dist_client
mkdir dist_server
yarn run tsc --init

gibo dump macos linux windows node > .gitignore