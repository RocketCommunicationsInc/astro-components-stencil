import { Component, Host, h, Prop, Watch } from '@stencil/core'

@Component({
    tag: 'rux-progress',
    styleUrl: 'rux-progress.scss',
    shadow: true,
})
export class RuxProgress {
    /**
     * For use with progress bars that have maximum value greater or less than 100.
     */
    @Prop({ mutable: true }) max: number = 100
    /**
     * Displays current progress value between 1 and 100 (or the max, if defined below). Note: if this paramater isn’t present or if it is set to 0 the progress bar will display its indeterminate state.
     */
    @Prop({ mutable: true }) value: number = 0
    /**
     * Displays text output of progress as a percentage. Note: when using a max value other than 100 output is displated as value/max (e.g., 1450/2000)
     */
    @Prop({ mutable: true }) hideLabel: boolean = false

    getProgressAsString() {
        return this.max === 100 ? `${this.value}%` : `${this.value}/${this.max}`
    }
    checkValueNotOverMax(max: number, value: number) {
        if (max < value) {
            max = value
            this.max = max
            console.warn(
                'The given max for <rux-progress> was less than the given value. Max has been changed to equal value in the meantime. Please be sure max and value are correct on the <rux-progress> component.'
            )
        }
    }
    connectedCallback() {
        this.checkValueNotOverMax(this.max, this.value)
    }
    @Watch('value')
    watchHandler() {
        this.checkValueNotOverMax(this.max, this.value)
    }
    render() {
        return (
            <Host>
                {this.value ? (
                    [
                        <progress
                            class="rux-progress"
                            value={this.value}
                            max={this.max}
                        ></progress>,
                        <output
                            class="rux-progress__value"
                            hidden={this.hideLabel}
                        >
                            {this.getProgressAsString()}
                        </output>,
                    ]
                ) : (
                    <progress class="rux-progress"></progress>
                )}

                <slot></slot>
            </Host>
        )
    }
}
