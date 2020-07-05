module.exports = {
    stories: ['../src/stories/**/*.stories.(js|mdx|tsx|jsx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/addon-docs',
        './.storybook/design-addon/register.js'
    ]
}
