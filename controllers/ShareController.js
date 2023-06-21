



const share = async (req, res) => {

  res.set('Content-Type', 'text/html')

  const { title, description, imageUrl, city, date } = req.query

  console.log(`title :: ${title},  desc:${description} imageUrl:${imageUrl}, city:${city} `)

  if (!title || !description || !imageUrl || !city || !date) return res.status(400).send(Buffer.from(`<h2> title,description,imageUrl,city and date are required </h2`))


  let newLine = `\u240D`
  let newLine2 = `\u000A`
  var Omega = '\u03A9';


  return res.status(200).send(Buffer.from(
    `
    <title>  ${title}  </title>
    <meta content="${imageUrl}" itemprop="image">
    <meta content="${imageUrl}" property="og:image"> 
    <meta content="\n 
    ${city} 
    ${date} \n \n 
    ${description} \n ${Omega} ${newLine} ${newLine2} ${Omega} "
     name="Description">
    <meta property="og:description" content="\n 
    ${city} \n \n 
    ${date} \n \n 
    ${description} \n ${Omega} ${newLine} ${newLine2} ${Omega} ">

    <meta content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport"> 
    <meta content="chrome=1" http-equiv="X-UA-Compatible"> 
    <meta content="notranslate" name="google"> 
    <meta content="origin" name="referrer">
    <meta content="${title}" itemprop="name"> 
    <meta content="${title}" property="og:title">  
    
    <meta content="256" property="og:image:width"> 
    <meta content="256" property="og:image:height"> 


    <meta content="\n
     ${city} \n \n 
     ${date} \n \n 
     ${description} \n  ${Omega} ${newLine} ${newLine2} ${Omega} " itemprop="description"> 
    <meta content="${title}" property="og:site_name">
    <meta content="summary" name="twitter:card">

  
    <script>
           window.location.replace('https://www.google.com')
    </script>
   
  `
  ))
}


const twitterShare = (req,res) => {

  res.set('Content-Type', 'text/html')

  const { title, description, imageUrl } = req.query

  console.log(`title :: ${title},  desc:${description} imageUrl:${imageUrl} `)

  if (!title || !description || !imageUrl) return res.status(400).send(Buffer.from(`<h2> title , description and imageUrl are required </h2`))

  return res.status(200).send(Buffer.from(`

  
    <title>  ${title}  </title>

    
    
  
  
  
    <meta name="page-subject" content="${title}">
  
    <meta name="github-keyboard-shortcuts" content="dashboards" data-turbo-transient="true" />
    
  
    <meta name="selected-link" value="/" data-turbo-transient>

    <link rel="assets" href="https://github.githubassets.com/">
    
  
      <meta name="viewport" content="width=device-width">
      
        <meta name="description" content="${description}">

        
        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="${title}">

      <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="${title}">

      
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image:src" content="${imageUrl}" />
      <meta name="twitter:site" content="@github" />
      <meta name="twitter:card" content="summary_large_image" />

     <meta property="og:image" content="${imageUrl}" />
     <meta property="og:description" content="${description}" />
        
    <meta name="hostname" content="github.com">  
    <meta name="expected-hostname" content="github.com">
  
  
    <meta property="og:image:width" content="500">
    <meta property="og:image:height" content="500">
  
    <link rel="preload" href="/webgl-globe/data/data.json" as="fetch" type="application/json">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/home-campaign-d4421b93e1ca.css" />
    <link rel="preload" href="https://github.githubassets.com/static/fonts/github/mona-sans.woff2" as="font" type="font/woff2" crossorigin>
    <meta name="is_logged_out_page" content="true">
  
  
  
    <link rel="canonical" href="https://github.com/" data-turbo-transient>
    <meta name="turbo-body-classes" content="logged-out env-production page-responsive header-overlay home-campaign">
  

    <script>
        window.location.replace('https://www.google.com')
    </script>

    
  `))

}

module.exports = {
  share,
  twitterShare
}

