import { Helmet } from "react-helmet-async";
import BlogsImage from "../assets/blogs.png";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Must-Have Sports Gear for Every Athlete",
      description:
        "Discover the essential sports equipment that can elevate your performance on and off the field.",
      image: "https://i.ibb.co.com/J5L88Rh/5.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Running Shoes",
      description:
        "A comprehensive guide to selecting the right running shoes for comfort and performance.",
      image: "https://i.ibb.co.com/YtLKGc1/2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "The Benefits of Using High-Quality Sports Equipment",
      description:
        "Explore why investing in quality gear is crucial for athletes of all levels.",
      image: "https://i.ibb.co.com/JdXBz3B/3.jpg",
      link: "#",
    },
  ];

  return (
    <div className="px-4 lg:px-6 pb-10">
      <Helmet>
        <title>Blogs | EquiSports</title>
      </Helmet>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 my-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600 mb-10">
            Welcome to Our Blog
          </h1>
          <p className="text-lg">
            Stay up-to-date with the latest tips, trends, and insights in the
            world of sports and fitness. Whether you’re a beginner or a pro,
            there’s something for everyone!
          </p>
        </div>
        <img
          src={BlogsImage}
          alt="Blogs"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Posts */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {blogPosts.map((post) => (
    <div
      key={post.id}
      className="bg-base-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            {post.title}
          </h2>
          <p className="mb-4">{post.description}</p>
        </div>
        <a
          href={post.link}
          className="text-blue-500 font-semibold hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Blogs;
