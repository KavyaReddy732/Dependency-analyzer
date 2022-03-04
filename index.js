const fileInput = document.getElementById('file-selector')
fileInput.addEventListener('change', async (event) => {
    const text = await event.target.files[0].text()
    if (text.length === 0) {
        throw ('the file is empty')
    }
    const trimmed = text.split("\n").map(e => e.trim());
    let N = trimmed[0], packages = [], dependencies = [], M; //number of packages to install

    for (let i = 1; i <= N; i++) {
        packages.push(trimmed[i].split(','))
        M = trimmed[i + 1]
        dependencies = trimmed.slice(i + 2).filter(e => e !== '');
    }

    var packageObjects = packages.map(package => ({ name: package[0], version: package[1] }));//name and version of packages to install
    console.log(packageObjects, 'packages')
    let result = [];
    let dependencyPairs = [];

    for (i = 0; i < dependencies.length; i++) {
        result.push(dependencies[i].split(','))
        function splitArrayIntoChunksOfLen(arr, len) {
            let chunks = [], i = 0, n = arr.length;
            while (i < n) {
                chunks.push(arr.slice(i, i += len));
            }
            const dependencyObjects = chunks.map(dependency => ({ name: dependency[0], version: dependency[1] }))
            return dependencyObjects;
        }
        dependencyPairs.push(splitArrayIntoChunksOfLen(result[i], 2));
    }

    console.log(dependencyPairs) // dependencies to install 
})