
# #########################  Pour back_end   ##################################

# 1 Create network livraison-marhaba-net
    docker network create livraison-marhaba-net
# 2 Executez un container basé sur l'image mongo, nommez-le livraison-marhaba-db 
    docker container run -d  --name livraison-marhaba-backend-db -v livraison-marhaba-backend-db:/data/db --network livraison-marhaba-net mongo
# 3 creer cette image et nommez-la livraison-marhaba-docker:test et faire un build*
    docker  build -t livraison-marhaba-backend-docker:test .
# 4  Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhaba et faites-le utiliser avec le network livraison-marhaba-net.
    docker container run -d --name livraison-marhaba-back-end -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 4011:4011 livraison-marhaba-backend-docker:test  

# #########################  Pour front-end   ################################## # 

 # 1 Créer un network, et lui donner le nom de livraison-marhaba-frontend-net.
    docker network create  livraison-marhaba-frontend-net
# 2 Entrer dans le dossier du serveur où se trouver Dockerfile et creer cette image et nommez-la livraison-marhaba-frontend-docker:test et faire un build
    docker build -t livraison-marhaba-frontend-docker:test .
# 3 Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhaba-frontend  et faites-le utiliser avec le network livraison-marhaba-frontend-net.
    docker container run -d --name livraison-marhaba-front-end- -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-front-end-net -p 3000:3000 livraison-marhaba-front-end-docker:test

# ######################### Pour test unutaire ################################## # 

 # 1 Install jest et supertest

    npm i -d jest supertest

    export app in server.js

    create fille tests.test.js

    require app pertest  in tests.test.js

 # 2 test pour  function register dans fichier tests.test.js:

   # Check email is aready existe !! 

        describe("check email is  aready existe  ",()=>{
        test("check email is  aready existe",async()=>{
            let body={
                username:"manager",
                email:"managerL@gmail.com",
                password:"123",
                phone:"612345678"
            }
            const respnse=await supert(app).post("/Marhaba/auth/Register").send(body)
            expect(respnse.statusCode).toBe(400)
        })
        })
      
 # 2 test pour  function Login dans fichier tests.test.js:
   # Check email is note existe in bd !!  
   
    describe("User note existe",()=>{
        test(" check User note existe",async()=>{

            let body={
                email:"managelr@gmail.com",
                password:"123",
                phone:"612345678"
            }
            const respnse=await supert(app).post("/Marhaba/auth/Login").send(body)
            expect(respnse.statusCode).toBe(400)
        })

  }) 

   # password or phone inncorect !!  
     describe("password or phone inncorect",()=>{
        test("  password or phone inncorect",async()=>{

            let body={
                email:"manager@gmail.com",
                password:"123è",
                phone:"612345678"
            }
            const respnse=await supert(app).post("/Marhaba/auth/Login").send(body)
            expect(respnse.statusCode).toBe(400)
        })

  })    





    

