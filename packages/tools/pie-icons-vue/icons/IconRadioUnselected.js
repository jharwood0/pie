import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRadioUnselected',
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
            class: 'c-pieIcon c-pieIcon--radioUnselected',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781zm0 12.25A5.47 5.47 0 012.531 8 5.47 5.47 0 018 2.531 5.47 5.47 0 0113.469 8 5.47 5.47 0 018 13.469z',
                fill: '#242E30',
            },
        })]);
    },
};
