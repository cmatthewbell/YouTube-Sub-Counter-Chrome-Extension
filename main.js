function getYouTubeSubs() {
  let url =
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCMWAPrl4Jif3aGmgrzHtulg&key=AIzaSyCQrDuIj5h-7ohInAoeVhGceSxN2s8DmyU";

  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let data = res.items[0].statistics.subscriberCount;
      document.querySelector("#sub-count").innerHTML = data;
    });
}

getYouTubeSubs();
