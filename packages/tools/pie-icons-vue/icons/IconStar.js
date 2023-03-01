import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStar',
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
            class: 'c-pieIcon c-pieIcon--star',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.288 14.449l-4.183-2.197a.219.219 0 00-.21 0L3.713 14.45 4.5 9.794a.254.254 0 000-.193L1.07 6.302l4.673-.682a.228.228 0 00.166-.114L8 1.271l2.091 4.235a.227.227 0 00.167.114l4.672.682-3.386 3.3a.254.254 0 00-.061.192l.805 4.655zm-8.4-7.228l1.487 1.435a1.54 1.54 0 01.438 1.356l-.35 2.04 1.828-.963a1.505 1.505 0 011.418 0l1.829.962-.35-2.039a1.539 1.539 0 01.437-1.356l1.488-1.435-2.048-.297a1.531 1.531 0 01-1.19-.84L8 4.229l-.875 1.855a1.531 1.531 0 01-1.155.875l-2.082.262z',
                fill: '#242E30',
            },
        })]);
    },
};
