const defaultOptions = {
    relativeUrls: true,
    compress: false
};

export default (userOptions) => (input) => {
    return function less(log) {
        const path = require('path');
        const Less = require('less');

        return Promise.all(
            input.map(file => {
                const options = {
                    ...defaultOptions,
                    ...userOptions,
                    filename: file.path
                };

                if (options.sourceMap) {
                    options.sourceMap = {
                        outputSourceFiles: true,
                        ...options.sourceMap,
                        sourceMapBasepath: path.dirname(file.path)
                    };
                }

                return Less.render(file.data, options).then(result => {
                    let sourceMap = null;

                    log(file.path);

                    if (typeof result.map !== 'undefined') {
                        sourceMap = JSON.parse(result.map);
                    }

                    return {
                        path: file.path,
                        data: result.css,
                        map: sourceMap
                    };
                });
            })
        );
    };
};
