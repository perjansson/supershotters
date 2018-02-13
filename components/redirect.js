import { Component } from "react"

class Redirect extends Component {
    componentDidMount() {
        window.location = this.props.to
    }

    render() {
        return null
    }
}

export default Redirect
