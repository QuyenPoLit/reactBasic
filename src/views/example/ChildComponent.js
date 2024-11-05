import React from 'react';

class ChildComponent extends React.Component{ 


    // key:value;
    // state = {
    //     firstName: '',
    //     lastName: ''
    // }

    /* 
    JSX => return block
    fragment
    */

    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('>>> check data input: ', this.state)
    // }
    //re-render
    state ={
        showJob : false
    }

    handeShowHide = () =>{
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) =>{
        console.log('>>> delete:', job)
        this.props.deleteJob(job)
    }

    render() {
        // console.log('>>> check  props: ', this.props)
        // // let name = this.props.name;
        // // let age = this.props.age;

        let {arrJobs } = this.props;
        let {showJob} = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        return (
            <>
                {showJob === false ?
                    <div >
                        <button onClick={() => this.handeShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item,index) => {
                                    return ( 
                                        <div key={item.id}>
                                            {item.title} -{item.salary} 
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handeShowHide()}>Hide</button>
                        </div>
                    </>
                }             
            </>
        )

    }
}
// const ChildComponent   = (props) =>{
//     let {arrJobs } = props;

//     return(
//         <>
//              <div className="job-lists">
//             {   
//                 arrJobs.map((item,index) => {
//                     if(item.salary >= 500){
                     
//                     }
//                     })
//             }
//             </div>
//         </>
//     )
// }

export default ChildComponent;