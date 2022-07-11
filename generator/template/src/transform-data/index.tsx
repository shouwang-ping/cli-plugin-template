
// 后端转前端数据
function jsonToFeData(ori: any) {
  let bb = ori.map((k: object) => {
    return [k[Object.keys(k)[0], k[Object.keys(k)[1]]]]
  })


  return bb
}


// 前端转后端数据
function feDataToJson() {
  return {
    
  }
}




export default {
  jsonToFeData,
  feDataToJson,
}

let res = [{
  source: 'aa',
  sourceType: 'bb'
}, {
  source: 'aa',
  sourceType: 'bb'
}]
jsonToFeData(res)


let tt = [
  ['aa', 'bb']
]
feDataToJson()