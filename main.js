const video = document.querySelector("#video")
const shareScreeenBtn = document.querySelector("#shareBtn");

async function mediaSource() {
    try{
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = captureStream
        video.play()
    }catch{
        alert("404 error")
    }
}


mediaSource()


shareScreeenBtn.addEventListener('click', async() => {
  await video.requestPictureInPicture()
})