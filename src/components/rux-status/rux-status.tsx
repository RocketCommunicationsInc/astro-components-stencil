import { Prop, Host, Component, h, Watch } from '@stencil/core'
import { Status } from '../../common/commonTypes.module'

type StatusTypes = {
    [id: string]: boolean
}
@Component({
    tag: 'rux-status',
    styleUrl: 'rux-status.scss',
    shadow: true,
})
export class RuxStatus {
    @Prop({ reflect: true }) status?: Status

    @Watch('status')
    validateStatus(newValue: string) {
        const statusTypes = {
            off: true,
            standby: true,
            normal: true,
            caution: true,
            serious: true,
            critical: true,
        } as StatusTypes

        if (!statusTypes[newValue]) {
            throw new Error('valid status required')
        }
    }

    render() {
        return <Host status={this.status} />
    }
}
