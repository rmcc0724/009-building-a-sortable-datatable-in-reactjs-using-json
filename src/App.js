import React from "react";
import CoinTable from "./components/coin-table";
import data from "./data/coins.json";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        price_usd: "asc",
        symbol: "asc"
      }
    };
    this.sortByNum = this.sortByNum.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }
  sortByNum(key) {
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
    console.log("SortByNum");
  }
  sortByName(key) {
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? a[key] < b[key]
            ? -1
            : a[key] > b[key]
            ? 1
            : 0
          : a[key] > b[key]
          ? -1
          : a[key] < b[key]
          ? 1
          : 0
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  }
  render() {
    return (
      <div className="page-container">
        <CoinTable
          data={this.state.data}
          sortByNum={this.sortByNum}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}
export default App;
