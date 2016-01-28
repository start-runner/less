const defaultOptions = {
    relativeUrls: true,
    compress: false
};

export default function(patterns, outRootDir, options = defaultOptions) {
    return function lessBuild(resolve, reject) {
        process.env.NODE_ENV = 'production';

        const fs = require('fs');
        const path = require('path');
        const globby = require('globby');
        const pify = require('pify');
        const makeDir = pify(require('mkdirp'));
        const less = require('less');
        const writeFile = pify(fs.writeFile);
        const readFile = pify(fs.readFile);

        globby(patterns, { realpath: true }).then(function(files) {
            return Promise.all(
                files.map(function(inFile) {
                    // /root/src/beep/index.less -> src/beep/index.less
                    const relativeInDir = path.relative(process.cwd(), inFile);
                    // src/beep/index.less -> beep/index.less
                    const relativeInFile = relativeInDir.split(path.sep).slice(1).join(path.sep);
                    // beep/index.less -> build/beep/index.less
                    const outFileLess = path.resolve(outRootDir, relativeInFile);
                    // build/beep/index.less -> build/beep
                    const outDir = path.dirname(outFileLess);
                    // build/beep/index.less -> index
                    const outFileName = path.basename(outFileLess, '.less');
                    // build/beep/index.less -> build/beep/index.css
                    const outFile = path.resolve(outDir, outFileName) + '.css';

                    return makeDir(outDir)
                        .then(function() {
                            return readFile(inFile, 'utf-8');
                        })
                        .then(function(inFileSource) {
                            return less.render(inFileSource, { ...options, filename: inFile });
                        })
                        .then(function(result) {
                            return writeFile(outFile, result.css, 'utf-8');
                        })
                        .then(function() {
                            return outFile;
                        });
                })
            );
        })
        .then(resolve)
        .catch(reject);
    };
}
