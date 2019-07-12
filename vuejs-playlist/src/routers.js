import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';
import SingleBlog from './components/SingleBlog';

export default [
    { path: '/', component: ShowBlog },
    { path: '/add', component: AddBlog },
    { path: '/single/:id', component: SingleBlog }
]