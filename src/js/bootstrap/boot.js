var arr = [];
$(".submit").on("click", function() {
    var name = $("#name").val();
    var grade = $("#grade").val();
    if (!name && !grade) {
        return false;
    }



    arr.push({
        name: name,
        grade,
        grade
    })

    console.log(arr)

})