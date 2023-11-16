


function a (noOfDays) {
    let today = new Date();

    today.setDate(today.getDate() + noOfDays);
    
    const year = today.getFullYear();
    console.log("year",year);
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    console.log(month,"month");
    
    const day = today.getDate().toString().padStart(2, '0');
    console.log("day",day);
    
    const returnDate=`${day}-${month}-${year}`
     return returnDate
}

console.log(a(3));