import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKosherLarge',
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
            class: 'c-pieIcon c-pieIcon--kosherLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.63 16.105l3.841-6.554H19.85L16 2.875l-3.85 6.676H4.529l3.841 6.554-3.745 6.449h7.508L16 29.125l3.841-6.554h7.534l-3.745-6.466zm.788-4.804l-1.794 3.054-1.75-3.054h3.544zM21.6 16.096l-2.756 4.708h-5.688L10.4 16.096l2.756-4.795h5.688l2.756 4.795zM16 6.375l1.829 3.176H14.17L16 6.375zm-8.418 4.926h3.553l-1.75 3.054-1.803-3.054zm.097 9.503l1.75-2.966 1.75 2.966h-3.5zM16 25.625l-1.811-3.089h3.622L16 25.625zm6.606-7.805l1.75 2.966h-3.482l1.732-2.966z',
                fill: '#242E30',
            },
        })]);
    },
};
