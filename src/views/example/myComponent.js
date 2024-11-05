import React from "react"; 
import ChildComponent from './ChildComponent';
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    
    state = {
        arrJobs: [
            { id: '121' , title: 'developer', salary: '1000'},
            { id: '122' , title: 'test', salary: '2000'},
            { id: '123' , title: 'project', salary: '3000s'} 

        ]

    }
    // handleOnChangeName = (event) => {
    //     console.log(event.target.value, 'event target:', event.target, 'event object:',event)
    //     this.setState({
    //         name: event.target.name
    //     })
    // }
    // handleClickButton = () => {
    //     alert('click me!!!')
    // }
   

    addNewJob=(job) =>{
        console.log('check job:',job)
        // this.setState({
        //     arrJobs: this.state.arrJobs.push(job)
        // })

        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })

    }

    deleteJob =(job) =>{
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        console.log(this.state)
        let name = "Police";
        return(
            // <React.Fragment>
            //     <div>
            //         hi  cậu
            //     </div>
            //     {/* <div className="first"> 
            //         <input value={this.state.name} type="text"
            //             onChange={(event) => this.handleOnChangeName(event)}
            //         />
            //         My name is {this.state['name']}
            //     </div>
            //     <div className="second">
            //         are you ok? {this.state.chanel}
            //     </div>
            //     <div className="third">
            //         <button onClick={()=> this.handleClickButton }>Click Me!!</button>
            //     </div> */}
            // </React.Fragment>
                        
            <>  
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <React.Fragment>
                  
                 {/* <div className="first"> 
                //         <input value={this.state.name} type="text"
                //             onChange={(event) => this.handleOnChangeName(event)}
                //         />
                //         My name is {this.state['name']}
                //     </div>
                //     <div className="second">
                //         are you ok? {this.state.chanel}
                //     </div>
                //     <div className="third">
                //         <button onClick={()=> this.handleClickButton }>Click Me!!</button>
                //     </div> */}
                </React.Fragment>
               
                <ChildComponent
                arrJobs={this.state.arrJobs}
                deleteJob={this.deleteJob}
                />
                {/* <ChildComponent name={'child two'} />
                <ChildComponent name={'child three'} /> */}
            </>
        

        )
     }
}

export default MyComponent