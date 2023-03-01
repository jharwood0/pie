import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTrashFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--trashFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.938 4.625h-7.875l-.876 1.75h9.626l-.875-1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M3.75 8.125v1.75h2.319l1.601 16.87a2.625 2.625 0 002.625 2.38h11.428a2.624 2.624 0 002.625-2.38l1.583-16.87h2.319v-1.75H3.75zm8.461 6.125h1.75l.63 7.875h-1.75l-.63-7.875zm6.948 7.875h-1.75l.63-7.875h1.75l-.63 7.875z',
                fill: '#242E30',
            },
        })]);
    },
};
