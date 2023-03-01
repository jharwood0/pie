import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOfferLarge',
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
            class: 'c-pieIcon c-pieIcon--offerLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 5.211c.113-.169.242-.327.385-.472a3.369 3.369 0 014.76 0l1.242-1.234a5.136 5.136 0 00-7.245 0c-.43.44-.78.953-1.032 1.514l-4.156-.394a2.31 2.31 0 00-1.83.656L2.692 16.796l11.944 13.125 12.092-12.127a2.336 2.336 0 00.648-1.873L26.369 5.64l-4.244-.429zm3.377 11.375L14.696 27.375l-9.625-10.5L15.44 6.515a.586.586 0 01.472-.14l3.877.385a5.25 5.25 0 00.472 2.573A1.75 1.75 0 1023 10.75a1.75 1.75 0 00-.516-1.242 3.35 3.35 0 01-.972-2.625l3.238.367.875 8.864a.577.577 0 01-.14.446l.017.026z',
                fill: '#242E30',
            },
        })]);
    },
};
