import { newSpecPage } from '@stencil/core/testing'
import { RuxModal } from '../rux-modal'

describe('rux-modal', () => {
    it('builds', async () => {
        const modal: RuxModal = new RuxModal()
        const { open, modalMessage, modalTitle, confirmText, denyText } = modal
        expect(modal).toBeTruthy()
        expect({
            open,
            modalMessage,
            modalTitle,
            confirmText,
            denyText,
        }).toEqual({
            open: undefined,
            modalMessage: undefined,
            modalTitle: undefined,
            confirmText: 'Confirm',
            denyText: 'Cancel',
        })
    })
})
