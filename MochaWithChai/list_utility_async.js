var list = [];

function setList(items) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      list = list.concat(items);
      resolve(list);
    }, 1600);
  });
}

function addItem(item) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      list.push(item);
      resolve(list);
    }, 1600);
  });
}

module.exports = {
  setList, addItem
}