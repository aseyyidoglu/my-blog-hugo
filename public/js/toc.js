*, *:before, *:after {
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 16px;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #313a3d;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    line-height: 1.6;
    overflow-wrap: break-word;
}

header#banner {
    margin: 25px 0;
}

header#banner a {
    color: #313a3d;
    text-decoration: none;
}

header#banner a:hover {
    text-decoration: underline;
}

header#banner h2 {
    display: inline;
    font-size: 21px;
    font-size: 2.1rem;
    margin: 0 8px 0 0;
}

header#banner nav {
    display: inline-block;
}

header#banner nav ul {
    list-style-type: none;
    font-size: 1.05em;
    text-transform: lowercase;
    margin: 0;
    padding: 0;
}

header#banner nav ul li {
    display: inline;
    margin: 0 3px;
}

header#banner nav ul li a {
    color: #454545;
}

main {
    display:flex;
}

main nav {
    position: fixed;
    left: 125px;
    top: 100px;
    width: 20%;
}

main#content a {
    color: #007dfa;
    text-decoration: none;
}

main#content a:hover {
    text-decoration: underline;
}

main#content h1,
main#content h2,
main#content h3,
main#content h4,
main#content h5,
main#content h6 {
    margin-bottom: 0;
    line-height: 1.15;
}

main#content h3 {
    font-size: 19px;
    font-size: 1.9rem;
}

main#content h1 + p,
main#content h2 + p,
main#content h3 + p,
main#content h4 + p,
main#content h5 + p,
main#content h6 + p {
    margin-top: 5px;
}

main#content p {
    color: #394548;
    margin: 16px 0;
}

main#content hr {
    height: 1px;
    border: 0;
    background: #d8d8d8;
}

main#content abbr {
    cursor: help;
}

/* index.html styles */
main#content ul#posts {
    list-style-type: none;
    font-size: 16px;
    font-size: 1.6rem;
    margin-top: 0;
    padding: 0;
}

main#content ul#posts li {
    margin: 5px 0;
    padding: 0;
}

main#content ul#posts small {
    font-size: 0.8em;
    color: #767676;
    margin-left: 10px;
}

main#content ul#posts li a, footer a {
    text-decoration: none;
}

main#content ul#posts li a:hover, footer a:hover {
    color: #369aff;
}

main#content ul#posts li a:hover small {
    color: inherit;
}

/* single.html styles */
main#content header#post-header h1 {
    display: block;
    font-size: 23px;
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.15;
}

main#content header#post-header > div {
    display: block;
    font-size: 0.85em;
    color: #767676;
}

main#content #toc {
    border: 1px solid #b1b1b1;
    border-radius: 1px;
    line-height: 26px;
    margin: 16px 0;
    padding: 9px 14px;
}

main#content #toc h4 {
    font-size: 1.06em;
    color: #3d3d3d;
    margin: 0;
}

main#content #toc nav#TableOfContents {
    margin-top: 4px;
}

main#content #toc nav#TableOfContents > ul, main#content #toc nav#TableOfContents > ol {
    margin-left: -40px;
}

main#content #toc ul, main#content #toc ol {
    font-size: 0.98em;
    margin: 0;
    padding: 0 0 0 40px;
}

main#content #toc ul {
    list-style-type: none;
}

main#content #toc ol {
    counter-reset: item;
}

main#content #toc ol li {
    display: block;
}

main#content #toc ol li:before {
    content: counters(item, ".") ". ";
    counter-increment: item;
}

main#content img {
    max-width: 100%;
    margin: 0 auto;
}

main#content figure {
    margin: 16px 0;
}

main#content figure img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}

main#content figure figcaption {
    font-size: 0.92em;
    font-style: italic;
    line-height: 22px;
    text-align: center;
    margin-top: 6px;
    padding: 0 10px;
}

main#content figure figcaption h4 {
    font-style: normal;
    display: inline;
    margin: 0;
}

main#content figure figcaption p {
    display: inline;
    margin: 0;
    padding-left: 8px;
}

