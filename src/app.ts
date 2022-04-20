// import * as fs from 'fs'
// const fs=require('fs')
// let dir='../uploads/student/studentId'
// // fs.mkdirSync('stuff');

// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir, { recursive: true });
// }

// else{
//     console.log("already found a folder with same name!!!");
    
// }

// fs.writeFileSync('../uploads/student/studentId/index.txt','😍jpg')



// fs.writeFile('../uploads/student/studentId/index.txt','adasdasdsa',()=>{
//     console.log('done writing...')
// })



// const fs = require('fs');

// import * as fs from 'fs'

// if(!fs.existsSync("studentId"))
// {
// 	fs.mkdir("../uploads/student/studentId", (err)=>{
		
// 		if(err) 
//         return err;
//         try{
//             fs.writeFile("../uploads/student/studentId/newData.html", "This is a new Dirasdfdsafdsfdasectory and File", ()=>{
//                 console.log("Directory and File Saved ");
//             })
//         }catch(err){
//             console.log(err);
            
//         }

// 	});
// }

// if(!fs.existsSync("studentId :")

// 	fs.mkdir("../uploads/student/studentId", ()=>{
        
//         fs.writeFile("../uploads/student/studentId/newData.html","This is my file",(err)=>{
//             if(err)
//             return err
       

//         fs.writeFile("C:/Users/umer/Desktop/Full_Project/Backend/uploads/student/newData.html", "Hey 3there!", function(err) {
//             if(err) {
//                 return console.log(">>>>>>>>>>>our error",err);
//             }
//             console.log("The file was saved!");
//         }); 
          
          
        // try{
        //     fs.writeFile("../uploads/student/studentId/newData.html", "This is a new Dirasdfdsafdsfdasectory and File", ()=>{
        //         console.log("Directory and File Saved ");
        //     })
        // }catch(err){
        //     console.log(err);
            
        // }

	// });

import * as fs from 'fs'
// const fs = require('fs');


if(!fs.existsSync("studentId2"))
{
    
	fs.mkdir("C:/Users/umer/Desktop/Full_Project/Backend/uploads/student/studentId2", (err)=>{
		// console.log("ran if if",err);
        
		if(err)
        {
            console.log(">>>>>>>>>>>",err) ;
            
        } 

		fs.writeFile("C:/Users/umer/Desktop/Full_Project/Backend/uploads/student/studentId2/newData.html", "This is a new Directory and File", (err)=>{

			if(err)
            {
                console.log("???????????????????",err);
            } 


		});

	});
}
