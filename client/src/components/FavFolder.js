import React from "react";

class FavFolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userColections: 0,
    };
  }
  /*Haven't tried yet, just an idea
  showCollections = async () => {
    try {
      const response = await fetch("/api/users/favourites/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(existingUser),
      });
      const json = await response.json();
      console.log(json);
      if (json.msg === "User OK") {
        this.setState({
          userCollections: 1,
        });
      } 
    } catch (err) {
      console.log(err);
    }
  };
  */
  render() {
    return (
      <div className="row  w-100 ">
        <div className="col">
          <div className="card bg-light text-center justify-content-center">
            <h3> add new collection </h3>
            <i class="fas fa-plus fa-6x p-5"></i>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-light">
            <h3> collection cakes </h3>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-light">
            <h3> collection breakfast ideas </h3>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light">
            <h3> collection cocktails </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FavFolder;
