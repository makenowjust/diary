module.exports = {
  siteMetadata: {
    title: '℘ make now just',
    copyright: {
      author: 'TSUYUSATO Kitsune',
      github: 'MakeNowJust',
      year: '2016-2018',
    },
    quote: 'if you wanna break free you better listen to me', // From "Scatman's World" by Scatman John
    siteUrl: 'https://diary.quine.codes/',
    description: "MakeNowJust's diary",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
