
const share = async (req, res) => {    
    res.set('Content-Type', 'text/html')
    const { title, description, image } = req.query

    if (!title || !description || !image) return res.status(400).send(Buffer.from(`<h2> title , description and image are required </h2`))


    return res.status(200).send(Buffer.from(`         
        <head>
           <title>${title}</title>
           <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
           <meta property="og:type" content="article" />
           <meta property="og:title" content=${title} />
           <meta property="og:description" content=${description} />
           <meta property="og:image" content=${image} />
        </head>
        <body>
         ${image}
        </body>
   `))
}

module.exports = {
    share
}

