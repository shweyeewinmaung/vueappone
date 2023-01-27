export default {
    methods: {
        async loadData(url) {
            let response = await fetch(url);
            let responseData = await response.json();
            //console.log(responseData);
            if(responseData.con){
                return responseData.result;
            }else{
                return [];
            }
            
            // console.log(responseData);
        },
        async loadDataAll(url) {
            let response = await fetch(url);
            let responseData = await response.json();
            //console.log(responseData);
            if(responseData.con){
                return responseData.result;
            }else{
                return [];
            }
            
            // console.log(responseData);
        },
        async sendData(url,data){
            let response = await fetch(url,{
                method : "post",
                headers :{"content-type" :"application/json"},
                body :JSON.stringify(data),
              });
              return await response.json();
        }
    }
}