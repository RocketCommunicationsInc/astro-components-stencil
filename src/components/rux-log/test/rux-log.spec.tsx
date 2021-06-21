import { newSpecPage } from '@stencil/core/testing'
import { RuxLog } from '../rux-log'
import { LogRow } from '../rux-log.model'

describe('rux-log', () => {
    it('builds', async () => {
        const log = new RuxLog()
        expect(log).toBeTruthy()
    })

    it('filters', async () => {
        const logData = [
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'serious',
                message: 'USA-177 experienced solar panel misalignment.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'caution',
                message: 'USA-168 suffered power degradation.',
            },
        ] as LogRow[]

        const log = new RuxLog()
        log.data = logData
        log.filter = 'Antenna DGS'

        expect(log.filteredData).toStrictEqual([
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
        ])
    })
})
