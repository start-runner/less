[![npm](https://img.shields.io/npm/v/start-less.svg?style=flat-square)](https://www.npmjs.com/package/start-less)
[![travis](http://img.shields.io/travis/start-runner/less.svg?style=flat-square)](https://travis-ci.org/start-runner/less)
[![deps](https://img.shields.io/gemnasium/start-runner/less.svg?style=flat-square)](https://gemnasium.com/start-runner/less)

Less build task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-less
```

## Usage

```js
// tasks/index.js
import start from 'start';
import logger from 'start-simple-logger';
import less from 'start-less';

export function build() {
    return start(logger)(
        ...
        less('src/**/*.less', 'build/')
        ...
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "build": "npm run task build"
}
```

## Arguments

`less(patterns, outDir, options)`

* `patterns` – [globby patterns](https://github.com/sindresorhus/globby)
* `outDir` – output directory, like `build/`
* `options` – [Less options](http://lesscss.org/usage/#using-less-in-the-browser-options)
