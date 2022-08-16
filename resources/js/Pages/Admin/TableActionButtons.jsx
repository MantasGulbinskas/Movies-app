import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

function TableActionButtons(props) {
    return (
        <div>
            <InertiaLink
                className="btn btn-primary"
                href={"/admin/edit/" + props.id.id}
                as="button"
            >
                Edit
            </InertiaLink>
            <InertiaLink
                className="btn btn-danger"
                href={"/admin/delete/" + props.id.id}
                as="button"
            >
                Delete
            </InertiaLink>
        </div>
    );
}

export default TableActionButtons;
