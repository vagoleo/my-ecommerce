import React, { useContext, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { Input, Button, Icon, Item } from 'semantic-ui-react'

//Context
import { CartContext } from '../contexts/CartContext';


const Checkout = () => {

    const [items, removeItem] = useContext(CartContext);
    const getTotalPrice = () => {
        let total = 0;
        items.forEach(item => {
            total += parseFloat(item.price) * item.quantity;
        })
        return total;
    }

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [purchaseID, setPurchaseID] = useState('');
    const [didBuy, setDidBuy] = useState(false);

    const userNameChange = (e) =>{ setUserName(e.target.value) }
    const userPhoneChange = (e) =>{ setUserPhone(e.target.value) }
    const userEmailChange = (e) =>{ setUserEmail(e.target.value) }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, 'purchases'), {
            buyer: {
                name: userName,
                email: userEmail,
                phone: userPhone
            }
        });

        setPurchaseID(docRef.id)
        setDidBuy(true);

        console.log('name:', userName);
        console.log('phone:', userPhone);
        console.log('email:', userEmail);
        
    }

    

     

    return (
        <> { 
            
            !didBuy ? 

        <div className='checkout-wrapper' style={{display: 'flex'}}>
            <div className='col' style={{flexBasis: '50%'}}>
                <form>
                    <Input focus placeholder='Nombre completo' value={userName} onChange={userNameChange} /><br></br><br></br>
                    <Input focus placeholder='Email' value={userEmail} onChange={userEmailChange} /><br></br><br></br>
                    <Input focus placeholder='Telefono' value={userPhone} onChange={userPhoneChange} /><br></br><br></br>
                    <Button onClick={handleSubmit} > Comprar </Button>
                </form>
            </div>
            <div className='col' style={{flexBasis: '50%'}}>
            <Item.Group>
                { items.map((item, i) => {
                        return(
                                <Item  className='item-horizontal' key={i}>
                                    <Item.Image size='tiny' src={item.image} />

                                    <Item.Content>
                                        <Item.Header>{item.title}</Item.Header>
                                        <Item.Meta>
                                        <span className='price'>$ {item.price}</span>
                                        <span className='stay'>x {item.quantity}</span>
                                        </Item.Meta>
                                        <Item.Description><strong>$ {parseFloat(item.price) * parseInt(item.quantity)}</strong></Item.Description>
                                        <br></br>
                                        <Button icon onClick={() => removeItem(item.id)}> Eliminar <Icon name='trash' /> </Button>
                                    </Item.Content>
                                </Item>
                        )
                    })  }
            </Item.Group>
            <h3>Total: <strong>$ {getTotalPrice()}</strong></h3>
            
            </div>
        </div> 

        :

        <div>id compra: {purchaseID}</div>
        
        }
        </>
    )
}

export default Checkout
