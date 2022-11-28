# 1 Create network livraison-marhaba-net
    docker network create livraison-marhaba-net
# 2 Executez un container basé sur l'image mongo, nommez-le livraison-marhaba-db 
    docker container run -d  --name livraison-marhaba-backend-db -v livraison-marhaba-backend-db:/data/db --network livraison-marhaba-net mongo
# 3 creer cette image et nommez-la livraison-marhaba-docker:test et faire un build*
    docker  build -t livraison-marhaba-backend-docker:test .
# 4  Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhaba et faites-le utiliser avec le network livraison-marhaba-net.
    docker container run -d --name livraison-marhaba-back-end -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 4011:4011 livraison-marhaba-backend-docker:test  

    docker conatainer run -d --name livraison-marhaba-back-end -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 4011:4011 livraison-marhaba-backend-docker:test 

