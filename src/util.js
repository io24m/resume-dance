const each = function (arr, i, func1, func2) {
    let count = 0;
    let strItem2 = ''
    let strItem1 = ''
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        for (let index1 = 0; index1 < element.length; index1++) {
            const element1 = element[index1];
            strItem2 += element1
            if (count == i) { 
                func2 && func2(strItem2)
                return
            }
            count++
        }
        strItem1 += element 
        func1 && func1(strItem1)
    }
}

export default each