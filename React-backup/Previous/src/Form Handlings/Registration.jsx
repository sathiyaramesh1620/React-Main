import React from 'react'
class Registration extends React.Component {
    state={
        email:"",
        password:"",
        mobile:"",
        termscondition:false
    }
   updateHandler=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
   }
    
    submitHandler=(event)=>{
        event.preventDefault(
            console.log(this.state)

        )   
    }
    render() {
        return (
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder='email id' onChange={this.updateHandler}  name="email"/>

                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder='password' onChange={this.updateHandler} name="password" />

                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder='mobile' onChange={this.updateHandler} name="mobile" />
                                        <input type="checkbox" />please accecpt terms& conditions

                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className='btn btn-success'  />

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )


    }

}
export default Registration