function likes(names) {
    msg = ""
     if (names.length === 0 ){
       msg = "no one likes this"
     }else if (names.length === 1 ){
       msg = names[0] + " likes this"
     }else if (names.length === 2 ){
       for (let i = 0; i < 3; i++) {
         msg += names[i] + ","
       }
       msg += " like this"
     }
     return msg
   }