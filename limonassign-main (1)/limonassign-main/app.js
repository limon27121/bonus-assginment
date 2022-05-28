const array = [];

const getVals = () => {
    const dob = document.getElementById("dob").value;
    const cdate = document.getElementById("cdate").value;

    const modify_dob = getSecondPart(dob)
    const modify_cdate = getSecondPart(cdate)


    // console.log(modify_dob, modify_cdate)

    birthYearCal(modify_dob, modify_cdate);
}




const birthYearCal = (a, b) => {
    let year = b - a;

    array.push(year)
    let rslt;
    rslt = array.map(x => x);
    const show = document.getElementById("year");
    show.innerHTML = rslt;
    console.log(rslt);
}



const getSecondPart = (str) => {
    return str.split('-')[2] || str.split('/')[2];
}
