import React, { useContext, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { Input, Button, Item, Message, Form } from 'semantic-ui-react'

//Context
import { CartContext } from '../contexts/CartContext';


const Checkout = () => {

    const [items, , , , clearCart ] = useContext(CartContext);

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

    const checkInputs = () => {
        if( userName !== '' && 
            userEmail !== '' &&
            userPhone !== ''
        ) { return true; } else { return false; }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, 'purchases'), {
            buyer: {
                name: userName,
                email: userEmail,
                phone: userPhone
            },
            items: items.map(i => {
                return {
                    title: i.title,
                    id: i.id,
                    price: i.price,
                    quantity: i.quantity
                }
            }),
            total: getTotalPrice(),
        });

        setPurchaseID(docRef.id)
        setDidBuy(true);
        clearCart();
             
    }

    

     

    return (
        <div className='container' style={{marginTop: '50px'}}> 
        { 
            
            !didBuy ? 

        <div className='checkout-wrapper' style={{display: 'flex'}}>
            <div className='col' style={{flexBasis: '50%', paddingRight: '30px'}}>
                <Message
                    attached
                    header='Datos del comprador'
                    content='Finaliza tu compra rellenando estos datos'
                />
                <Form className='attached fluid segment'>
                    <Input focus placeholder='Nombre completo' value={userName} onChange={userNameChange} /><br></br><br></br>
                    <Input focus placeholder='Email' value={userEmail} onChange={userEmailChange} /><br></br><br></br>
                    <Input focus placeholder='Telefono' value={userPhone} onChange={userPhoneChange} /><br></br><br></br>
                    { checkInputs() ? 
                        <Button color='blue' onClick={handleSubmit} > Comprar </Button>
                        :
                        <Button disabled onClick={handleSubmit} > Comprar </Button>
                    }
                    
                </Form>
            </div>
            <div className='col' style={{flexBasis: '50%'}}>
            <Item.Group>
                { items.map((item, i) => {
                        return(
                                <Item  className='item-horizontal' key={i}>
                                    <Item.Image size='tiny' src={item.img} />

                                    <Item.Content>
                                        <Item.Header>{item.title}</Item.Header>
                                        <Item.Meta>
                                        <span className='price'>$ {item.price}</span>
                                        <span className='stay'>x {item.quantity}</span>
                                        </Item.Meta>
                                        <Item.Description><strong>$ {parseFloat(item.price) * parseInt(item.quantity)}</strong></Item.Description>
                                        <br></br>
                                        
                                    </Item.Content>
                                </Item>
                        )
                    })  }
            </Item.Group>
            <h3>Total: <strong>$ {getTotalPrice()}</strong></h3>
            
            </div>
        </div> 

        :

        <div style={{marginTop: '50px'}}>
            <Message
                success
                size='huge'
                header='Su compra fue realizada con exito!'
                content={`ID: ${purchaseID}`}
            />
        
        </div>
        
        }
        </div>
    )
}

export default Checkout
