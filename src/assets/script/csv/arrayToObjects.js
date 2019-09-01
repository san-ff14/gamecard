export default (array, params={}) => {
  const HEAD_INDEX = params.headIndex || 0 // スキップサイズ
  const HEAD_SIZE = params.headSize || 1 // ヘッダー行数
  const BODY_INDEX = HEAD_INDEX + HEAD_SIZE

  if(!array) throw new Error('ArrayがNullです')
  if(array.length < HEAD_INDEX) throw new Error('Arrayの行数が少ないようです')

  const HEAD_ROW = array[HEAD_INDEX] // ヘッダー行
  var list = []
  
  for(var ri=BODY_INDEX; ri<array.length; ri++){
    const row = array[ri]
    var item = {}
    for(var i=0; i<HEAD_ROW.length; i++){
       if(i > row.length-1) continue
      const key = HEAD_ROW[i].replace(/ /g, "")
      const value = row[i].replace(/ /g, "")      
      if(key!=null && key!=""){
        const isArrayValue = false
        if(isArrayValue){
          item[key] = value.split(",")
        }else{
          item[key] = value
        }
      }
    }
    list.push(item)
  }

  return list
}