const each = function (arr, func1, func2) {
    arr.forEach(item1 => {        
        item1.split('').forEach(item2 => {
            func2 && func2(item2)
        })
        func1 && func1(item1)
    })
}

export default each