import React, { Component } from "react";
import TableActionButtons from "./TableActionButtons";

class TableData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="min-h-min w-auto">
                <th>{this.props.data.id}</th>
                <th>
                    <img
                        src={this.props.data.image_url}
                        className="w-auto h-auto"
                        alt=""
                    />
                </th>
                <th className="text-sm">{this.props.data.title}</th>
                <th className="w-4">{this.props.data.quantity}</th>
                <th>{this.props.data.year}</th>
                <th>{this.props.data.price}</th>
                <th>
                    <TableActionButtons id={this.props.data} />
                </th>
            </tr>
        );
    }
}

export default TableData;
