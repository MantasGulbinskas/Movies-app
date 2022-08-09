import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class TableData extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <tr className="min-h-min w-auto">
                <th><img src={this.props.data.image_url} className='w-auto h-auto' alt="" /></th>
                <th>{this.props.data.id}</th>
                <th className='text-sm'>{this.props.data.title }</th>
                <th className='w-4'>{this.props.data.quantity}</th>
                <th>kaina</th>
                <th>
                    <TableActionButtons id={this.props.data} />
                </th>
            </tr>
        )
    }
}

export default TableData;