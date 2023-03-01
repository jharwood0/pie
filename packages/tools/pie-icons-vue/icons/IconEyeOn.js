import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEyeOn',
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
            class: 'c-pieIcon c-pieIcon--eyeOn',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.016 4.789a5.338 5.338 0 00-8.032 0L1.06 8l2.923 3.211a5.337 5.337 0 008.032 0l2.923-3.21-2.923-3.212zm-.971 5.539a4.025 4.025 0 01-6.125 0L2.838 8l2.117-2.327a4.025 4.025 0 016.125 0L13.162 8l-2.117 2.328zM6.303 6.303a2.406 2.406 0 103.395 0 2.38 2.38 0 00-3.395 0zM8.77 8.77a1.085 1.085 0 01-1.54 0 1.094 1.094 0 111.54 0z',
                fill: '#242E30',
            },
        })]);
    },
};
