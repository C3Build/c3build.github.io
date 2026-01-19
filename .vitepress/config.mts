import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "C3Build",
    head: [
        ["link", { rel: "icon", href: "../logo.png" }],
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/docs'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/c3build'}
        ],
        logo: {
            src: "logo.png"
        },
    },
    markdown: {
        languages: [
            {
                name: "C3BuildFile",
                scopeName: "source.c3build",
                fileTypes: ["C3BuildFile"],
                aliases: ["c3build", "C3Build"],
                patterns: [
                    {
                        include: "#comments"
                    },
                    {
                        include: "#strings"
                    },
                    {
                        include: "#keywords"
                    },
                    {
                        include: "#versionNumbers"
                    },
                    {
                        include: "#identifiers"
                    },
                    {
                        include: "#punctuation"
                    }
                ],
                repository: {
                    comments: {
                        name: "comment.line.c3build",
                        match: /--[^\n]*/
                    },
                    strings: {
                        name: "string.quoted.double.c3build",
                        begin: /"/,
                        end: /"/,
                        patterns: [
                            {
                                name: "constant.character.escape.c3build",
                                match: /\\./
                            }
                        ]
                    },
                    versionNumbers: {
                        name: "constant.numeric.version.c3build",
                        match: /[0-9]+\.[0-9]+\.[0-9]+/
                    },
                    identifiers: {
                        name: "variable.other.c3build",
                        match: /[a-zA-Z][a-zA-Z_]*/
                    },
                    punctuation: {
                        name: "punctuation.bracket.c3build",
                        match: /[()]/
                    },
                    keywords: {
                        patterns: [
                            {
                                name: "keyword.control.c3build",
                                match: /\b(ifdef|endif|task|endtask)\b/
                            },
                            {
                                name: "constant.language.c3build",
                                match: /\b(VERSION|MIN|MAX|LIB|EXE|LINK|DIR|FILE)\b/
                            },
                            {
                                name: "support.function.c3build",
                                match: /\b(compiler|project|require|find|option|cmd|program|create|copy|print|remove|add)\b/
                            }
                        ]
                    }
                }
            }
        ]
    }
})
