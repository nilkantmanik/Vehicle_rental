class ApiFeatures {

    constructor(query,querystr){
        this.query=query;
        this.querystr=querystr;
    }


    // search(){
    //     const keyword = this.querystr.keyword ? {
    //         name:{
    //             $regex:this.querystr.keyword,
    //             $options:"i",  // case insensitive
    //         }
    //     }:{};

        

    //     this.query = this.query.find({...keyword});
    //     return this;
    // }

    Searchbrand(){
       
        if(!this.querystr.brand)
        {
            return this;
        }

        const brand = this.querystr.brand;
        
        this.query = this.query.find({Brand:brand});
        return this;
    }

    SearchCategory(){
       
        if(!this.querystr.category)
        {
            return this ;
        }

        const category = this.querystr.category;

        this.query = this.query.find({Category:category});
        return this;
    }

    filter(){

        // if(!this.querystr.hlte || !this.querystr.dlte || !this.querystr.hgte || !this.querystr.dgte)
        // {
        //     return this;
        // }

        const hlte = this.querystr.hlte || 1000
        const hgte = this.querystr.hgte || 0
        const dlte = this.querystr.dlte || 10000
        const dgte = this.querystr.dgte || 0

        const rating = this.querystr.rating || 0;


        this.query = this.query.find({'Price.hour':{$lte:hlte,$gte:hgte},'Price.day':{$lte:dlte,$gte:dgte},'Rating':{$gte:rating}})


        return this;
    }

}

module.exports = ApiFeatures ;