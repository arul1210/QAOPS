const {test, expect}= require("@playwright/test")
const ExcelJS = require('exceljs')

//filter the any specific cell by using another cell value
//e.p filter and update the price value using name


async function writeexcelTest (SearchText,replaceText,change,filePath)
{
   
   const Workbook = new ExcelJS.Workbook()
await Workbook.xlsx.readFile('C:/Users/arula/Downloads/download.xlsx')
const worksheet = Workbook.getWorksheet('Sheet1')
const output = await readExcelTest(worksheet,SearchText)

const cell = worksheet.getCell(output.row,output.column+change.colChange) //we can fix the row and change the col value
cell.value=replaceText//update the value
await Workbook.xlsx.writeFile(filePath); //save the file after update
}
///Users/arula/Downloads/excelDownloadTest.xlsx



async function readExcelTest(worksheet,SearchText) {
   let output={row:-1,column:-1}
   worksheet.eachRow((row,rowNumber)=>
{
    row.eachCell((cell,colNumber)=>
{
   if(cell.value===SearchText)
   {
       
    output.row =rowNumber
    output.column =colNumber
    
   }
})
})

return output
}


test('upload and Download files', async ({page})=>
{
   const textName = "Banana";
   const changeText = '1000';
   await page.goto("https://rahulshettyacademy.com/upload-download-test/")
   const downloadpromise = page.waitForEvent('download')
   await page.getByRole('button',{name:'Download'}).click();
   const downloadfile =await downloadpromise
   await downloadfile.saveAs("C:/Users/arula/Downloads/download.xlsx")
   await writeexcelTest(textName,changeText,{rowChange:0,colChange:2},"C:/Users/arula/Downloads/download.xlsx")
    await page.locator('#fileinput').click()
   await page.locator('#fileinput').setInputFiles('C:/Users/arula/Downloads/download.xlsx')
   await page.screenshot({path:'screenshot.png'})

   //Validating the changed amount in ui
   const desiredtext = await page.getByText(textName)
   const finaltext = await page.getByRole('row').filter({has: desiredtext})
   await expect(finaltext.locator('#cell-4-undefined')).toContainText(changeText)


})