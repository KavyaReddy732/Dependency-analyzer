const fileInput = document.getElementById('file-selector')
fileInput.addEventListener('change', async (event) => {
    const text = await event.target.files[0].text()
    let trimmed = text.split("\n").map(e => e.trim());
    console.log(trimmed)

    // let N, M;
    // let packages = [], dependencies = [];
    // N = trimmed[0]
    // console.log(N)

})