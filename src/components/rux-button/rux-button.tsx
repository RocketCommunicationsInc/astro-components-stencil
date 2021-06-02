import { Prop, Component, h } from '@stencil/core'

@Component({
    tag: 'rux-button',
    styleUrl: 'rux-button.scss',
    shadow: true,
})
export class RuxButton {
    @Prop({ reflect: true }) icon: string = ''
    @Prop({ reflect: true, attribute: 'iconOnly' }) iconOnly: boolean = false
    @Prop() outline: boolean = false
    // @Prop() type: string = 'button'
    @Prop({ reflect: true }) disabled = false
    @Prop({ reflect: true }) size?: 'small' | 'large'

    render() {
        const { size, iconOnly, outline, disabled, icon } = this
        return (
            <button
                type="button"
                class={{
                    'rux-button': true,
                    'rux-button--outline': outline,
                    'rux-button--small': size === 'small',
                    'rux-button--large': size === 'large',
                    'rux-button--icon-only': iconOnly,
                }}
                aria-disabled={disabled ? 'true' : null}
                disabled={disabled}
            >
                {icon ? (
                    <rux-icon
                        icon={icon}
                        color={outline ? 'primary' : 'dark'}
                    ></rux-icon>
                ) : null}

                <slot></slot>
            </button>
        )
    }
}
