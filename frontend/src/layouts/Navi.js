import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import Signedin from './Signedin'
import Signedout from './Signedout'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Navi() {

    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false) //yani çıkış yaptığını gösteriyo girişi false yapan fonksiyon
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }




    return (
        <div>
            <Menu inverted fixed="top">
                <Container>

                    <Menu.Item class="home"
                        name='home'
                        as={NavLink} to="/"
                    />
                    

                    <Menu.Menu position='right'>
                        {cartItems.length > 0 && <CartSummary />}
                        {isAuthenticated ? <Signedin signOut={handleSignOut} /> : <Signedout signIn={handleSignIn} />}



                    </Menu.Menu>

                </Container>
            </Menu>

        </div>
    )
    //container menüdeki seçenekleri ortalar
    //inverted menüyü siyah yapar
    //{isAuthenticated?<Signedin/>:<Signedout/>} giriş yapmışsa signedin göster :(tersi demek) yapmamışsa signedoutu göster
}
