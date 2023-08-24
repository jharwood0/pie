import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import { PieCookieBanner, CookieBannerProps } from '@justeattakeaway/pie-cookie-banner';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';

import { type StoryMeta } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [
    PieCookieBanner,
    PieButton,
    PieLink
];

type CookieBannerStoryMeta = StoryMeta<CookieBannerProps>;

const defaultArgs: CookieBannerProps = {

};

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Cookie Banner',
    component: 'pie-cookie-banner',
    argTypes: {

    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default cookieBannerStoryMeta;

const BaseStoryTemplate = (props: CookieBannerProps) : TemplateResult => html`
        <pie-cookie-banner></pie-cookie-banner>`;

/**
 * Creates a 'page' of scrollable HTML. Useful for testing scroll behaviours in a Story.
 */
const createScrollablePageHTML = () : TemplateResult => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p>Test copy</p>
        <ul>${items}</ul>`;
};

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ }: CookieBannerProps): TemplateResult => html`
    <pie-cookie-banner></pie-cookie-banner>
`;

export const Default: Story<CookieBannerProps> = (args: CookieBannerProps) => Template(args);
Default.args = {
    ...defaultArgs,
};

const ScrollablePageStoryTemplate = (props: CookieBannerProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createScrollablePageHTML()}`;

export const ScrollablePage: Story<CookieBannerProps> = (args: CookieBannerProps) => ScrollablePageStoryTemplate(args);
ScrollablePage.args = defaultArgs;
