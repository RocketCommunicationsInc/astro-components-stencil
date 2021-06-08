import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'rux-notification',
    styleUrl: 'rux-notification.scss',
    shadow: true,
})
export class RuxNotification {
    @Prop({ reflect: true, mutable: true }) open: boolean = false
    @Prop() message: string = ''
    @Prop() status: string = 'standby'
    @Prop({ reflect: true }) target: string = 'local'
    @Prop() closeAfter: number = null
    // @Prop() timeoutRef: Timeout = null

    connectedCallback() {
        console.log(this.closeAfter)
    }

    updated() {
        let timeoutRef = null
        if (this._closeAfter && this.open) {
            timeoutRef = setTimeout(() => {
                this.open = false
            }, this._closeAfter)
        }
        return timeoutRef
    }

    _onClick() {
        const timeoutRef = this.updated()
        if (timeoutRef) {
            clearTimeout(timeoutRef)
        }
        this.open = false
    }

    get _closeAfter() {
        console.log(this.closeAfter, 'Close After')
        if (this.closeAfter && this.closeAfter <= 10) {
            // if the number is 10 or less, it must be ms
        }

        if (
            (this.closeAfter && this.closeAfter > 10000) ||
            (this.closeAfter && this.closeAfter < 2000)
        ) {
            // if this number is larger than 10s or smaller than 2s, enforce minimum 2s delay
            this.closeAfter = 2000
        }

        return this.closeAfter
    }
    componentDidLoad() {
        console.log(this.closeAfter)
        if (this.closeAfter) {
            this._closeAfter
        }
    }

    render() {
        return (
            <Host>
                <div class="rux-notification__message">{`${this.message}`}</div>
                <rux-icon
                    role="button"
                    label="Close notification"
                    onClick={() => this._onClick()}
                    icon="close"
                    size="small"
                ></rux-icon>
                <slot></slot>
            </Host>
        )
    }
}
