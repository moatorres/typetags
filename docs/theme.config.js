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
  footerText: `© ${new Date().getFullYear()} Moa Torres`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <b className="mr-1">TypeTags</b>
      <span className="text-gray-600 font-normal hidden md:inline">
        String Representations of Node.js Built-in Objects
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="TypeTags: String Representations of Node.js Built-in Objects"
      />
      <meta
        name="og:title"
        content="TypeTags: String Representations of Node.js Built-in Objects"
      />
    </>
  ),
}
