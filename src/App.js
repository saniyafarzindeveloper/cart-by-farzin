import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Watch',
          qty: 0,
          img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
          id: 1
        },
        {
          price: 80000,
          title: 'Ipad',
          qty: 0,
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-ipad-pro10in-silver-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330381848',
          id: 2
        },
        {
          price: 9999,
          title: 'Mobile Phone',
          qty: 0,
          img: 'https://www.reliancedigital.in/medias/iPhone-11-128GB-Green-491901649-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTM3MXxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDM0Lzk0MjE5MzMwODQ3MDIuanBnfDlhMGViMjFmOGEyZDU3NmNlMTY3ODg4NTg0YjFlOGNjNzhlNDA2ZTE4NGFhOTE2OTBkNTYyYjRhOTE3ODdlNTg',
          id: 3
        },
        {
          price: 50000,
          title: 'Laptop',
          qty: 0,
          img: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/MacBook_Air7035.jpg',
          id: 4
        },
        {
          price: 1700,
          title: 'Air Pods',
          qty: 0,
          img: 'https://www.reliancedigital.in/medias/APPLE-AIRPODS-PRO-WITH-WL-CC-491630480-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODEzOHxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaGMyLzkyMjA0NjcwOTc2MzAuanBnfDk1OGI5OWEyOTA4YTI4M2FjMWQ0OTIwMGU5ZTI0NTljYjkxOTQwZGM4ZDRhZDY2NTI4ZjlhODc0OWFkMDQ0MDU',
          id: 5
        },
        {
          price: 300,
          title: 'Ear Phones',
          qty: 0,
          img: 'https://i.gadgets360cdn.com/products/large/Noise-flair-DB-632x800-1621417096.jpg?downsize=*:360',
          id: 6
        },
        {
        price: 4000,
        title: 'Fit Band',
        qty: 0,
        img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14923598/2021/7/24/2cc2e66e-7353-4028-b079-3aa9917b69b11627099860844FitbitLuxeLunarWhiteSoftGoldStainlessSteel1.jpg',
        id: 7
      }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
