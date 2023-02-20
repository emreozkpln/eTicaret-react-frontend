import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import ProductService from '../services/productService'
import { addToCart, removeFromCart } from '../store/actions/cartActions';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetail() {
  let { name } = useParams();

  const dispatch = useDispatch()

  const [product, setProduct] = useState({});

 useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data))
  }, [])
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.productName} Sepete eklendi`)
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
    toast.warning(`${product.productName} Sepetten kaldırıldı`)
  }

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.unitPrice}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={() => handleAddToCart(product)}>
                Sepete ekle
              </Button>
              <Button basic color="red" onClick={() => handleRemoveFromCart(product)}>
                Sepetten kaldır
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}