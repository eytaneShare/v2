function getByCategory(category, callBack) {
  
    global.dbo.collection("products").find({categorie:category}).toArray(function (err, result) {
      if (err) throw err;
      //console.log(result);
    
      return callBack(result)
    });
  }




module.exports = {
  getByCategory  
}