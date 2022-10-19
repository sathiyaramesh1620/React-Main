import React from 'react'


class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Iphone12',
            price: 400000,
            qty: 1,
            
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-witb-2021_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1638579083000"
        }

    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty -1})
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <table className='table table-hover'>
                                <thead className='bg-info'>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.name}</td>
                                        <td>{<img src={this.state.image} height="100px"></img>}</td>
                                        <td>{this.state.price}</td>
                                        <td> <i class="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.qty}<i class="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                        
                                        
                                        
                                        <td>{this.state.qty* this.state.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Product