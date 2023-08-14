import React, { useState, useEffect } from "react";
import ProductCard from "./Card";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [story, setStory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [language, setLanguage] = useState("all");
  const [ageGroup, setAgeGroup] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://onest-strapi.tekdinext.com/api/fln-contents",
      responseType: "stream",
    })
      .then(function (response) {
        const obj = JSON.parse(response.data);

        const parsedData = obj.data;
        setStory(parsedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter the story array based on selectedCategory
  const filteredStory = story.filter((item) => {
    const categoryFilter =
      selectedCategory === "all" ||
      item?.attributes?.title === selectedCategory;
    const languageFilter =
      language === "all" || item?.attributes?.language === language;
    const ageGroupFilter = ageGroup === "all" || item.ageGroup === ageGroup;

    return categoryFilter && languageFilter && ageGroupFilter;
  });

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="App">
        <div
          className="product-container"
          style={{ marginTop: "70px", marginBottom: "70px" }}
        >
          <h1>Stories List</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {/* Filter dropdown */}
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="all">Age</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="all">Language</option>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
              <option value="Hindi">Hindi</option>
              <option value="Assamese">Assamese</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          {filteredStory.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
              <button
                onClick={() => {
                  navigate("/storyDetails", {
                    state: {
                      product: product,
                    },
                  });
                }}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
