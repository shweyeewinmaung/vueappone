<template>
    <div class="card text-center m-3">
        <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
        <div class="card-body" is:true={aa}>
            <!-- <div v-for="item in pageOfItems" :key="item.id">{{item.name}}</div> -->
            <ul>
                <li v-for="(aa,index) of records" :key="index" is:true={aa}>
              {{aa.first_name}} 
                </li>
            </ul> 
            
            
        </div>
        <div class="card-footer pb-0 pt-3"><span :page ="page"></span>
            <pagination :records="recordsLength" v-model="page" :per-page="perPage" @paginate="getPage">
  </pagination>
           
            <!-- <jw-pagination :items="exampleItems" @changePage="onChangePage"></jw-pagination> -->
            <!-- <pagination v-model="page"  :records="records" :per-page="perpage" @paginate="getPage"/> -->
        </div>
    </div>
</template>
  
 
<script>
// an example array of items to be paged
//const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
const exampleItems =[ { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
            { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
            { id: 3, first_name: 'Barney', last_name: 'Rubble' },
            { id: 4, first_name: 'Betty', last_name: 'Rubble' },
            { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
            { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
            { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
            { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
            { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }];
 
 
export default {
//     components: {
//   Pagination
// },
    data() {
        return {
      exampleItems,    
    page: 1,
    perPage: 2,
    records: [],
    recordsLength: 0

        };
    },
    methods: {
        getPage: function() {
      // we simulate an api call that fetch the records from a backend
       this.records = [];
 
       const startIndex = this.perPage * (this.page - 1) + 1;
       const endIndex = startIndex + this.perPage - 1;
  
         for (let i = startIndex; i <= endIndex; i++) {
        this.records.push(exampleItems[i-1]);
        } 
       this.recordsLength = exampleItems.length;
        return  this.records; 
    },
     
    // getRecordsLength() {
    //   // here we simulate an api call that returns the records length
    //   this.recordsLength = exampleItems.length;
    //  // console.log(this.recordsLength);
    // }

    },
    beforeMount(){
        this.getPage();
       // this.getRecordsLength();
       // this. mypage();
    }
};
</script>