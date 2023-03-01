import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialPinterestCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--pinterestCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm0 22.75a10.344 10.344 0 01-3.141-.481 8.646 8.646 0 001.233-2.538c.22-.761.403-1.531.604-2.292 0-.07.044-.131.079-.245.066.106.142.206.227.297.073.083.152.159.237.228a3.5 3.5 0 002.8.691 5.407 5.407 0 003.937-2.625 7.875 7.875 0 001.199-3.999 6.38 6.38 0 00-4.296-6.378 8.26 8.26 0 00-3.885-.377 7 7 0 00-4.638 2.389 6.431 6.431 0 00-.822 7.088 3.63 3.63 0 001.54 1.6c.245.123.341.08.411-.174.096-.394.21-.788.28-1.19a.57.57 0 00-.079-.394 4.707 4.707 0 01.998-6.335 5.25 5.25 0 014.734-.875 4.131 4.131 0 012.773 2.284c.366.793.52 1.667.447 2.537a6.264 6.264 0 01-.963 3.203 3.055 3.055 0 01-2.485 1.461 1.627 1.627 0 01-1.706-2.126c.201-.761.437-1.514.647-2.266a4.683 4.683 0 00.236-1.628 1.4 1.4 0 00-1.977-1.234 2.133 2.133 0 00-1.242 1.374 3.981 3.981 0 000 2.721c.034.147.034.3 0 .447-.42 1.75-.875 3.587-1.26 5.38a8.698 8.698 0 00-.044 2.582A10.5 10.5 0 1116 26.5z',
                fill: '#242E30',
            },
        })]);
    },
};
