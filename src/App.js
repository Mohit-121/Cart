import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://imagex.kartrocket.com/image_thewatchshop/data/Flip-9343-1.jpg?imgeng=/w_1000/h_1400',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://static.toiimg.com/photo/70072353.cms',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images-na.ssl-images-amazon.com/images/I/81IrFQDQhtL._SL1500_.jpg',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      
      this.setState({
          products: products
      });
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===1){
      this.handleDeleteProduct(products[index].id);
      return;
    }
    products[index].qty -= 1;
    
    this.setState({
        products: products
    });
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;
      const items = products.filter( (item) => item.id!==id);

      this.setState({
          products: items
      });
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach( (product) => {
      count+=product.qty
    });
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map( (product) => {
      cartTotal+=product.qty*product.price;
      return '';
    });
    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {fontStyle: 20, padding: 10} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
