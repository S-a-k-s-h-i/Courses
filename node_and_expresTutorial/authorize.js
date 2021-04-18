const authorize = (req,res,next) => {
   const { user } =req.query;
   if(user === 'john'){
       //we added the user to the request object and then we can use this in any route
       req.user = {name:'john',id:1}
       next()
   }else{
       res.status(401).send('Unauthorized')
   }
}
module.exports = authorize