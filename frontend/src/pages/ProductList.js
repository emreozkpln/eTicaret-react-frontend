import React, {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {  Table,Button } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from '../store/actions/cartActions'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductList() {
    
    const dispatch = useDispatch() //actionları kullanmak için

    const [products, setProducts] = useState([])

    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts().then((result)=>setProducts(result.data.data));
    },[])

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product))
        toast.success(`${product.productName} Sepete eklendi`)
    }

    
    
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        products.map((product)=>(
                            <Table.Row  key={product.id}>
                            <Table.Cell ><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                            <Table.Cell>{product.unitPrice}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                            <Table.Cell>{product.category.categoryName}</Table.Cell>
                            <Table.Cell class="table"><div class="sepet"><Button onClick={()=>handleAddToCart(product)}>Sepete ekle</Button></div></Table.Cell>
                            
                        </Table.Row> 
                        ))
                    }
                    
                   
                </Table.Body>

                
            </Table>
        </div>
    )
    //yukarda constun içibdeki ifade bu sayfada product kullanıcam default değeri boş bir aray ve productu değiştirmek için seti kullanıcam
    //productService.getProducts.then başarılı olduğunda çalışır thenin yanına.catch() yazınca hatalı olduğunda çalışır
    //result.data tamamını getirir result.data.data tek bir datayı getirir
    // resultun sonuna boş bir aray koymamız gerekiyo yoksa sürekli istek atar sayfanın da tekrar render edilmesi için lazım
}
