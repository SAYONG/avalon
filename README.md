# Avalonia

## Development

### Prerequisites

- [NodeJS](https://nodejs.org/en/) version >= 8.0.0
- [Yarn package manager](https://yarnpkg.com/en/)

### Install dependencies
```base
yarn install
```

### Available scripts
You can run these scripts by:
```
yarn <script>
```

#### start
```
yarn start
```
Build development assets, start local development server, open the browser
and watch `css` and `js` change.

### build
```
yarn build
```
Build production assets, put them in the `/build` directory. These build is optimized using [Webpack](https://webpack.github.io/).

### test
```
yarn test
```
Run unit tests in `watch` mode.

### coverage
```
yarn coverage
```
Run unit tests and display the test coverage results.
