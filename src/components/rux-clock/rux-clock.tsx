import { Watch, Prop, Component, Host, h } from '@stencil/core';
import { getDayOfYear } from 'date-fns';
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

@Component({
  tag: 'rux-clock',
  styleUrl: 'rux-clock.scss',
  shadow: true,
})
export class RuxClock {
  private _timezone: string = 'UTC';
  private tzFormat: string = 'z';
  private _timer: number;
  private militaryTimezones = {
    A: '+01:00',
    B: '+02:00',
    C: '+03:00',
    D: '+04:00',
    E: '+05:00',
    F: '+06:00',
    G: '+07:00',
    H: '+08:00',
    I: '+09:00',
    K: '+10:00',
    L: '+11:00',
    M: '+12:00',
    N: '-01:00',
    O: '-02:00',
    P: '-03:00',
    Q: '-04:00',
    R: '-05:00',
    S: '-06:00',
    T: '-07:00',
    U: '-08:00',
    V: '-09:00',
    W: '-10:00',
    X: '-11:00',
    Y: '-12:00',
    Z: '+00:00',
  };

  /**
   * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.
   */
  @Prop() aos: number;

  /**
   * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.
   */
  @Prop() los: string;

  /**
   * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
   */
  @Prop({ mutable: true }) timezone: string = 'UTC';
  /**
   * Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.
   */
  @Prop() hideTimezone: boolean = false;

  /**
   * Hides the day of the year.
   */
  @Prop() hideDate: boolean = false;

  /**
   * Applies a smaller clock style.
   */
  @Prop() small: boolean;

  @Prop({ mutable: true }) time: string;
  @Prop({ mutable: true }) dayOfYear: number;

  @Watch('timezone')
  watchHandler() {
    this.convertTimezone(this.timezone);
  }

  connectedCallback() {
    this._timezone = this.timezone;

    this.updateTime();

    this._timer = window.setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  disconnectedCallback() {
    clearTimeout(this._timer);
  }

  private updateTime() {
    this.time = format(utcToZonedTime(new Date(), this._timezone), `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`, { timeZone: this._timezone });
    this.dayOfYear = getDayOfYear(zonedTimeToUtc(new Date(), this._timezone));
  }

  private convertTimezone(timezone: string) {
    this._timezone = this.militaryTimezones[timezone.toUpperCase()];
    this.tzFormat = 'O';
    if (!this._timezone) {
      this._timezone = timezone;
      this.tzFormat = 'zzz';
    } else if (timezone.toUpperCase() == 'Z') {
      this.tzFormat = 'X';
    }
  }

  render() {
    return (
      <Host>

      {!this.hideDate ? (
          <div class="rux-clock__segment rux-clock__day-of-the-year">
          <div class="rux-clock__segment__value" aria-labelledby="rux-clock__day-of-year-label">
            {this.dayOfYear}
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">
            Date
          </div>
        </div>
        ) : (
          ''
        )}


        <div class="rux-clock__segment rux-clock__time">
          <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
            {this.time}
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">
            Time
          </div>
        </div>

        {this.aos ? (
          <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--aos">
              {format(utcToZonedTime(this.aos, this._timezone), 'HH:mm:ss')}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label--aos">
              AOS
            </div>
          </div>
        ) : (
          ''
        )}

        {this.los ? (
          <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--los">
              {format(utcToZonedTime(this.los, this._timezone), 'HH:mm:ss')}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label--los">
              LOS
            </div>
          </div>
        ) : (
          ''
        )}
      </Host>
    );
  }
}
