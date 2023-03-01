import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOver16Filled',
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
            class: 'c-pieIcon c-pieIcon--over16Filled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.29 7.987c.087-.03.18-.04.273-.03a.652.652 0 01.717.677.665.665 0 01-.717.679.665.665 0 01-.718-.692.652.652 0 01.445-.634z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M3.625 2.313h8.75a1.313 1.313 0 011.313 1.312v8.75a1.313 1.313 0 01-1.313 1.313h-8.75a1.313 1.313 0 01-1.313-1.313v-8.75a1.313 1.313 0 011.313-1.313zm.595 7.634h.831V5.813h-.595l-1.199.538.28.704.683-.254v3.146zm1.754-1.969c0 1.365.626 2.043 1.61 2.043a1.43 1.43 0 001.527-1.435 1.313 1.313 0 00-1.37-1.334 1.111 1.111 0 00-.935.407c0-.713.34-1.15.875-1.15a1.024 1.024 0 01.756.318l.526-.577a1.597 1.597 0 00-1.278-.512c-.94 0-1.71.726-1.71 2.24zm5.526.46h.875v-.876H11.5v-.875h-.875v.875H9.75v.875h.875v.876h.875v-.876z',
                fill: '#242E30',
            },
        })]);
    },
};
