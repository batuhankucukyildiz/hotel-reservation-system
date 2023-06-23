


const topla =  (a, b ) => {
  return   a + b
}

function hesapla (a , b , cl) { 
    let result = cl(a,b)
    console.log(result)
}

hesapla(5,3,topla)