import videojs from "video.js";

const videoEl = document.createElement("video");
const player = videojs(videoEl, {
  sources: [{ src: "https://vjs.zencdn.net/v/oceans.mp4", type: "video/mp4" }],
});
player.on("ended", () => {
  console.log("video ended");
});
