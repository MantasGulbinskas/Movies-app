import React from "react";


function CartList(props) {
    
    return (
        <>
          <h2 className="text-white">Products</h2> 
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <img src={props.img} alt="img" />
                            <td>{props.title}</td>
                            <td>{props.quantity }</td>
                            <td>Button</td>
                            <td>{props.price }</td>
                        </tr>
                    </tbody>
            </table>
        </>
    )
}

export default CartList;