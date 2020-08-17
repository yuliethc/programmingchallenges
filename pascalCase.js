String.prototype.toJadenCase = function () {
  
    let splited = this.split(" ")
    let upper = splited.map(word=>(word[0].toUpperCase() + word.slice(1)))
    
    return upper.join(" ");
  };