/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTrianglesCount = 0;

    preferences.forEach((item, i, arr) => {
        let b = arr[i];
        let c = arr[b - 1];
        let a = arr[c - 1];

        if (i + 1 === a && i + 1 !== c) {
            loveTrianglesCount++;
        }
    });

    return loveTrianglesCount/3;
};
