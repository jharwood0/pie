import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBulbLightning',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--bulbLightning',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.162 13.469H5.838l.35 1.312h3.622l.35-1.312z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M5.375 10.117l.35 2.04h4.611l.29-2.048c.07-.393.267-.752.56-1.024a4.523 4.523 0 001.408-3.273 4.594 4.594 0 00-9.126-.76A4.533 4.533 0 004.77 9.067c.306.278.517.645.604 1.05zm-.612-4.856a3.281 3.281 0 016.518.551 3.239 3.239 0 01-.988 2.337c-.49.47-.821 1.082-.945 1.75l-.158.954H6.801l-.148-.945a3.238 3.238 0 00-.963-1.75 3.281 3.281 0 01-.927-2.897z',
                fill: '#242E30',
            },
        })]);
    },
};
