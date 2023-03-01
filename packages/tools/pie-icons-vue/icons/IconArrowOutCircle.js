import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowOutCircle',
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
            class: 'c-pieIcon c-pieIcon--arrowOutCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.046 7.169L11.334 4.5l-.928.875 1.899 1.899H5.139v1.312h7.166l-1.899 1.908.928.927 2.712-2.712a1.111 1.111 0 000-1.54z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.149 13.408a5.469 5.469 0 010-10.938 5.25 5.25 0 012.87.875h2.056a6.695 6.695 0 00-4.926-2.188 6.781 6.781 0 100 13.563 6.659 6.659 0 004.926-2.188h-2.056a5.25 5.25 0 01-2.87.876z',
                fill: '#242E30',
            },
        })]);
    },
};
