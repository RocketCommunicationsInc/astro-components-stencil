import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'
import {
    angularOutputTarget,
    ValueAccessorConfig,
} from '@stencil/angular-output-target'
// import { reactOutputTarget } from '@stencil/react-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: ['rux-checkbox', 'rux-switch'],
        event: 'ruxInput',
        targetAttr: 'checked',
        type: 'boolean',
    },
    {
        elementSelectors: ['rux-radio'],
        event: 'ruxBlur',
        targetAttr: 'checked',
        type: 'boolean',
    },
    {
        elementSelectors: ['rux-input'],
        event: 'ruxInput',
        targetAttr: 'value',
        type: 'text',
    },
]
export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: '@astrouxds/astro-web-components',
            directivesProxyFile:
                '../astro-web-components-angular/src/directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
        // reactOutputTarget({
        //   componentCorePackage: '@astrouxds/astro-web-components',
        //   proxiesFile: '../astro-in-react/src/components.ts',
        //   includePolyfills: true,
        //   includeDefineCustomElements: true
        // }),
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
    enableCache: true,
    extras: {
        appendChildSlotFix: true,
    },
}
