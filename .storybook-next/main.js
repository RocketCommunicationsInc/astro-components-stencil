module.exports = {
    stories: [
        '../src/stories-next/*.stories.mdx',
        '../src/stories-next/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        'storybook-readme',
        'storybook-addon-themes',
        '@pxtrn/storybook-addon-docs-stencil',
    ],
}
