const sortedSquares = (nums: number[]): number[] => {

    const resultArray = []; 

    let leftMarker = 0; 
    let rightMarker = nums.length - 1;
    let resultArrayIndex = nums.length - 1;

    while(leftMarker <= rightMarker) {
        const leftNumber = nums[leftMarker] ** 2; 
        const rightNumber = nums[rightMarker] ** 2;

        if(leftNumber >= rightNumber) {
            resultArray[resultArrayIndex] = leftNumber; 
            leftMarker++;
            resultArrayIndex--; 
        } else {
            resultArray[resultArrayIndex] = rightNumber;
            rightMarker--;
            resultArrayIndex--;
        }
    }

    return resultArray; 
    
}

console.log(sortedSquares([-4, -2, 0, 2, 2, 10, 21]))