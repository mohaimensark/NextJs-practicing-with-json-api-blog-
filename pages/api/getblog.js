// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Route for an invaliad request:
//http://localhost:3000/api/getblog?slug=how_to_learn_mc


import * as fs from 'fs';

export default function handler(req, res) {
  
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{

    if(err){
        res.status(500).json({error:"Internar server error"})
    }

    console.log(req.query.slug)
     res.status(200).json(JSON.parse(data))
  })

 
}
