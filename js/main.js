function reverse(num) {
    let arr = num.toString().split("")
    let reversed = arr.reverse().join("")
    return Number(alert(reversed))
}
reverse(Number(prompt()))
