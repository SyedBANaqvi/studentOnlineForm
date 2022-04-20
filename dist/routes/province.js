"use strict";
// import express,{Request,Response} from 'express';
// import * as _ from 'lodash'
// export const router=express.Router();
// // const PORT=4011;
// router.get('/:countryId',(req:Request,resp:Response):void=>{
//     let provinceObj:{ id: number, name: string, countryId:number}[] = [
//         { "id": 1, "name":"PUNJAB", "countryId":1 },
//         { "id": 2, "name":"SINDH", "countryId":1 },
//         { "id": 3, "name":"Balochistan", "countryId":1 },
//         { "id": 4, "name":" Khyber Pakhtunkhwa", "countryId":1 },
//         { "id": 5, "name":"Jammu and Kashmir[", "countryId":1 },
//         { "id": 6, "name":" Gilgit-Baltistan", "countryId":1 },
//     ];
// //    let  tempArr: any[]=[];
// //     for(let myObj1 of provinceObj)
// //     {
// //         if(myObj1.countryId == +req.params.countryId)
// //         {
// //             tempArr.push(myObj1)
// //             // resp.send(myObj1);
// //         }
// //     }
// //    resp.send(tempArr);
//   let founded = _.filter(provinceObj,(o) =>{ return o. countryId == +req.params.countryId });
//     resp.send(founded)
// });
