
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import {
    variants, sizes, iconPlacements, tags, underlineTypes,
} from '@/defs';
import { PieLink } from '@/index';

const props: PropObject = {
    tag: tags,
    variant: variants,
    size: sizes,
    underline: underlineTypes,
    href: 'pie.design',
    isBold: [true, false],
    isStandalone: [true, false],
    hasVisited: [true, false],
    iconPlacement: [undefined, ...iconPlacements],
};

const icon = '<svg slot="icon" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';

const renderTestPieLink = (propVals: WebComponentPropValues) => `<pie-link tag="${propVals.tag}" variant="${propVals.variant}" size="${propVals.size}" underline="${propVals.underline}" iconPlacement="${propVals.iconPlacement}" href="${propVals.href}" ${propVals.isBold ? 'isBold' : ''} ${propVals.hasVisited ? 'hasVisited' : ''} ${propVals.isStandalone ? 'isStandalone' : ''}>${propVals.iconPlacement ? icon : ''} Link</pie-link>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ page, mount }) => {
    await mount(PieLink, {});
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-link');
        element?.remove();
    });
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieLink);
        const propKeyValues = `tag: ${testComponent.propValues.tag}, size: ${testComponent.propValues.size}, iconPlacement: ${testComponent.propValues.iconPlacement}, isBold: ${testComponent.propValues.isBold}, isStandalone: ${testComponent.propValues.isStandalone}, href: ${testComponent.propValues.href}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode: variant === 'inverse' },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Link - Variant: ${variant}`);
}));
