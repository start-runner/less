const defaultOptions = {
    relativeUrls: true,
    compress: false
};

export default (userOptions) => (input) => {
    return function less(log) {
        const lessTransform = require('less').render;
        const pify = require('pify');
        const readFile = pify(require('fs').readFile);

        return Promise.all(
            input.map(file => {
                const options = {
                    ...defaultOptions,
                    ...userOptions,
                    filename: file
                };

                return readFile(file, 'utf-8')
                    .then(data => {
                        return lessTransform(data, options);
                    })
                    .then(result => {
                        log(file);

                        return {
                            path: file,
                            data: result.css
                        };
                    });
            })
        );
    };
};
