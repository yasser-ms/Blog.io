import { Link } from "react-router-dom";
const BlogsList = ({blogs,title}) => {

  return (
    <div className="Blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
           <h3>{blog.title}</h3>
           <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
