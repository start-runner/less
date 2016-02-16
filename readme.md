# start-less

[![npm](https://img.shields.io/npm/v/start-less.svg?style=flat-square)](https://www.npmjs.com/package/start-less)
[![linux build](https://img.shields.io/travis/start-runner/less.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/less)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/less.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/less)
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
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import less from 'start-less';
import rename from 'start-rename';
import write from 'start-write';

export function build() {
    return start(reporter())(
        files('build/'),
        clean(),
        files('lib/**/*.less'),
        read(),
        less({ sourceMap: true }),
        rename(file => file.replace(/\.less$/, '.css')),
        write('build/')
    );
}
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`less(options)`

* `options` – [Less options](http://lesscss.org/usage/#using-less-in-the-browser-options)
