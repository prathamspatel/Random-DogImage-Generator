const ImgGetter = document.getElementById('image')
const btn = document.getElementById('clicked')


const thirdparty = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      ImgGetter.innerHTML = ` <img src='${json.message}' width=300  height=300 />`
    })
}
btn.onclick = () => thirdparty()
