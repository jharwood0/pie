import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';

import styles from './button.scss?inline';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from './defs';

// Valid values available to consumers
export { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT };

const componentSelector = 'pie-button';

export class PieButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, Object.values(BUTTON_SIZE), BUTTON_SIZE.MEDIUM)
        size : BUTTON_SIZE = BUTTON_SIZE.MEDIUM;

    @property()
    @validPropertyValues(componentSelector, Object.values(BUTTON_TYPE), BUTTON_TYPE.SUBMIT)
        type : BUTTON_TYPE = BUTTON_TYPE.SUBMIT;

    @property()
    @validPropertyValues(componentSelector, Object.values(BUTTON_VARIANT), BUTTON_VARIANT.PRIMARY)
        variant : BUTTON_VARIANT = BUTTON_VARIANT.PRIMARY;

    @property({ type: Boolean, reflect: true })
        disabled = false;

    @property({ type: Boolean, reflect: true })
        isFullWidth = false;

    render () {
        const {
            type, disabled, isFullWidth,
        } = this;

        return html`
            <button
                class="o-btn"
                type=${type}
                ?disabled=${disabled}
                ?isFullWidth=${isFullWidth}>
                <slot></slot>
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieButton;
    }
}
