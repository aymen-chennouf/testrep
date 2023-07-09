
//cow controller

// this the fs module is responsible for reading and writing into the files from the filesystem
const fs = require('fs');

// this for the models 


// this is the path to the json file (database file)
const pathfile = '/Users/macbook/Desktop/test/server/db.json';


// this function for loading the data from the json file
function loadjason  ()  {
    return JSON.parse(
        fs.existsSync(pathfile) ? fs.readFileSync(pathfile, 'utf8').toString() : 'error'
    ) ;
}


// this function for saving the data from the json file
function savejason ( data = '')  {
    fs.writeFileSync(pathfile,JSON.stringify(data,null,2));
}

// this functin for adding a new cow to the json file
function addcow  (cow)  {
    const data = loadjason(); // load the json file
    data.cows.push(cow); // add the cow to the json data 
    savejason(data);// save the data to the json file
}

//this function for know if cow is exist or no
function cowexist(cow_number = null){
    const data = loadjason(); // load the json file
    let i = 0;
    let length = data.cows.length; // for know how many cow we have in the file
    while (data.cows[i].cow_number != cow_number && i < length) {
        i ++ ;
    }// search for the cow 
   if (i === length){
        return null; // the cow is not exist in the file
    }else{
        return i; // the cow exist in the file and we return th index of the cow
    }
}


// this function for deleting a cow from the json file
function deletecow (cow_number = null) {
    const i = cowexist(cow_number);
    console.log(i);
    if (i===null){
        console.log(" please enter a valid cow number "); // a error message when the cow number is invalid
    }else{
        const data = loadjason(); // load the json file
        data.cows.splice(i,1); // remove the cow from the json file
        savejason(data); // save the json file
     }
    
}

//this function for return all the cows in the file 
function allcows(){
    const data = loadjason(); // load the json file
    return data.cows; // return all the cows
     
}

//this function for search a cow
function searchcow(){
    const i = cowexist(cow_number);
    if (i===null){
        console.log(" please enter a valid cow number "); // a error message when the cow number is invalid
    }else{
        const data = loadjason(); // load the json file
        return data.cows[i]; // return the cow from the json file
     }
}

//this function for update the cow
function updatecow(cow_number , {date_of_entry = null, breed = null}){
    const i = cowexist(cow_number);
    const data = loadjason(); // load the json file
    if (date_of_entry != null){
        data.cows[i].date_of_entry = date_of_entry; // update the date of entry
    }
    if (breed != null){
        data.cows[i].breed= breed; // update the breed
    }
    savejason(data); // save the json file

}

//this function returns the cows number
function cowNumber(){
    data = loadjason(); // load the json file
    return data.cows.length;
}



/*________________________________________________________________*/

//this party for the births

// this function for adding a new birth 
function addBirth(birth){
    const cow_number = birth.cow_number;
    const Birth = {date_of_calving : birth.date_of_calving}
    let i = cowexist(cow_number);
    if (i === null) {
        console.log('the cow number is wrong');
    } else {
        const data = loadjason(); // load the json file
        data.cows[i].births.push(Birth); // add the birthinto the cow births  
        savejason(data); // save the json file
        console.log ('the birth is addded ');
    }
}

//this function for return the  births of cow
function getCowBirths(cow_number){
    let i = cowexist(cow_number);
    if (i === null) {
        console.log('the cow number is wrong');
    } else {
        const data = loadjason(); // load the json file
        return data.cows[i].births; // return all cow births  
    }
}

//this function for return all cows birhs
function getCowsbirths(){
    const data = loadjason(); // load the json file
    const births = [];
    for (let i = 0; i < cowNumber(); i++) {
        data.cows[i].births.forEach((birth)=>{
            births.push({ "cow_number" : data.cows[i].cow_number,  "date_of_calving" : birth.date_of_calving });
        }); //read the births for every cow and put it in the array
    }
    return births; // return all births
}

 
/*________________________________________________________________*/
// this part for the dally milk production

//this function for return all daily milk production
function getDailyMilkProduction(){
    const data = loadjason(); // load the json file
    return data.daily_milk_production // return all  the the daily milk production  
     
}


//this function for adding a dally milk production 
function addDallyMilkProduction(daily_milk_production){
        console.log(daily_milk_production)
        const data = loadjason(); // load the json file
        data.daily_milk_production.push(daily_milk_production); // add the the daily milk production into the cow   
        savejason(data); // save the json file
    
}



// this function for getting the sum of daily milk production 
function totalMilkProduction(){
    const data = loadjason(); // load the json file
    const daily_milk_production = data.daily_milk_production;
    let total =0;

    for (let i = 0; i < daily_milk_production.length; i++) {
        daily_milk_production.forEach((element)=>{
            total = total+parseInt(element.amount_of_milk);
        }); //the sum of all daily milk production
    }
    return total; // return the sum
}


/*________________________________________________________________*/
// this part for the medical examination


// this function for adding a new medical examination
function addMedicalExamination(Medical_examination){
    const cow_number = Medical_examination.cow_number;
    const medical_examination = {
        examination_day : Medical_examination.examination_day,
        disease : Medical_examination.disease
    }
    let i = cowexist(cow_number);
    if (i === null) {
        console.log('the cow number is wrong');
    } else {
        const data = loadjason(); // load the json file
        data.cows[i].medical_examinations.push(medical_examination); // add a midecal examination into the cow births  
        savejason(data); // save the json file
    }
}

// this function for getting the midecal examinations for the cow
function allMidcalExaminationsCow(cow_number){
    let i = cowexist(cow_number);
    if (i === null) {
        console.log('the cow number is wrong');
    } else {
        const data = loadjason(); // load the json file
        return data.cows[i].medical_examinations ; // return all the midecal examinations for a cow

    }
}

// this function for getting the midecal examinations for the cows
function getMidecalExaminations(){
    const data = loadjason(); // load the json file
    const medical_examinations = [];
    for (let i = 0; i < cowNumber(); i++) {
        data.cows[i].medical_examinations.forEach((element)=>{
            medical_examinations.push({
                cow_number : data.cows[i].cow_number ,
                examination_day : element.examination_day,
                disease : element.disease

            });
        }); //read the medical examinations for every cow and put it in the array
    }
    return medical_examinations; // return all the medical examinations
}


module.exports  = {
    addcow,
    deletecow,
    updatecow,
    searchcow,
    allcows ,
    cowexist,
    addBirth,
    getCowBirths,
    getCowsbirths,
    getDailyMilkProduction,
    addDallyMilkProduction,
    totalMilkProduction,
    addMedicalExamination,
    allMidcalExaminationsCow,
    getMidecalExaminations
    
} ; 