const webpack = require('webpack');
const poststylus = require('poststylus');
const path = require('path');

export default {
    rootDir: __dirname,
    head: {
        titleTemplate: '%s',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0'},
            {property: 'og:image', content: ' '},
        ],
        script: [
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js', body: true},
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js', body: true},
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-url-parser/2.3.1/purl.min.js', body: true},
            {src: 'https://click.lucky.online/js/leadprofit.js', body: true}
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap'
            },

        ]
        // link: [{rel: 'icon', type: 'image/x-icon', href: '/site/main/img/favicon.png'}]
    },
    generate: {
        dir: path.resolve(__dirname, './generateStatic/'),
    },
    router: {
        linkExactActiveClass: 'active'
    },
    loading: "./components/ui/page-loading",
    plugins: [
        {src: './plugins/vue-carousel.js', ssr: false},
        {src: './plugins/vue-scrollto.js'},
        {src: './plugins/vue-scrollactive.js', ssr: false},
        {src: './plugins/vue-wow.js', ssr: false},
        {src: './components/ui/index.js'},
        {src: './components/icons/index.js'},
    ],
    css: ['@/assets/stylus/main.styl'],
    build: {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    stylus: {
                        'sourceMap': true,
                        use: [poststylus(['autoprefixer'])],
                        import: [
                            path.resolve(__dirname, 'assets/stylus/variables.styl'),
                            path.resolve(__dirname, 'assets/stylus/responsive.styl')
                        ]
                    }
                }
            })
        ]
    },
    axios: {
        baseURL: `/`
    },
    modules: [
        '@nuxtjs/axios',
        'portal-vue/nuxt'
    ]
}

