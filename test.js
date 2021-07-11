
function decodeDateTimeString(datetimeString) {
    
    var temp = datetimeString.split(" ")
    var time = temp[0]
    var dateArray = temp[1].split("/")
    var day = dateArray[0]
    var month = dateArray[1]
    var year = dateArray[2]
    return year + "-" + month + "-" + day + "T" + time
}

function encodeDateTimeString(datetimeString) {
    var temp = datetimeString.split("T")
    var time = temp[1]
    var dateArray = temp[0].split("-")
    var year = dateArray[0]
    var month = dateArray[1]
    var day = dateArray[2]
    return time + " " + day + "/" + month + "/" + year 
}
var input1 = "2021-07-02T21:30" // => 21:30 02/07/2021 using encodeDateTimeString()
var input2 = "21:30 02/07/2021" // => 2021-07-02T21:30 using decodeDateTimeString()
console.log("Encode datetime string: ", encodeDateTimeString(input1))
console.log("Decode datetime string: ", decodeDateTimeString(input2))

// http://localhost:3000/add-movie?ten_phim=asd&ngay_cong_chieu=asd&poster=Screen+Shot+2021-04-22+at+19.07.25.png&thoi_luong=sasad