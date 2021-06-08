import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'rux-notification',
    styleUrl: 'rux-notification.scss',
    shadow: true,
})
export class RuxNotification {
    /**
     *  Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided).
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false
    /**
     *  Message for the notification banner.
     */
    @Prop() message: string = ''
    /**
     *  Displays an icon from the [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/) in the log entry's row. Possible values include 'off', 'standby', 'normal', 'caution', 'serious', and 'critical'
     */
    @Prop() status: string = 'standby'
    //? currently not using.
    // @Prop({ reflect: true }) target: string = 'local'
    /**
     *  If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it.
     */
    @Prop({ reflect: true }) closeAfter: number = null

    connectedCallback() {
        console.log(this.closeAfter)
        this.updated()
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
        // console.log(this.closeAfter, 'Close After')
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
    // componentDidLoad() {
    //     // console.log(this.closeAfter)
    //     // if (this.closeAfter) {
    //     //     this.updated()
    //     // }
    //     this.updated()
    // }

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
