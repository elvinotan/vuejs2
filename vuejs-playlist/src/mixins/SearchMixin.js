export default {
    computed: {
        searchBlog() {
            return this.blogs.filter(e=>{
                if (this.search == '') return true;
                return e.title.match(this.search);
            })
        }
    }
}