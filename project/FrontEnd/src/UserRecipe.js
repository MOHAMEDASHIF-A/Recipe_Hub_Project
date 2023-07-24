import axios from "axios";
import "./userrecipe.css";
import React, { Component } from "react";
import Navbar from "./navbar";
import RatingStars from "react-rating-stars-component";

class UserRecipe extends Component {
  state = {
    data: [],
    searchTerm: "", // New state to hold the search term
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/showRecipe")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleRatingChange = (recipeIndex, newRating) => {
    const updatedData = [...this.state.data];
    updatedData[recipeIndex].rating = newRating;
    this.setState({ data: updatedData });
  };

  // Function to handle changes in the search input
  handleSearchChange = event => {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  };

  render() {
    const { data, searchTerm } = this.state;
    // Filter the recipes based on the search term
    const filteredRecipes = data.filter(user =>
      user.recipename.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        {/* Add the search input */}
        <div className="searchcontainer">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
        </div>
        <div className="showans">
          <div></div>
          {filteredRecipes.map((user, index) => (
            <div className="div" key={user.recipename}>
              <div className="lab1">
                <h1 className="tabcon">{user.recipename}</h1>
              </div>
              <img
                src={user.imageurl}
                alt="recipe"
                width="192"
                height="262"
                style={{ borderRadius: "50%" }}
              />

              <div className="lab1">
                <h1 className="con">Ingredients and Shopping lists:</h1>
              </div>
              <div className="lab1">
                <h1 className="tabcon">{user.ingredients}</h1>
              </div>
              <div className="lab1">
                <h1 className="con">Cooking Tips and Technique: </h1>
              </div>
              <div className="lab1">
                <h1 className="tabcon">{user.tipsandtechnique}</h1>
              </div>

              {/* Display the Star Rating */}
              <div className="lab1">
                <RatingStars
                  count={5}
                  value={user.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={true}
                  onChange={newRating => this.handleRatingChange(index, newRating)}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default UserRecipe;
