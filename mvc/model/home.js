
const registeredHomes =[];

module.exports= class Home{
       constructor(houseName,price,location, rating , photoUrl){
        this.houseName=houseName;
        thise.price=price;
        thise.location=location;
        thise.rating=rating;
        thise.photoUrl=photoUrl;
       }
         save(){{
            registeredHomes.push(this); 
         }
}