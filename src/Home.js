import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "loram ipsum",
      author: "Mohsin",
      id: 1,
      same: "Hello",
    },
    { title: "welcome party", body: "loram ipsum", author: "Hamza", id: 2 },
    {
      title: "web dev top tips",
      body: "loram ipsum",
      author: "Najam",
      id: 3,
      same: "Hello",
    },
  ]);

  const [name, setName] = useState("ALi");

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("Khan")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
