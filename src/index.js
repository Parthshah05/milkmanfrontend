import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "appllication/json";

ReactDOM.render(<Routes />, document.getElementById("root"));
