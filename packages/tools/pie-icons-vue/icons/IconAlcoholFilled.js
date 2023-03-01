import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlcoholFilled',
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
            class: 'c-pieIcon c-pieIcon--alcoholFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.396 5.28V2.576c0-.419-.17-.82-.47-1.115A1.623 1.623 0 004.788 1h-.68c-.426 0-.834.166-1.136.462-.301.295-.47.696-.47 1.115v2.702a2.111 2.111 0 01-.533 1.424 4.668 4.668 0 00-.964 3.08v3.604c-.015.401.132.792.409 1.087.277.295.66.471 1.07.49h3.93a1.565 1.565 0 001.069-.49c.277-.295.424-.686.409-1.087V9.784a4.613 4.613 0 00-.918-3.054 2.113 2.113 0 01-.579-1.45zM5.02 5.026v.252c-.008.797.268 1.571.78 2.19.161.225.302.463.423.711H2.677c.124-.248.268-.487.432-.712A3.427 3.427 0 003.88 5.28v-.225l1.139-.027z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.6 3.081v4c0 .713.249 1.405.705 1.96a3.196 3.196 0 001.802 1.094v3.514h-1.46V15h4.297v-1.351h-1.46v-3.514a3.205 3.205 0 001.806-1.093 3.098 3.098 0 00.71-1.96v-4H8.6z',
                fill: '#242E30',
            },
        })]);
    },
};
