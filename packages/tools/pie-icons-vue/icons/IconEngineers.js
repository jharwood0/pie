import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEngineers',
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
            class: 'c-pieIcon c-pieIcon--engineers',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.023 9.286V3.581c0-.91-.744-1.654-1.654-1.654H4.64c-.91 0-1.654.744-1.654 1.654v5.705l-1.776 1.68v1.094c0 .91.744 1.654 1.654 1.654h10.264c.91 0 1.653-.744 1.653-1.654v-1.094l-1.767-1.68h.009zM4.64 3.231h6.729c.192 0 .341.158.341.341V8.91H4.29V3.581c0-.192.157-.341.341-.341l.009-.009zm8.837 8.82a.342.342 0 01-.34.341H2.871a.342.342 0 01-.34-.34v-.526l1.373-1.303h8.199l1.373 1.303v.525z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M6.722 6.469l-.463-.464.463-.473-.612-.612-1.076 1.085L6.11 7.081l.612-.612z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M9.741 6.005l-.464.464.613.612 1.076-1.076L9.89 4.92l-.613.612.464.473z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M6.644 7.641h.988l1.645-3.054h-.98L6.644 7.641z',
                fill: '#242E30',
            },
        })]);
    },
};
