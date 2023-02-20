
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Table, Button } from 'semantic-ui-react'
import { removeFromCart } from '../store/actions/cartActions';
import { Statistic } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function CartDetail() {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)


    const handleRemoveFromCartDetail = (product) => {
        dispatch(removeFromCart(product))
        toast.warning(`${product.productName} Sepetten kaldırıldı`)
    }
    let cartTotal = cartItems.reduce((acc, cartItem) => acc + cartItem.product.unitPrice, 0)
    return (
        <div>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün adı</Table.HeaderCell>
                        <Table.HeaderCell>Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Adet</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        cartItems.map((cartItem) => (

                            <Table.Row key={cartItem.product.id}>
                                <Table.Cell>
                                    <Header>

                                        <Header.Content><Link to={`/products/${cartItem.product.productName}`}>{cartItem.product.productName}</Link>

                                            <Header.Subheader>{cartItem.product.unitsInStock}</Header.Subheader>


                                        </Header.Content>

                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{cartItem.product.unitPrice}</Table.Cell>
                                <Table.Cell>{cartItem.quantity}</Table.Cell>
                                <Table.Cell><Button onClick={() => handleRemoveFromCartDetail(cartItem.product)}>Sepetten kaldır</Button></Table.Cell>
                            </Table.Row>


                        )
                        )
                    }
                </Table.Body>
            </Table>

            <Statistic position="right" size="small">
                <Statistic.Label>Sepet Tutarı</Statistic.Label>
                <Statistic.Value>{cartTotal}</Statistic.Value>
            </Statistic>
        </div>
    )
}
