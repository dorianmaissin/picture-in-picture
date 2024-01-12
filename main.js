const video = document.querySelector("#video")
const shareScreeenBtn = document.querySelector("#shareBtn");
const selectBtn = document.querySelector("#selectBtn")

async function mediaSource() {
    try{
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = captureStream
        video.play()
    }catch{
        alert("404 error")
    }
}


selectBtn.addEventListener('click', mediaSource)


shareScreeenBtn.addEventListener('click', async() => {
  await video.requestPictureInPicture()
})