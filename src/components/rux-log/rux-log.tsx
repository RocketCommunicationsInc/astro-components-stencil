import { Prop, Component, Host, h } from '@stencil/core'
import { LogRow } from './rux-log.model'

@Component({
    tag: 'rux-log',
    styleUrl: 'rux-log.css',
    shadow: true,
})
export class RuxLog {
    @Prop() data: LogRow[] = []
    @Prop() timezone: string = 'UTC'
    @Prop({ mutable: true }) filter?: string

    connectedCallback() {
        console.log(this.data)
    }
    setFilter(e: any) {
        this.filter = e.target.value
    }

    filteredData(): LogRow[] {
        if (this.filter) {
            return this.data.filter((row) => row.message.includes(this.filter))
        } else {
            return this.data
        }
    }

    render() {
        return (
            <Host>
                <slot name="table">
                    <rux-table>
                        <slot name="table-header">
                            <rux-table-header class="relative">
                                <slot name="table-header-row">
                                    <rux-table-header-row>
                                        <rux-table-header-cell>
                                            Time
                                        </rux-table-header-cell>
                                        <rux-table-header-cell></rux-table-header-cell>
                                        <rux-table-header-cell>
                                            <div class="header--event">
                                                Event
                                                <input
                                                    onInput={(event) =>
                                                        this.setFilter(event)
                                                    }
                                                    type="search"
                                                />
                                            </div>
                                        </rux-table-header-cell>
                                    </rux-table-header-row>
                                </slot>
                            </rux-table-header>
                        </slot>

                        <slot name="table-body">
                            <rux-table-body>
                                {this.filteredData.map((row: LogRow) => (
                                    <rux-table-row>
                                        <rux-table-cell>
                                            <rux-datetime
                                                hour="2-digit"
                                                time-zone={this.timezone}
                                                minute="2-digit"
                                                second="2-digit"
                                                date={row.timestamp}
                                            ></rux-datetime>
                                        </rux-table-cell>
                                        <rux-table-cell>
                                            <rux-status
                                                status={row.status}
                                            ></rux-status>
                                        </rux-table-cell>
                                        <rux-table-cell>
                                            {row.message}
                                        </rux-table-cell>
                                    </rux-table-row>
                                ))}
                            </rux-table-body>
                        </slot>
                    </rux-table>
                </slot>
            </Host>
        )
    }
}
