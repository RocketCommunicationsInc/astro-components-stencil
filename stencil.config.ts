import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'

export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
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
    ],
    plugins: [sass(), svgOptimizerPlugin()],
}
