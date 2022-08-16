import axios from "axios";
import React, { Component } from "react";
import TableData from "./TableData";

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [""],
        };
    }
    //Get Movies List.

    componentDidMount() {
        this.getMoviesList();
    }

    getMoviesList = () => {
        let self = this;
        axios.get("/get/movie/list").then(function (response) {
            self.setState({
                movies: response.data,
            });
        });
    };

    render() {
        return (
            <div className="container min-h-screen">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="20px">
                                            #
                                        </th>
                                        <th scope="col" width="53px">
                                            Image
                                        </th>
                                        <th scope="col" width="80px">
                                            Title
                                        </th>
                                        <th scope="col" width="80px">
                                            Quantity
                                        </th>
                                        <th scope="col" width="80px">
                                            Year
                                        </th>
                                        <th scope="col" width="80px">
                                            Price
                                        </th>
                                        <th scope="col" width="80px">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.movies.map(function (x, i) {
                                        return <TableData key={i} data={x} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
