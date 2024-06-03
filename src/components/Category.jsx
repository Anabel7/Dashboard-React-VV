import React, { Component } from 'react'

export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorcito: "danger"
        }
    }
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className={`card bg-${this.state.colorcito} text-white shadow`}>
                    <div className="card-body" id="verdes">
                        {this.props.name}: {this.props.count}
                    </div>
                </div>
            </div>
        )
    }
}
