 function collect_same_elements(collection_A,collection_B){

  	var result=[];

      for(var i=0;i<collection_A.length;i++){
      
         for(var j=0;j<collection_B.value.length;j++){

        	 if(collection_A[i].key==collection_B.value[j]){

        	 	result.push(collection_A[i].key);
        	 }

        }
     }
      return result;

 }


module.exports = collect_same_elements;
