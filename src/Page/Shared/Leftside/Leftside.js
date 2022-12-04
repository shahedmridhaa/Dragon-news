import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-nu-henna.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h4>All Categories</h4>
      <div>
        {categories.map((Category) => (
          <p key={Category.id}>
            <Link to={`/category/${Category.id}`}>{Category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftside;
