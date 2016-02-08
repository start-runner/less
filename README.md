# start-less

[![npm](https://img.shields.io/npm/v/start-less.svg?style=flat-square)](https://www.npmjs.com/package/start-less)
[![travis](http://img.shields.io/travis/start-runner/less.svg?style=flat-square)](https://travis-ci.org/start-runner/less)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/less.svg?style=flat-square)](https://codecov.io/github/start-runner/less)
[![deps](https://img.shields.io/gemnasium/start-runner/less.svg?style=flat-square)](https://gemnasium.com/start-runner/less)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[Less](http://lesscss.org/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-less
```

## Usage

```js
import start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import clean from 'start-clean';
import less from 'start-less';
import write from 'start-write';

export function build() {
    return start(logger())(
        files('build/'),
        clean(),
        files('lib/**/*.less'),
        less(),
        write('build/', '.css')
    );
}
```

Task is rely on array of files and provides `[{ path, data }]` output, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`less(options)`

* `options` – [Less options](http://lesscss.org/usage/#using-less-in-the-browser-options)
