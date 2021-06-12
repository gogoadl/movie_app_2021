import React from "react";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            // Redirect to home
            history.push("/");
        }
        console.log(this.props); 
    }
    render() {
        const { location } = this.props;
        if( location.state ) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
        
    }
}

export default Detail;