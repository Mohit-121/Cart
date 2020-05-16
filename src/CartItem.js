import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{ title }</div>
                    <div style={ { color: '#777' } }>Rs { price }</div>
                    <div style={ { color: '#777' } }>Qty: { qty }</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://as1.ftcdn.net/jpg/03/46/94/28/500_F_346942841_2iGSPUeLvwj7JbgUjSewYiIkaJzjGJG9.jpg" />
                        <img alt="decrease" className="action-icons" src="https://as2.ftcdn.net/jpg/03/16/36/03/500_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg"  />
                        <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/02/72/55/41/500_F_272554194_9bJhYSJkUcLbTjXfDlDANV2RyQYGO06N.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;