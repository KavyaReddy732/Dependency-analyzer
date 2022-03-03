const fileInput = document.getElementById('file-selector')
fileInput.addEventListener('change', async (event) => {
    const text = await event.target.files[0].text()
    let trimmed = text.split("\n").map(e => e.trim());
    let N = trimmed[0];
    let packages = [], dependencies = [];
    let M;
    for (let i = 1; i <= N; i++) {
        packages.push(trimmed[i])
        M = trimmed[i + 1]
        dependencies = trimmed.slice(i + 2)
    }
    console.log(N, packages, M, dependencies)

})