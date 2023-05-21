let audio = document.querySelector("audio");
let p = document.querySelectorAll("p");
let img = document.querySelector("img");
let getaudio = async () => {
  let url = await fetch("https://api.uomg.com/api/rand.music?format=json", {
    method: "GET",
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err + "音乐请求失败"));
  
  p[0].innerHTML = "歌名：";
  p[1].innerHTML = "歌手：";
  p[0].innerHTML += url.data.name;
  p[1].innerHTML += url.data.artistsname;
  img.src = url.data.picurl;
  audio.src = url.data.url;
};
window.onload = getaudio();
 let xys=async()=>{
   await getaudio();
   audio.play();
}
audio.addEventListener("ended", async() => {
 await getaudio();
  audio.play();
});
