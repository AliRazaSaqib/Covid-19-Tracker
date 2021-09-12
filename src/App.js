/** @format */

import React from "react";

import {
  Cards,
  CountryPicker,
  Chart,
  WebsiteDashboard,
  CasesTable,
} from "./components";
import Typography from "@material-ui/core/Typography";
import { fetchData } from "./api/";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <WebsiteDashboard />
        <Typography variant="h5" color="inherit" className={styles.tracker}>
          Covid-19 Tracker
        </Typography>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <CasesTable />
        <Chart data={data} country={country} />
        <Typography
          color="inherit"
          style={{ fontSize: "13px", marginTop: "180px" }}
        >
          © 2021 Ali Raza
        </Typography>
      </div>
    );
  }
}

export default App;
