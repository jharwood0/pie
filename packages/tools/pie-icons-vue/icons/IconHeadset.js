import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHeadset',
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
            class: 'c-pieIcon c-pieIcon--headset',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.219 1.875A5.404 5.404 0 002.75 7.206v5a2.228 2.228 0 002.228 2.227h4.05v-1.215h-4.05a1.013 1.013 0 01-1.013-1.013v-.227a.808.808 0 00.203 0h.81a1.426 1.426 0 001.418-1.393v-1.62a1.426 1.426 0 00-1.418-1.418H3.965v-.34A4.197 4.197 0 018.22 3.09a4.197 4.197 0 014.253 4.115v.34H11.46a1.426 1.426 0 00-1.418 1.419v1.62a1.426 1.426 0 001.418 1.418h.81a1.426 1.426 0 001.418-1.418V7.206a5.404 5.404 0 00-5.47-5.33zM4.978 8.762a.203.203 0 01.203.203v1.62a.203.203 0 01-.203.202h-.81a.202.202 0 01-.203-.202V8.762h1.013zm7.494 1.823a.202.202 0 01-.202.202h-.81a.202.202 0 01-.203-.202v-1.62a.203.203 0 01.203-.203h1.012v1.823z',
                fill: '#242E30',
            },
        })]);
    },
};
