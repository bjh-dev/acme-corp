import groq from 'groq'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/global/Layout'
import RenderSections from '@/components/RenderSections'
import { client } from '@/lib/sanity'
import { getSlugVariations, slugParamToPath } from '@/lib/urls'

const pageFragment = groq`
...,
content[] {
  ...,
  cta {
    ...,
    route->
  },
  ctas[] {
    ...,
    route->
  }
}`

const siteConfigQuery = groq`
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `
/**
 * Fetches data for our pages.
 *
 * The [[...slug]] name for this file is intentional - it means Next will run this getServerSideProps
 * for every page requested - /, /about, /contact, etc..
 * From the received params.slug, we're able to query Sanity for the route corresponding to the currently requested path.
 */

export const getStaticPaths: GetStaticPaths = async () => {
    const { allRoutesSlugs } = await client.fetch(groq`{
    // get all documents that are type of route as long as they are not a draft
    "allRoutesSlugs": *[
      _type == "route" &&
      !(_id in path("drafts.**"))
    ].slug.current,
  }`)
    const allRoutes = allRoutesSlugs.map((slug: string) =>
        slug === '/' ? '/' : `/${slug}`
    )

    return {
        paths: allRoutes,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (props) => {
    const slug = slugParamToPath(props.params?.slug)
    const config = await client.fetch(siteConfigQuery)
    let data

    // Frontpage - fetch the linked `frontpage` from the global configuration document.
    if (slug === '/') {
        data = await client
            .fetch(
                groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ${pageFragment}
          }
        }
      `
            )
            .then((res) =>
                res?.frontpage ? { ...res.frontpage, slug } : undefined
            )
    } else {
        // Regular route
        data = await client
            .fetch(
                // Get the route document with one of the possible slugs for the given requested path
                groq`*[_type == "route" && slug.current in $possibleSlugs][0]{
          page-> {
            ${pageFragment}
          }
        }`,
                { possibleSlugs: getSlugVariations(slug) }
            )
            .then((res) => (res?.page ? { ...res.page, slug } : undefined))
    }

    if (data?._type !== 'page') {
        return {
            notFound: true,
        }
    }

    return {
        props: { ...data, config } || {},
    }
}

const LandingPage = ({
    title = '',
    description,
    slug,
    disallowRobots,
    content,
    openGraphImage,
    config,
    ...rest
}) => {
    return (
        <>
            <Layout config={config}>
                {content && <RenderSections sections={content} />}
            </Layout>
        </>
    )
}

export default LandingPage
