import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCameraLarge',
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
            class: 'c-pieIcon c-pieIcon--cameraLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 9.875a6.125 6.125 0 100 12.25 6.125 6.125 0 000-12.25zm0 10.5a4.375 4.375 0 110-8.75 4.375 4.375 0 010 8.75zM27.13 8.571a48.657 48.657 0 00-4.839-.875L21.25 5.343a2.625 2.625 0 00-2.371-1.593H13.12a2.625 2.625 0 00-2.371 1.593L9.709 7.67c-1.618.21-3.224.502-4.813.875a2.625 2.625 0 00-2.021 2.581v12.749A2.625 2.625 0 005.5 26.5h21a2.625 2.625 0 002.625-2.625V11.126a2.625 2.625 0 00-1.995-2.555zm.245 15.304a.875.875 0 01-.875.875h-21a.875.875 0 01-.875-.875V11.126a.875.875 0 01.674-.875 47.237 47.237 0 015.127-.91l.499-.061 1.391-3.246a.875.875 0 01.805-.534h5.758a.875.875 0 01.805.534l1.391 3.246.499.061c1.73.214 3.448.524 5.145.928a.875.875 0 01.656.875v12.731z',
                fill: '#242E30',
            },
        })]);
    },
};
