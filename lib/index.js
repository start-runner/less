const defaultOptions = {
    relativeUrls: true,
    compress: false
};

export default (userOptions) => (input) => {
    return function less(log) {
        const Less = require('less');

        return Promise.all(
            input.map(file => {
                const options = {
                    ...defaultOptions,
                    ...userOptions,
                    filename: file.path
                };

                return Less.render(file.data, options).then(result => {
                    log(file.path);

                    return {
                        path: file.path,
                        data: result.css,
                        map: typeof result.map === 'undefined' ? null : result.map
                    };
                });
            })
        );
    };
};
