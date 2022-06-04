import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getW}>
            <input type="text" name="city" placeholder="city" />
            <input type="text" name="country" placeholder="country" />
            <button>Get</button>

        </form>
    )
}

export default Form