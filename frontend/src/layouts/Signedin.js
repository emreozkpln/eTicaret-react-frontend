import React from 'react'
import { Menu , Dropdown,Image} from 'semantic-ui-react'

export default function Signedin(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.arabahabercisi.com/wp-content/uploads/2021/04/En-ucuz-s%C4%B1f%C4%B1r-araba-fiyatlar%C4%B1.jpg"></Image>
                <Dropdown pointing="top right" text="Emre">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out"/>

                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
