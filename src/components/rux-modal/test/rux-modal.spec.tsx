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
            open: false,
            modalMessage: '',
            modalTitle: '',
            confirmText: 'Confirm',
            denyText: 'Cancel',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxModal],
            html: `<rux-modal></rux-modal>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-modal>
        <mock:shadow-root>
        <div class="rux-modal-container">
           <dialog class="rux-modal" role="dialog">
             <header class="rux-modal__titlebar">
               <h1></h1>
             </header>
             <div class="rux-modal__content">
               <div class="rux-modal__message"></div>
               <rux-button-group align="right">
                 <rux-button data-value="false" outline="" tabindex="-1">
                  Cancel
                 </rux-button>
                 <rux-button data-value="true" tabindex="0">
                  Confirm
                 </rux-button>
               </rux-button-group>
             </div>
           </dialog>
         </div>
        </mock:shadow-root>
      </rux-modal>
    `)
    })
})
