'use strict';

module.exports = {

    types: [
        {
            value: 'WIP',
            name: '🚧  WIP:      Work in progress'
        },
        {
            value: 'feat',
            name: '✨  feat:     A new feature'
        },
        {
            value: 'fix',
            name: '🐛  fix:      A bug fix'
        },
        {
            value: 'refactor',
            name: '🔧  refactor: A code change that neither fixes a bug nor adds a feature'
        },
        {
            value: 'i18n',
            name: '🌐  i18n:     Text label translation only changes'
        },
        {
            value: 'deps',
            name: '📦  deps:     Dependency bumps only'
        },
        {
            value: 'style',
            name: '🎨  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
        },
        {
            value: 'docs',
            name: '📝  docs:     Documentation only changes'
        },
        {
            value: 'test',
            name: '🏁  test:     Add missing tests or correcting existing tests'
        },
        {
            value: 'revert',
            name: '⏪  revert:   Revert to a commit'
        }
    ],

    scopes: [
        // { name: 'modeler' },
        // { name: 'draw' },
        // { name: 'analyst' },
    ],

    //   scopeOverrides: {
    //     fix: [
    //       {name: 'merge'},
    //       {name: 'style'},
    //       {name: 'e2eTest'},
    //       {name: 'unitTest'},
    //     ],
    //   },

    allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix"]
};