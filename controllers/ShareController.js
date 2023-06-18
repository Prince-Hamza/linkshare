
const share = async (req, res) => {
    res.set('Content-Type', 'text/html')
    const { title, description, imageId, imageToken } = req.query


    if (!title || !description || !imageId || !imageToken) return res.status(400).send(Buffer.from(`<h2> title , description , imageId and Image Token are required </h2`))

    console.log(`title :: ${title},  desc:${description} imageId:${imageId}, imageToken: ${imageToken} `)

    // let first = image.substring(0, image.indexOf('/o/') + 3)
    // let second = image.substring(image.indexOf('/o/') + 3, image.indexOf('?')).split('/').join('%2F')
    // let third = image.substring(image.indexOf('?'), image.length)
    // let imgPath = first + second + third
    // console.log(`first :: ${first}, second : ${second}, third : ${third} `)

    let imagePath = `https://firebasestorage.googleapis.com/v0/b/my-first-project-ce24e.appspot.com/o/pinpoint%2Fimage%2Fimage_${imageId}?alt=media&token=${imageToken}`


    //     return res.status(200).send(Buffer.from(`         
    //         <head>
    //            <title>${title}</title>
    //            <meta property="og:title" content="${title}" />
    //            <meta property="og:description" content="${description}" />
    //            <meta property="og:image" content="${imgPath}" />
    //         </head>
    //         <body>
    //        <h1>  path : ${imgPath}</h1>
    //         </body>
    //    `))



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
    <meta content="${imagePath}" itemprop="image">
    <meta content="${imagePath}" property="og:image"> 
    <meta content="256" property="og:image:width"> <meta content="256" property="og:image:height"> 
    <meta content="${description}" itemprop="description"> 
    <meta content="${title}" property="og:site_name">
    <meta content="summary" name="twitter:card"
  `
    ))


}

module.exports = {
    share
}

