/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: '/ jared daugherty /',
        author: 'Jared Daugherty'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blog',
                path: `${__dirname}/content/blog`
            }
        },
        'gatsby-transformer-remark'
    ]
}

