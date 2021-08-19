export default {
  github: 'https://github.com/moatorres/typetags',
  docsRepositoryBase:
    'https://github.com/moatorres/typetags/blob/master/docs/pages', // base URL for the docs repository
  titleSuffix: ' – TypeTags',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © Moa Torres`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>
        <b>TypeTags</b> String Representations of Node.js Built-in Objects
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="TypeTags: Node.js built-in string representations"
      />
      <meta
        name="og:title"
        content="TypeTags: Node.js built-in string representations"
      />
    </>
  ),
}
