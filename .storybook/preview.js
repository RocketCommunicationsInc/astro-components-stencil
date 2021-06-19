import themes from './theme'
import { addDecorator } from '@storybook/web-components'
import { addReadme } from 'storybook-readme/html'
import {
    extractArgTypes,
    extractComponentDescription,
    setStencilDocJson,
} from '@pxtrn/storybook-addon-docs-stencil'

import docJson from '../dist/docs.json'
if (docJson) setStencilDocJson(docJson)
addDecorator(addReadme)

export const parameters = {
    docs: {
        extractArgTypes,
        extractComponentDescription,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: { disable: true },
    a11y: {
        element: '#root',
    },
    themes: {
        default: 'Dark Theme',
        list: [
            { name: 'Light Theme', class: 'light-theme', color: '#eceff4' },
            { name: 'Dark Theme', class: 'dark-theme', color: '#192635' },
        ],
    },
    readme: {
        codeTheme: 'duotone-sea',
        theme: {
            // bodyBackgroundColor: '#969896',
            bodyColor: themes.dark.textColor,
            linkColor: 'rgb(77, 172, 255)',
            hrColor: '#3c4c5d',
            // checkedRadioLabelColor: '#4078c0',
            // kbdColor: '#555',
            // kbdBackgroundColor: '#fcfcfc',
            // kbdBorderColor: '#ccc',
            // kbdBottomBorderColor: '#bbb',
            // kbdBoxShadowColor: '#bbb',
            preBackgroundColor: '#141f2c',
            // fontFamily:
            //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            // imgBackgroundColor: '#fff',

            tableTrBackgroundColor: '#182635',
            tableOddTrBackgroundColor: '#141f2c',
            tableTrBorderTopColor: '#3c4c5d',
            tableTdBorderColor: '#3c4c5d',

            codeBackgroundColor: '#060708',
            codeFontFamily:
                'Consolas, "Liberation Mono", Menlo, Courier, monospace',
            preFontFamily:
                'Consolas, "Liberation Mono", Menlo, Courier, monospace',

            // blockquoteBorderLeftColor: '#ddd',
            // h1h2BorderBottomColor: '#ddd',
            // h6Color: '#777',
        },
    },
}
