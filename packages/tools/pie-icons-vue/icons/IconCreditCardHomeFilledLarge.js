import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardHomeFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--creditCardHomeFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.625 20.375V26.5h-5.25V12.797a130.828 130.828 0 00-2.249 2.083L2.92 13.62c.288-.245 7.227-6.939 11.602-9.494.39-.216.824-.345 1.269-.376H16.122c.467.01.925.126 1.34.341 4.374 2.573 11.374 9.231 11.62 9.511l-1.208 1.26s-.928-.874-2.249-2.082v4.095h-10.5a3.5 3.5 0 00-3.5 3.5zM13.375 23H28.25v3.5a1.75 1.75 0 01-1.75 1.75H15.125a1.75 1.75 0 01-1.75-1.75V23zM16 26.5h2.625v-1.75H16v1.75zm10.5-7.875H15.125a1.75 1.75 0 00-1.75 1.75v.875H28.25v-.875a1.75 1.75 0 00-1.75-1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
