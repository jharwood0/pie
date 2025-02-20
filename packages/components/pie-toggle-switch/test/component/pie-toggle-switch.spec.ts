import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToggleSwitch } from '@/index';
import { ToggleSwitchProps } from '@/defs';

const componentSelector = '[data-test-id="toggle-switch-component"]';
const toggleInputSelector = '[data-test-id="toggle-switch-input"]';
const toggleSwitchLabel = '[data-test-id="toggle-switch-label"]';

test.describe('Component: `Pie toggle switch`', () => {
    test('should be visible', async ({ mount, page }) => {
        // Arrange
        await mount(PieToggleSwitch, {
            props: {
                isChecked: false,
                isDisabled: false,
            },
        });

        // Act
        const toggleSwitch = page.locator(componentSelector);

        // Assert
        await expect(toggleSwitch).toBeVisible();
    });

    test('should set `isChecked` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch);

        // Act
        const pieToggleSwitchComponent = await component.locator(componentSelector).isChecked();

        // Assert
        expect(pieToggleSwitchComponent).toBe(false);
    });

    test('should set `isDisabled` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch);

        // Act
        const pieToggleSwitchComponent = await component.locator(componentSelector).isDisabled();

        // Assert
        expect(pieToggleSwitchComponent).toBe(false);
    });

    test('should have an `id` of `toggle-switch` on the input element', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch);

        // Act
        const pieToggleSwitchInput = component.locator(toggleInputSelector);

        // Assert
        await expect(pieToggleSwitchInput).toHaveAttribute('id', 'toggle-switch');
    });

    test.describe('when the toggle contains a label element', () => {
        test('should set associated `for` value on the label', async ({ mount }) => {
            // Arrange
            const component = await mount(PieToggleSwitch, {
                props: {
                    label: 'Label',
                    labelPlacement: 'leading',
                } as ToggleSwitchProps,
            });

            // Act
            const pieToggleSwitchLabel = component.locator(toggleSwitchLabel);

            // Assert
            await expect(pieToggleSwitchLabel).toHaveAttribute('for', 'toggle-switch');
        });
    });

    test.describe('component interaction states', () => {
        test.describe('when the component is clicked', () => {
            test('should set `isChecked` to `true`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        isChecked: false,
                    },
                });

                // Act
                await page.click(componentSelector);

                const pieToggleSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                expect(pieToggleSwitchComponent).toBe(true);
            });
        });

        test.describe('when the components label element is clicked', () => {
            test('should set `isChecked` to `true`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: 'leading',
                    } as ToggleSwitchProps,
                });

                // Act
                await page.click(toggleSwitchLabel);

                const pieToggleSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                expect(pieToggleSwitchComponent).toBe(true);
            });
        });
    });

    test.describe('Props: `aria`', () => {
        test.describe('when label exist', () => {
            test('should render the component with the correct aria-labels', async ({ mount }) => {
                // Arrange
                const ariaLabelText = 'Aria label';

                const component = await mount(PieToggleSwitch, {
                    props: {
                        aria: {
                            label: ariaLabelText,
                        },
                    },
                });

                // Act
                const toggleSwitchInput = component.locator(toggleInputSelector);
                const ariaLabel = await toggleSwitchInput.getAttribute('aria-label');

                // Assert
                expect(ariaLabel).toBe(ariaLabelText);
            });
        });

        test.describe('when describedBy exist', () => {
            const ariaDescriptionID = 'toggle-switch-description';
            const ariaDescriptionSelector = `[data-test-id="${ariaDescriptionID}"]`;
            const ariaDescriptionText = 'Aria description';

            test('should render the component with the correct description id', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        aria: {
                            describedBy: ariaDescriptionText,
                        },
                    },
                });

                // Act
                const toggleSwitchInput = component.locator(toggleInputSelector);
                const ariaDescription = await toggleSwitchInput.getAttribute('aria-describedBy');

                // Assert
                expect(ariaDescription).toBe(ariaDescriptionID);
            });

            test('should render a description element with the correct text', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        aria: {
                            describedBy: ariaDescriptionText,
                        },
                    },
                });

                // Act
                const ariaDescriptionElement = component.locator(ariaDescriptionSelector);

                // Assert
                await expect(ariaDescriptionElement).toContainText(ariaDescriptionText);
            });
        });
    });

    test.describe('Props: `LabelProps`', () => {
        test.describe('when a position is passed as `leading`', () => {
            test('should render a leading label with class `c-toggleSwitch--leading`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: 'leading',
                    } as ToggleSwitchProps,
                });

                const pieToggleSwitchLabel = component.locator('[data-test-id="toggle-switch-label"]');

                // Assert
                await expect(pieToggleSwitchLabel).toHaveClass('c-toggleSwitch-label c-toggleSwitch--leading');
            });
        });

        test.describe('when a label is passed as `trailing`', () => {
            test('should render a trailing label with class `c-toggleSwitch--trailing`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: 'trailing',
                    } as ToggleSwitchProps,
                });

                const pieToggleSwitchLabel = component.locator('[data-test-id="toggle-switch-label"]');

                // Assert
                await expect(pieToggleSwitchLabel).toHaveClass('c-toggleSwitch-label c-toggleSwitch--trailing');
            });
        });
    });
});

