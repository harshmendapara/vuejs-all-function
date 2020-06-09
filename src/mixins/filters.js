export default {
    filters : {
        makeUppercase(value){
            return value.toUpperCase()
        },
        contentSnippet(value){
            return value.slice(0, 15)+ "...";
        }
    }
}