main#content blockquote {
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 50px;
    padding-left: 15px;
    border-left: 3px solid #ccc;
}

main#content code,
main#content pre {
    font-family: 'Menlo', monospace;
}

main#content code {
    font-size: 0.96em;
    padding: 0 5px;
}

main#content pre {
    display: block;
    overflow-x: auto;
    font-size: 14px;
    font-size: 1.4rem;
    white-space: pre;
    margin: 20px 0;
    padding: 1.5rem 1.5rem;
    line-height: 1.4;
}

main#content pre code {
    padding: 0;
}

main#content .footnotes {
    font-size: 0.9em;
}

footer#footer {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-size: 1.4rem;
    font-weight: 400;
    color: #b3b3b3;
    margin: 40px 0;
}

footer #social {
    flex-direction: row
}

#TableOfContents {
    opacity: 0;
}

#TableOfContents ul {
    padding: 0 16px;
}

#TableOfContents li {
    list-style-type: none;
}@media (min-width: 770px) {
body {
    width: 600px;
    line-height: 1.5;
}

main#content hr {
    width: 108%;
    margin-left: -3.8%;
}

/* index.html styles */
header#banner h2 {
    font-size: 25px;
    font-size: 2.5rem;
}

main#content h3 {
    font-size: 20px;
    font-size: 2rem;
}

main#content ul#posts {
    font-size: 18px;
    font-size: 1.8rem;
}

/* single.html styles */
main#content header#post-header h1 {
    font-size: 24px;
    font-size: 2.4rem;
}

main#content img {
    max-width: 108%;
    margin-left: -3.8%;
}

main#content figure {
    margin-left: -3.8%;
}

main#content figure img {
    max-width: 108%;
}

main#content pre {
    width: 108%;
    margin-left: -3.8%;
    padding: 1.5rem 2.2rem;
}
}
@media (min-width: 770px) {
body {
    width: 600px;
    line-height: 1.5;
}

main#content hr {
    width: 108%;
    margin-left: -3.8%;
}

/* index.html styles */
header#banner h2 {
    font-size: 25px;
    font-size: 2.5rem;
}

main#content h3 {
    font-size: 20px;
    font-size: 2rem;
}

main#content ul#posts {
    font-size: 18px;
    font-size: 1.8rem;
}

/* single.html styles */
main#content header#post-header h1 {
    font-size: 24px;
    font-size: 2.4rem;
}

main#content img {
    max-width: 108%;
    margin-left: -3.8%;
}

main#content figure {
    margin-left: -3.8%;
}

main#content figure img {
    max-width: 108%;
}

main#content pre {
    width: 108%;
    margin-left: -3.8%;
    padding: 1.5rem 2.2rem;
}
}
@media (prefers-color-scheme: dark) {
html {
    scrollbar-color: #6c6c6c #2e2e2e;
}

body {
    color: #ebebeb;
    background: #121212;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

header#banner a {
    color: #e0e0e0;
    text-decoration: none;
}

header#banner nav ul li a {
    color: #cccccc;
}

main#content a, footer a {
    color: #00b1ed;
}

main#content p {
    color: #f5f5f5;
}

main#content hr {
    background: #5c5c5c;
}

main#content #toc h4 {
    color: #d4d4d4;
}

main#content ul#posts small {
    color: #a7a7a7;
}

main#content ul#posts li a:hover, footer a:hover {
    color: #21c7ff;
}

