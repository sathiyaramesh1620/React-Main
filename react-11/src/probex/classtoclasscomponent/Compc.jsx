import CompD from './Compd'

let CompC =()=>{
    let ename="sathiya"
    return <div>
        <h1>ComponentC</h1>
        <hr></hr>
        <CompD one={"goood"} emp_name={ename}/>
        <hr />
    </div>
}
export default CompC