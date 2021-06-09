import { newSpecPage } from '@stencil/core/testing'
import { RuxNotification } from '../rux-notification'

describe('rux-notification', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxNotification],
            html: `<rux-notification></rux-notification>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-notification>
    `)
    })
    it('sets the timeout ref based on the given closeAfter value', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'See you, space cowboy'
        ruxNotif.status = 'standby'
        ruxNotif.closeAfter = 3000
        ruxNotif.updated()
        expect(ruxNotif.timeoutRef).toBe(3000)
    })
    it('sets open to false after the closeAfter time has been met', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'Hey, Listen!'
        ruxNotif.status = 'critical'
        ruxNotif.closeAfter = 3000
        ruxNotif.updated()
        expect(ruxNotif.open).toBe(false)
        // setTimeout(() => expect(ruxNotif.open).toBe(false), 3001)
    })
    it('changes open to false with the _onClick method', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'The Light provides'
        ruxNotif.status = 'normal'
        ruxNotif._onClick()
        expect(ruxNotif.open).toBe(false)
    })
    it('returns the correct value using the get _closeAfter method', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'SEVENTH COLUMN'
        ruxNotif.status = 'critical'
        ruxNotif.closeAfter = 3000
        ruxNotif._closeAfter
        expect(ruxNotif._closeAfter).toBe(3000)
    })
    it('can accept milisecond values for closeAfter and closes notification', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'The Duality of RuxNotification'
        ruxNotif.status = 'caution'
        ruxNotif.closeAfter = 3000
        ruxNotif.updated()
        //!running updated should also do the timeout and close, if not that's your problem here
        expect(ruxNotif.open).toBe(false)
        // setTimeout(() => expect(ruxNotif.open).toBe(false), ruxNotif.closeAfter)
    })
    it('can accept second values for closeAfter and closes notification', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'The Duality of RuxNotification'
        ruxNotif.status = 'caution'
        ruxNotif.closeAfter = 3
        ruxNotif.updated()
        expect(ruxNotif.open).toBe(false)
    })
    it('get _closeAfter returns 2000 if closeAfter is > 10s or < 2s', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'Drums, drums in the deep'
        ruxNotif.status = 'critical'
        ruxNotif.closeAfter = 1
        ruxNotif._closeAfter
        expect(ruxNotif.closeAfter).toBe(2000)
        ruxNotif.closeAfter = 15000 // 15s
        ruxNotif._closeAfter
        expect(ruxNotif.closeAfter).toBe(2000)
    })
})
