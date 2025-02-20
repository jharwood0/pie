import { html, nothing } from 'lit';
import { PieToggleSwitch, ToggleSwitchProps, labelPlacements } from '@justeattakeaway/pie-toggle-switch';
import { IconCheck } from '@justeattakeaway/pie-icons-webc';
import { StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [
    IconCheck,
    PieToggleSwitch,
];

type ToggleSwitchStoryMeta = StoryMeta<ToggleSwitchProps>;

const defaultArgs: ToggleSwitchProps = {
    isChecked: false,
    isDisabled: false,
    label: 'Label',
    labelPlacement: 'leading',
    aria: {
        label: 'toggle switch label',
        describedBy: 'toggle switch description',
    },
};

const toggleSwitchStoryMeta: ToggleSwitchStoryMeta = {
    title: 'Toggle Switch',
    component: 'pie-toggle-switch',
    argTypes: {
        isChecked: {
            description: 'Same as the HTML checked attribute - indicates whether the switch is on or off',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isDisabled: {
            description: 'Same as the HTML disabled attribute - indicates whether the switch is disabled or not',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        label: {
            description: 'The label text for the toggle switch',
            control: {
                type: 'text',
                defaultValue: {
                    summary: 'Label',
                },
            },
        },
        labelPlacement: {
            description: 'Set the placement of the label.',
            control: 'select',
            if: { arg: 'label', truthy: true },
            options: labelPlacements,
            defaultValue: {
                summary: 'leading',
            },
        },
        aria: {
            description: 'The ARIA labels used for the toggle-switch.',
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default toggleSwitchStoryMeta;

const Template : TemplateFunction<ToggleSwitchProps> = (props) => {
    const {
        aria,
        isChecked,
        isDisabled,
        label,
        labelPlacement,
    } = props;

    return html`
        <pie-toggle-switch
            label="${label || nothing}"
            labelPlacement="${label && labelPlacement ? labelPlacement : nothing}"
            .aria="${aria}"
            ?isChecked="${isChecked}"
            ?isDisabled="${isDisabled}"
        />`;
};

const createToggleSwitchStory = createStory(Template, defaultArgs);

export const Default = createToggleSwitchStory();
