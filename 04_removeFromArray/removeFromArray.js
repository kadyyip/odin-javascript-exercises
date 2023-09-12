const removeFromArray = function(nums, ...numsToRemove) {
    let result = [];
    numsToRemove = [...numsToRemove];
    console.log(numsToRemove)
    for (const num of nums) {
        if (numsToRemove.includes(num)) {
            continue;
        }
        result.push(num);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
