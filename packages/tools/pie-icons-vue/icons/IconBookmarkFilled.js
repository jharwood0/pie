import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBookmarkFilled',
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
            class: 'c-pieIcon c-pieIcon--bookmarkFilled',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7724_3886)',
            },
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M3.835 1.84h8.321c1.085 0 1.969.884 1.969 1.969v10.57L8 11.465l-6.134 2.914V3.809c0-1.085.884-1.969 1.969-1.969zM8 4.491l.709 1.453 1.592.227L9.155 7.3l.271 1.584L8 8.13l-1.426.753.28-1.584-1.155-1.129 1.592-.227L8 4.49z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7724_3886',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
