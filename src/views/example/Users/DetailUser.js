import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component{
    state ={
        user:{}
    }
    async componentDidMount (){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res && res.data && res.data.data ? res.data.data: {}
            })
            console.log('check users',res)
        }
    }
    handleBackButtonUser  = () => {
        this.props.history.push(`/user`)


    }


    render(){
        console.log('check prop:' ,  this.props)

        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        
        return(
            <>
                <div> Hello , I'm Quyen id:{this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div> Users name: {user.first_name} - {user.last_name }</div>
                        <div> Users email: {user.email}</div>
                        <div>  <img src={user.avatar}/></div>

                        <div><button type="button" onClick={() => this.handleBackButtonUser()}>Back</button></div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);
// export default DetailUser;
