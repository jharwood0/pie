import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPizza',
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
            class: 'c-pieIcon c-pieIcon--pizza',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.924 4.99C13.1 3.704 10.625.764 5.253 1.087a1.496 1.496 0 00-1.41 1.497V15l9.774-8.041a1.496 1.496 0 00.307-1.969zm-8.75 4.83a1.12 1.12 0 00.875-.324 1.146 1.146 0 000-1.619 1.164 1.164 0 00-.875-.332V4.622a7.114 7.114 0 015.941 2.704l-5.959 4.856.018-2.362zm7.63-3.876l-.674.551a8.478 8.478 0 00-6.974-3.176v-.735a.192.192 0 01.219-.193h.718c4.156 0 6.124 2.293 6.772 3.325a.193.193 0 01-.079.228h.018zm-3.5 1.12a1.006 1.006 0 11-.98-1.007A1.006 1.006 0 019.33 7.064h-.026z',
                fill: '#242E30',
            },
        })]);
    },
};
