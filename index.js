const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
    const res =  arr.find(function(element){console.log(element["result"] === "W");return element["result"] === "W" });
    console.log(res)
    res != undefined ? res["year"] : res;
}
