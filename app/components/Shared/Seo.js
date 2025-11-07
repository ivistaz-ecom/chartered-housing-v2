"use client"
import React from "react"

function NextSeo({ title, description, path, metaImage }) {
  const domainName = "https://charteredhousing.com"

  return (
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/favicon-150x150.png" />
      <link rel="canonical" href={`${domainName}${path}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${domainName}${path}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* ✅ Fixed Schema (now SSR-compatible) */}
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Chartered Housing",
            "alternateName": "CH",
            "url": "https://charteredhousing.com/",
            "logo": "https://charteredhousing.com/logo.svg",
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${domainName}${path}?search={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            "sameAs": [
              "https://www.instagram.com/charteredhousing?igsh=ZzJkamVuaDZjazE0",
              "https://www.facebook.com/CharteredHousing/",
              "https://in.linkedin.com/company/chartered-housing-private-limited",
              "https://www.youtube.com/@charteredhousing25"
            ]
          }),
        }}
      />
    </head>
  )
}

export default NextSeo