main#content header#post-header div {
    color: #a7a7a7;
}}/* Background */ .chroma { color: #f8f8f2; background-color: #272822 }
/* Error */ .chroma .err { color: #960050; background-color: #1e0010 }
/* LineTableTD */ .chroma .lntd { vertical-align: top; padding: 0; margin: 0; border: 0; }
/* LineTable */ .chroma .lntable { border-spacing: 0; padding: 0; margin: 0; border: 0; width: auto; overflow: auto; display: block; }
/* LineHighlight */ .chroma .hl { display: block; width: 100%;background-color: #ffffcc }
/* LineNumbersTable */ .chroma .lnt { margin-right: 0.4em; padding: 0 0.4em 0 0.4em;color: #7f7f7f }
/* LineNumbers */ .chroma .ln { margin-right: 0.4em; padding: 0 0.4em 0 0.4em;color: #7f7f7f }
/* Keyword */ .chroma .k { color: #66d9ef }
/* KeywordConstant */ .chroma .kc { color: #66d9ef }
/* KeywordDeclaration */ .chroma .kd { color: #66d9ef }
/* KeywordNamespace */ .chroma .kn { color: #f92672 }
/* KeywordPseudo */ .chroma .kp { color: #66d9ef }
/* KeywordReserved */ .chroma .kr { color: #66d9ef }
/* KeywordType */ .chroma .kt { color: #66d9ef }
/* NameAttribute */ .chroma .na { color: #a6e22e }
/* NameClass */ .chroma .nc { color: #a6e22e }
/* NameConstant */ .chroma .no { color: #66d9ef }
/* NameDecorator */ .chroma .nd { color: #a6e22e }
/* NameException */ .chroma .ne { color: #a6e22e }
/* NameFunction */ .chroma .nf { color: #a6e22e }
/* NameOther */ .chroma .nx { color: #a6e22e }
/* NameTag */ .chroma .nt { color: #f92672 }
/* Literal */ .chroma .l { color: #ae81ff }
/* LiteralDate */ .chroma .ld { color: #e6db74 }
/* LiteralString */ .chroma .s { color: #e6db74 }
/* LiteralStringAffix */ .chroma .sa { color: #e6db74 }
/* LiteralStringBacktick */ .chroma .sb { color: #e6db74 }
/* LiteralStringChar */ .chroma .sc { color: #e6db74 }
/* LiteralStringDelimiter */ .chroma .dl { color: #e6db74 }
/* LiteralStringDoc */ .chroma .sd { color: #e6db74 }
/* LiteralStringDouble */ .chroma .s2 { color: #e6db74 }
/* LiteralStringEscape */ .chroma .se { color: #ae81ff }
/* LiteralStringHeredoc */ .chroma .sh { color: #e6db74 }
/* LiteralStringInterpol */ .chroma .si { color: #e6db74 }
/* LiteralStringOther */ .chroma .sx { color: #e6db74 }
/* LiteralStringRegex */ .chroma .sr { color: #e6db74 }
/* LiteralStringSingle */ .chroma .s1 { color: #e6db74 }
/* LiteralStringSymbol */ .chroma .ss { color: #e6db74 }
/* LiteralNumber */ .chroma .m { color: #ae81ff }
/* LiteralNumberBin */ .chroma .mb { color: #ae81ff }
/* LiteralNumberFloat */ .chroma .mf { color: #ae81ff }
/* LiteralNumberHex */ .chroma .mh { color: #ae81ff }
/* LiteralNumberInteger */ .chroma .mi { color: #ae81ff }
/* LiteralNumberIntegerLong */ .chroma .il { color: #ae81ff }
/* LiteralNumberOct */ .chroma .mo { color: #ae81ff }
/* Operator */ .chroma .o { color: #f92672 }
/* OperatorWord */ .chroma .ow { color: #f92672 }
/* Comment */ .chroma .c { color: #75715e }
/* CommentHashbang */ .chroma .ch { color: #75715e }
/* CommentMultiline */ .chroma .cm { color: #75715e }
/* CommentSingle */ .chroma .c1 { color: #75715e }
/* CommentSpecial */ .chroma .cs { color: #75715e }
/* CommentPreproc */ .chroma .cp { color: #75715e }
/* CommentPreprocFile */ .chroma .cpf { color: #75715e }
/* GenericDeleted */ .chroma .gd { color: #f92672 }
/* GenericEmph */ .chroma .ge { font-style: italic }
/* GenericInserted */ .chroma .gi { color: #a6e22e }
/* GenericStrong */ .chroma .gs { font-weight: bold }
/* GenericSubheading */ .chroma .gu { color: #75715e }
