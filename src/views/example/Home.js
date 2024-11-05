import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "./HOC/color";

class Home extends React.Component{
    componentDidMount(){
        // setTimeout(() =>{
        //     this.props.history.push('/todo')


        // }, 3000) 

    }


    render(){
        return(
            <div>
                where are HomePage
            </div>
        )
    }
}

// export default withRouter (Home);
export default Color(Home);
