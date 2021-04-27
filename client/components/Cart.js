import React, { Component } from 'react'
import {getCartThunk, removeFromCartThunk} from '../store/cart'
import { connect } from "react-redux";
export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products:[]
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    componentDidMount(){
        const body = {
            buyerEmail: this.props.auth.email
        }
        this.props.fetchCart(this.props.auth.id, body)

    }
    componentDidUpdate(prevState){
        if(prevState.cart!==this.props.cart){
            console.log('success, your cart', this.props.cart)
            const body = {
                buyerEmail: this.props.auth.email
            }
            this.props.fetchCart(this.props.auth.id, body)
    
            this.setState({
                products:this.props.cart.products
            })
        }
    }
    handleDelete(evt){
        evt.preventDefault()
        const productId = evt.target.name
        const orderId = this.props.cart.id
        const body = {
            orderId:orderId,
            productId: productId
        }
        this.props.removeFromCart(body)
    }
    render() {
    console.log('here is your cart!!!', this.state.products)
    const products = this.state.products||[]

        return (
            <div>
                <p>HI My Cart</p>
                {products.map((product)=>
                     (<div key={product.id}>
                         <span > {product.name} </span>
                         <span > {" QTY: "}</span>
                         <span > {product.order_product.quantity} </span>
                         <button onClick={this.handleDelete} name={product.id}>Remove From Cart</button>
                     </div>  )
                )}
                
            </div>
        )
    }
}

const mapState = (state) => {
    return {
      auth: state.auth,
      cart: state.cart
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      fetchCart: (userId, body) => dispatch(getCartThunk(userId, body)),
      removeFromCart: (body) => dispatch(removeFromCartThunk(body)),
    };
  };
  
  export default connect(mapState, mapDispatch)(Cart);
  