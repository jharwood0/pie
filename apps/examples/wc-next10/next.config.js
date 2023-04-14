const transpileModules = [
    '@justeattakeaway/pie-button',
    '@lit-labs/react',
    'lit'
];

const withTM = require('next-transpile-modules')(transpileModules);

module.exports = withTM();
