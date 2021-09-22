import { h } from '@stencil/core'

export interface FormFieldMessageInterface {
    helpText?: string
    errorText?: string
}

const FormFieldMessage = (props: FormFieldMessageInterface, children: any) => {
    const { helpText, errorText } = props

    return (
        (helpText || errorText) && (
            <div>
                {children}

                {helpText && !errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {errorText && <div class="rux-error-text">{errorText}</div>}
            </div>
        )
    )
}

export default FormFieldMessage
