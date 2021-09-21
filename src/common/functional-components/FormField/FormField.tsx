import { h } from '@stencil/core'
import { FormFieldInterface } from '../../interfaces.module'

const FormField = (props: FormFieldInterface, children: any) => {
    const { helpText, errorText } = props

    return (
        <div>
            {children}

            {helpText && !errorText && (
                <div class="rux-help-text">{helpText}</div>
            )}

            {errorText && <div class="rux-error-text">{errorText}</div>}
        </div>
    )
}

export default FormField
