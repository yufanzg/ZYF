export let log=(e)=>{
  console.log(e)
}
//html之间交流数据的方法
export let href=()=>{
  let name = location.search;
  let name0 = name.slice(name.indexOf("=") + 1);
}