import React from "react";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import "./ListUser.scss";
import { withRouter } from "react-router-dom"; // chuyển trang
class ListUser extends React.Component{
    state = {
        listUsers: []
    }


    async componentDidMount(){
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then(res => {
        //         console.log('>>>check res ',res.data.data)
        //     })

        let res = await axios.get('https://reqres.in/api/users?page=1')
        // console.log('>>>check res ',res.data.data)
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewDetailUser =(user)=>{
        // console.log('check user detail ',this.props) //check sự kiện
        this.props.history.push(`/user/${user.id}`)
    }
    render(){
        let {ListUsers} = this.state; 
        return(
            <div className="list_user_container">
                <div className="title">
                    all ListUser
                </div>
                <div className="list_user_content">
                    {ListUsers && ListUsers.length> 0 &&
                        ListUsers.map((item, index) => {
                            return( 
                                <div className="child" key={item.id}
                                onClick={() =>this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }   
                </div>
                
            </div>
        )
    }
}

export default withRouter (ListUser);