var XLSX=require('xlsx');

describe ('Read data from excel',function(){

    it('Tc1',function(){
var workbook=XLSX.readFile('../testData/testData.xlsx');
var worksheet=workbook.Sheet['Sheet1']
var a=XLSX.utils.sheet_to_json(worksheet);
a.foreach(function(data){

console.log("The user Name:"+data.userName)

    
})
})
})