import React from 'react'

function UpdateTask() {
    fetch("http://localhost:3002/posts/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.singledata)
    })
        .then(res => res.json())
        .then(result => {
            this.setState({
                singledata: {
                    title: "",
                    author: ""
                }
            });
            this.getLists();
        });
    return (
        <div>UpdateTask</div>
    )
}

export default UpdateTask