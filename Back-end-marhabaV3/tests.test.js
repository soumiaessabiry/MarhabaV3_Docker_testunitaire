const supert= require("supertest")
const app=require("./server")

                        //*********** Register************* */

//*            =>1  check email is  aready existe                                                                                             */ 
// describe("check email is  aready existe  ",()=>{
//     test("check email is  aready existe",async()=>{
//         let body={
//             username:"manager",
//             email:"manager@gmail.com",
//             password:"123",
//             phone:"612345678"
//         }
//         const respnse=await supert(app).post("/Marhaba/auth/Register").send(body)
//         expect(respnse.statusCode).toBe(400)
//     })
// })
//*            =>2  fill All fields                                                                                             */ 

// describe("fill All fields !!!!!!",()=>{
//     test("fill All fields !!!!!!",async()=>{
//         let body={
//             username:"manager",
//             email:"manager@gmail.com",
//             password:"azerty",
//             phone:"1234567"
//         }
//         const respnse=await supert(app).post("/Marhaba/auth/Register").send(body)
//         expect(respnse.statusCode).toBe(400)
//     })
// })


       //*********** login************* */
    //*            =>1  User note existe                                                                                           */ 

//     describe("User note existe",()=>{
//         test(" check User note existe",async()=>{

//             let body={
//                 email:"managelr@gmail.com",
//                 password:"123",
//                 phone:"612345678"
//             }
//             const respnse=await supert(app).post("/Marhaba/auth/Login").send(body)
//             expect(respnse.statusCode).toBe(400)
//         })

//   })              
    //*            =>1  password or phone inncorect                                                                                           */ 

//   describe("password or phone inncorect",()=>{
//         test("  password or phone inncorect",async()=>{

//             let body={
//                 email:"manager@gmail.com",
//                 password:"123è",
//                 phone:"612345678"
//             }
//             const respnse=await supert(app).post("/Marhaba/auth/Login").send(body)
//             expect(respnse.statusCode).toBe(400)
//         })

//   })              

    


