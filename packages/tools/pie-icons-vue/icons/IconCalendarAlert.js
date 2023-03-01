import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarAlert',
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
            class: 'c-pieIcon c-pieIcon--calendarAlert',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.273 2.842V1.75h-1.31v1.09H6.037v-1.09H4.727v1.09H2.109v10.91H10.6a3.273 3.273 0 003.273-3.272V2.842h-2.6zm1.31 7.637a1.964 1.964 0 01-1.982 1.964H3.418V4.15h1.309v1.09h1.31v-1.09h3.927v1.09h1.31v-1.09h1.308v6.328z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.655 6.263h-1.31v2.619h1.31V6.263z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8 11.5a.873.873 0 100-1.746.873.873 0 000 1.746z',
                fill: '#242E30',
            },
        })]);
    },
};
