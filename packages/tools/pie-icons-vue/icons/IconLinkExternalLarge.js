import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLinkExternalLarge',
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
            class: 'c-pieIcon c-pieIcon--linkExternalLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 6.734v5.889h1.75V5.5a1.529 1.529 0 000-.35 1.75 1.75 0 00-1.4-1.4 1.532 1.532 0 00-.35 0h-7.122V5.5h5.888l-9.625 9.625-1.864 1.855 1.243 1.242 1.855-1.846L26.5 6.734z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M24.872 15.598v6.124a3.911 3.911 0 01-3.902 3.903H10.269a3.911 3.911 0 01-3.894-3.894V11.03a3.911 3.911 0 013.894-3.902h6.125v-1.75h-6.125a5.696 5.696 0 00-5.644 5.652v10.701a5.687 5.687 0 005.688 5.688H20.97a5.696 5.696 0 005.688-5.688v-6.125l-1.786-.008z',
                fill: '#242E30',
            },
        })]);
    },
};
