import {
    Event,
    Watch,
    EventEmitter,
    Prop,
    Element,
    Component,
    Host,
    h,
} from '@stencil/core'

export type SegmentedButton = {
    selected?: boolean
    label: string
}

@Component({
    tag: 'rux-segmented-button',
    styleUrl: 'rux-segmented-button.scss',
    shadow: true,
})
export class RuxSegmentedButton {
    @Element() el!: HTMLElement

    @Prop() data: SegmentedButton[] = []

    @Prop({ reflect: true, mutable: true }) selected: string = ''

    /**
     * Emitted when the value property has changed.
     */
    @Event({ eventName: 'rux-change' })
    ruxChange!: EventEmitter

    @Watch('data')
    onDataChange(newValue: string) {
        if (newValue) {
            const initialSelection = this.data.find(
                (segment) => segment.selected
            )
            if (initialSelection) {
                this._setSelected(initialSelection.label)
            } else {
                if (!this.selected) {
                    this._setSelected(this.data[0].label)
                }
            }
        }
    }

    _handleChange(e) {
        this._setSelected(e.target.value)
        this.ruxChange.emit(this.selected)
    }

    connectedCallback() {
        this._handleChange = this._handleChange.bind(this)
        const initialSelection =
            this.data.find((segment) => segment.selected) || this.data[0]
        if (initialSelection) {
            this._setSelected(initialSelection.label)
        }
    }

    private _setSelected(label) {
        this.data.map((item) => {
            item.selected = item.label === label
        })
        this.selected = label
    }

    _slugify(label) {
        label = label.replace(/^\s+|\s+$/g, '') // trim
        label = label.toLowerCase()

        label = label
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes

        return label
    }

    private _isSelected(label) {
        if (this.selected === label) {
            return true
        }

        if (this.data.find((item) => item.label === label).selected) {
            return true
        }

        return false
    }

    render() {
        return (
            <ul class="rux-segmented-buttons">
                {this.data.map((item) => (
                    <li class="rux-segmented-button">
                        <input
                            type="radio"
                            name="rux-group"
                            id={this._slugify(item.label)}
                            value={item.label}
                            checked={this._isSelected(item.label)}
                            data-label={item.label}
                            onChange={this._handleChange}
                        />
                        <label htmlFor={this._slugify(item.label)}>
                            {item.label}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }
}
