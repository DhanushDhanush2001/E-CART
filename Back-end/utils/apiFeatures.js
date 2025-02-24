class APIFeatures {
    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr;
    }
     search(){
        let keyword = this.querystr.keyword ? {
             name : {
                $regex : this.querystr.keyword,
                $options : 'i'
             }
        }: {};

          this.query.find({...keyword})
          return this;
     }

     filter(){
        const querystrcopy = {...this.querystr};

        
        // removing fields from query
        const removingFields = [`keyword`,`limit`,`page`];

        removingFields.forEach( field => delete querystrcopy[field]);

        let querystr = JSON.stringify(querystrcopy);
        querystr = querystr.replace(/\b(gt|gte|lt|lte)/g , match => `$${match}`)

        this.query.find(JSON.parse(querystr));

        return this;
     }

     paginate(resPerPage){

      const currentPage = Number(this.querystr.page) || 1;
      const skip = resPerPage * (currentPage - 1)
      this.query.limit(resPerPage).skip(skip);
      return this;
      
     }
}

module.exports = APIFeatures;