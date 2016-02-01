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
import clean from 'start-clean';
import files from 'start-files';
import less from 'start-less';
import write from 'start-write';

export function build() {
    return start(logger)(
        files('build/'),
        clean(),
        files('lib/**/*.less'),
        less(),
        write('build/', '.css')
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

`less(options)`

* `options` – [Less options](http://lesscss.org/usage/#using-less-in-the-browser-options)
