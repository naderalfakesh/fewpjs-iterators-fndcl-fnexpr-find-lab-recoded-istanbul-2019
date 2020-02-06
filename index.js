const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
    const res =  arr.find(function(element){return element.result === "W" });
    res ? res.year : res;
}
