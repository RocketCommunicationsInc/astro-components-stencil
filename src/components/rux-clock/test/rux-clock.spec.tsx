import { newSpecPage } from '@stencil/core/testing'
import { RuxClock } from '../rux-clock'
import { militaryTimezones } from '../military-timezones'

const RealDate = Date.now

beforeAll(() => {
    //Swap Date.now() with global mock
    global.Date.now = jest.fn(() => new Date('1988-04-22 01:02:03').getTime())
})

afterAll(() => {
    //Replace our mock with the OG global Date.now()
    global.Date.now = RealDate
})

describe('rux-clock', () => {
    it('validates timezones', async () => {
        const clock = new RuxClock()
        clock.timezone = 'America/New_York'
        expect(clock.validateTimezone()).toBe(true)
    })

    it('validates military timezones', async () => {
        const clock = new RuxClock()
        Object.keys(militaryTimezones).forEach((zone) => {
            clock.timezone = zone
            expect(clock.validateTimezone()).toBe(true)
        })
    })
    it('validates timezones error', async () => {
        const clock = new RuxClock()
        clock.timezone = 'Notavalidtimezone'
        expect(clock.validateTimezone()).toBe(false)
    })

    it('shows the current time', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock></rux-clock>`,
        })

        expect(page.root.time).toBe('05:02:03 UTC')
    })

    it('converts time to timezone', async () => {
        // const page = await newSpecPage({
        //     components: [RuxClock],
        //     html: `<rux-clock timezone="America/New_York"></rux-clock>`,
        // })
        const clock = new RuxClock()
        clock.timezone = 'America/New_York'

        expect(clock.formattedDate()).toBe('01:02:03 EDT')
    })

    // it('converts time to timezone on the fly', async () => {
    //   const clock = new RuxClock()
    //   clock.timezone = 'UTAC'

    //     clock.timezone = 'UTC'
    //   expect(clock['time']).toBe(2)

    // })

    it('hides the timezone', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-timezone></rux-clock>`,
        })

        expect(page.root.time).toBe('05:02:03 ')
    })

    it('hides the date', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-date></rux-clock>`,
        })

        expect(page.root).toEqualHtml(`
      <rux-clock hide-date>
        <mock:shadow-root>
          <div class="rux-clock__segment rux-clock__time">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
              05:02:03 UTC
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label">
              Time
            </div>
          </div>
        </mock:shadow-root>
      </rux-clock>
    `)
    })

    it('shows los', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-date los="1999-02-02 12:12:21"></rux-clock>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-clock hide-date los="1999-02-02 12:12:21">
            <mock:shadow-root>
              <div class="rux-clock__segment rux-clock__time">
                <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
                  05:02:03 UTC
                </div>
                <div class="rux-clock__segment__label" id="rux-clock__time-label">
                  Time
                </div>
              </div>
              <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
                <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--los">
                  17:12:21
                </div>
                <div class="rux-clock__segment__label" id="rux-clock__time-label--los">
                  LOS
                </div>
            </div>
            </mock:shadow-root>
          </rux-clock>
        `)
    })


    it('shows aos', async () => {
      const page = await newSpecPage({
          components: [RuxClock],
          html: `<rux-clock hide-date aos="1621784737685"></rux-clock>`,
      })

      expect(page.root).toEqualHtml(`
        <rux-clock hide-date aos="1621784737685">
          <mock:shadow-root>
            <div class="rux-clock__segment rux-clock__time">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
                05:02:03 UTC
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label">
                Time
              </div>
            </div>
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--aos">
                15:45:37
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label--aos">
                AOS
              </div>
          </div>
          </mock:shadow-root>
        </rux-clock>
      `)
  })
})
