
const share = async (req, res) => {

  res.set('Content-Type', 'text/html')

  const { title, description, imageUrl } = req.query

  console.log(`title :: ${title},  desc:${description} imageUrl:${imageUrl} `)

  if (!title || !description || !imageUrl) return res.status(400).send(Buffer.from(`<h2> title , description and imageUrl are required </h2`))

  // let imagePath = `https://firebasestorage.googleapis.com/v0/b/my-first-project-ce24e.appspot.com/o/pinpoint%2Fimage%2Fimage_${imageId}?alt=media&token=${imageToken}`


  return res.status(200).send(Buffer.from(
    `
    <title>  ${title}  </title>
    <meta content="${description}" name="Description">
    <meta property="og:description" content="${description}">

    <meta content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport"> 
    <meta content="chrome=1" http-equiv="X-UA-Compatible"> 
    <meta content="notranslate" name="google"> 
    <meta content="origin" name="referrer">
    <meta content="${title}" itemprop="name"> 
    <meta content="${title}" property="og:title">  
    <meta content="${imageUrl}" itemprop="image">
    <meta content="${imageUrl}" property="og:image"> 
    <meta content="256" property="og:image:width"> <meta content="256" property="og:image:height"> 
    <meta content="${description}" itemprop="description"> 
    <meta content="${title}" property="og:site_name">
    <meta content="summary" name="twitter:card"
  `
  ))
}


const twitterShare = () => {

  res.set('Content-Type', 'text/html')

  const { title, description, imageId, imageToken } = req.query

  console.log(`title :: ${title},  desc:${description} imageId:${imageId}, imageToken: ${imageToken} `)

  if (!title || !description || !imageId || !imageToken) return res.status(400).send(Buffer.from(`<h2> title , description , imageId and imageToken are required </h2`))

  let imagePath = `https://firebasestorage.googleapis.com/v0/b/my-first-project-ce24e.appspot.com/o/pinpoint%2Fimage%2Fimage_${imageId}?alt=media&token=${imageToken}`


  return res.status(200).send(Buffer.from(`
    <title>  ${title}  </title>
    <meta name="route-pattern" content="/">

    
    <meta name="current-catalog-service-hash" content="40dc28bd654b20f337468a532ff456ed5863889cfbb4e982b793597321d48d3f">
  
  
    <meta name="request-id" content="30A5:442C:9B4A2:B3C79:648F4791" data-pjax-transient="true"/><meta name="html-safe-nonce" content="5e9f12d56010494f9893e210bb57fa375ec0a4ef89476edd27e42d52811f0902" data-pjax-transient="true"/><meta name="visitor-payload" content="eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiIzMEE1OjQ0MkM6OUI0QTI6QjNDNzk6NjQ4RjQ3OTEiLCJ2aXNpdG9yX2lkIjoiNjc4NDQ3MTIwNDQ5MTExODQ3MyIsInJlZ2lvbl9lZGdlIjoiY2VudHJhbGluZGlhIiwicmVnaW9uX3JlbmRlciI6ImNlbnRyYWxpbmRpYSJ9" data-pjax-transient="true"/><meta name="visitor-hmac" content="53c5bb5244b9b3b5fd8c9ff2091ff3ef95c9f91b9d8eb548acda613e94a57f0b" data-pjax-transient="true"/>
  
  
  
      <meta name="page-subject" content="GitHub">
  
    <meta name="github-keyboard-shortcuts" content="dashboards" data-turbo-transient="true" />
    
  
    <meta name="selected-link" value="/" data-turbo-transient>
    <link rel="assets" href="https://github.githubassets.com/">
  
      <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I">
  
  <meta name="octolytics-url" content="https://collector.github.com/github/collect" />
  
    
  
    
  
  
  
  
    
  
      <meta name="user-login" content="">
  
    
  
      <meta name="viewport" content="width=device-width">
      
        <meta name="description" content="GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.">
        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
      <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
      <meta property="fb:app_id" content="1401488693436528">
      <meta name="apple-itunes-app" content="app-id=1477376905" />
        <meta name="twitter:image:src" content="https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="GitHub: Let’s build from here" /><meta name="twitter:description" content="GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea..." />
        <meta property="og:image" content="https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png" /><meta property="og:image:alt" content="GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea..." /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="GitHub: Let’s build from here" /><meta property="og:url" content="https://github.com/" /><meta property="og:description" content="GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea..." />
        
  
  
  
          <meta name="hostname" content="github.com">
  
  
  
          <meta name="expected-hostname" content="github.com">
  
      <meta name="enabled-features" content="TURBO_EXPERIMENT_RISKY,IMAGE_METRIC_TRACKING,GEOJSON_AZURE_MAPS">
  
  
    <meta http-equiv="x-pjax-version" content="f2e2f0035d29a836f4c6d8a2276b7b24cc0e5a91e8da5ff39fd1239f082ebce9" data-turbo-track="reload">
    <meta http-equiv="x-pjax-csp-version" content="3fd958552b06d480bf2d4f86f47f010847112a1fc1eebe3f85c0c280a4789f16" data-turbo-track="reload">
    <meta http-equiv="x-pjax-css-version" content="018d418015fb546e42e98b2e98d6ff391647149dc2111b3d325e86e9d6d0c3ac" data-turbo-track="reload">
    <meta http-equiv="x-pjax-js-version" content="e6490ea6cd32a1b95ffa65dcb90c90a2dc850903c182909ee7bca8bb7348c670" data-turbo-track="reload">
  
    <meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">
  
        <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
  
      <link rel="preload" href="/webgl-globe/data/data.json" as="fetch" type="application/json">
  
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/home-campaign-d4421b93e1ca.css" />
    <link rel="preload" href="https://github.githubassets.com/static/fonts/github/mona-sans.woff2" as="font" type="font/woff2" crossorigin>
    <meta name="is_logged_out_page" content="true">
  
  
  
      <link rel="canonical" href="https://github.com/" data-turbo-transient>
    <meta name="turbo-body-classes" content="logged-out env-production page-responsive header-overlay home-campaign">
  
  
    <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
  
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
  
    <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">
  `))

}

module.exports = {
  share
}

