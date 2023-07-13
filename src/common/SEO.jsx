import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ title = '', desc = '', route = '' }) {
    const baseUrl = "https://Ecommerce.co";
    const description = "Dolor elit voluptate minim reprehenderit sint ullamco.";
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc || description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={`${baseUrl}${route}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${baseUrl}${route}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc || description} />
            <meta property="og:image:alt" content="Ecommerce.co - Brand store for clothes" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Ecommerce.co" />
            <meta name='application-name' content="Ecommerce.co" />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content="Ecommerce.co" />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='theme-color' content='#FFFFFF' />
        </Head>
    );
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};

export default SEO;