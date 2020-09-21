function getProducts(callBack) {
 
    global.dbo.collection("products").find().toArray(function (err, result) {
      if (err) throw err;
      

      return callBack(result)
    
    })}


module.exports = {
  getProducts
}