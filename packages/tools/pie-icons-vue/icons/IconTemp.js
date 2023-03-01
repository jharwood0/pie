import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTemp',
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
            class: 'c-pieIcon c-pieIcon--temp',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.992 8V4.124A2.957 2.957 0 008 1.219a2.958 2.958 0 00-2.992 2.905V8a3.964 3.964 0 00-1.164 2.783A4.104 4.104 0 008 14.78a4.104 4.104 0 004.156-4.034A3.963 3.963 0 0010.992 8zM8 13.469a2.78 2.78 0 01-2.844-2.721 2.625 2.625 0 01.937-2.004l.227-.193V4.124A1.645 1.645 0 018 2.53a1.645 1.645 0 011.68 1.593V8.55l.228.193a2.626 2.626 0 01.936 2.004A2.784 2.784 0 018 13.468zm1.313-2.406a1.312 1.312 0 11-1.97-1.13V6.25h1.313v3.684a1.304 1.304 0 01.656 1.129z',
                fill: '#242E30',
            },
        })]);
    },
};
