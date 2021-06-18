import { Prop, Component, Host, h } from '@stencil/core'
import { LogRow } from './rux-log.model'

@Component({
    tag: 'rux-log',
    styleUrl: 'rux-log.css',
    shadow: true,
})
export class RuxLog {
    @Prop() data: LogRow[]
    @Prop() timezone: string = 'UTC'

    render() {
        return (
            <Host>
                <rux-table>
                    <rux-table-header>
                        <rux-table-header-row>
                            <rux-table-header-cell>Time</rux-table-header-cell>
                            <rux-table-header-cell></rux-table-header-cell>
                            <rux-table-header-cell>Event</rux-table-header-cell>
                        </rux-table-header-row>
                    </rux-table-header>
                    <rux-table-body>
                        {this.data.map((row) => {
                            ;<rux-table-row>
                                <rux-table-cell>
                                    <rux-datetime
                                        date={row.timestamp}
                                    ></rux-datetime>
                                </rux-table-cell>
                                <rux-table-cell>
                                    <rux-status
                                        status={row.status}
                                    ></rux-status>
                                </rux-table-cell>
                                <rux-table-cell>{row.message}</rux-table-cell>
                            </rux-table-row>
                        })}
                    </rux-table-body>
                </rux-table>
            </Host>
        )
    }
}
