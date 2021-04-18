const express = require("express")
const app = express();
const { colors } = require('./public/data.js')
app.get('/',(req,res) => {
   res.send('<h1> Home Page</h1><a href="/api/colors">products</a>')
})

app.get('/api/products',(req,res) => {
    const newColors = colors.map((c) => {
        const { id ,color, category , type} = c
        return { id, color, category, type}
    })
    res.json(newColors)
})
app.get('/api/products/:id',(req,res) => {
    const singleColor = colors.find((color) => color.id ===parseInt(req.params.id))
    if(!singleColor) res.status(404).send('product with the given id was not found')
    else res.json(singleColor)
})

app.get('/api/v1/query', (req,res) => {
    const { search,limit} = req.query
    let sortedColors = [...colors]
    if(search){
        sortedColors =sortedColors.filter((c) => {
            return c.color.startsWith(search)
        })
    }
    if(limit){
        sortedColors = sortedColors.slice(0,Number(limit))
    }
    //ALWAYS WHEN YOU SET UP RETURN STATEMENTS , ALWAYS USE RETURN
    // if(sortedColors.length<1) return res.status(200).send('no products matched your needs')
    if(sortedColors.length<1) return res.status(200).json({success:true,data:[]})
    res.status(200).json(sortedColors)
})

app.listen(3000,() => {
    console.log('listening on port 3000')
})