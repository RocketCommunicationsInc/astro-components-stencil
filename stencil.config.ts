import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'
import {
    angularOutputTarget,
    ValueAccessorConfig,
} from '@stencil/angular-output-target'

// const EVENTS = {
//     Input: 'onInput',
//     Change: 'onChange',
// }

// const ATTRS = {
//     Checked: 'checked',
//     Value: 'value',
// }

// const angularValueAccessorBindings: ValueAccessorConfig[] = [
//     {
//         elementSelectors: ['rux-checkbox', 'rux-switch'],
//         event: EVENTS.Input,
//         targetAttr: ATTRS.Value,
//         type: 'boolean',
//     },
//     {
//         elementSelectors: ['rux-checkbox', 'rux-switch'],
//         event: EVENTS.Change,
//         targetAttr: ATTRS.Checked,
//         type: 'boolean',
//     },
// ]

export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: '@astrouxds/astro-web-components',
            directivesProxyFile:
                '../astro-components-angular/src/proxies/astro-web-components.ts',
            valueAccessorConfigs: [],
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-json',
            file: './docs.json',
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
            strict: true,
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers,
            copy: [
                {
                    src: 'tests/pages',
                },
            ],
        },
    ],
    plugins: [sass(), svgOptimizerPlugin()],
}
