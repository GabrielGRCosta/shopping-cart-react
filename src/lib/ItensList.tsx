import {Item} from './Item';
import { ItemProp } from './Item';
import { useState, useEffect } from 'react';

export interface ItensListProps {
    onHandleQnt?: (qnt: number) => void
}



export const Listt:ItemProp[] = [ 
 {
     name: 'Hamburguer',
     description: 'Saboroso hamburguer gratinado',
     price: 48.50,
     quantity: 1
 },
 {
     name: 'Milkshake',
     description: 'Cremoso e gostoso',
     price: 15.90,
     quantity: 1
 },
 {
     name: 'Batata frita',
     description: 'Crocantes e quentes',
     price: 16.50,
     quantity: 1
 },
]

export function ItensList(props: ItensListProps) {
    const [totalprice,setTotalPrice] = useState(0);
    const [itens, setItens] = useState<ItemProp[]>(Listt); // Supondo que você tenha um estado para os itens

    const handleQuantityChange = (index: number, newQuantity: number) => {
        const newItens = [...itens];
        newItens[index].quantity = newQuantity;
        setItens(newItens);
        const totalQuantity = newItens.reduce((total, item) => total + item.quantity, 0);
        props.onHandleQnt?.(totalQuantity);
    };

    const handleRemoveItem = (index: number ) => {
        const newItens = [...itens]; // Cria uma cópia do array itens
        newItens.splice(index, 1); // Remove o item no índice especificado
        setItens(newItens); 
        const totalQuantity = newItens.reduce((total, item) => total + item.quantity, 0);
        props.onHandleQnt?.(totalQuantity);
    }

    useEffect(() => {
        const newTotalPrice = itens.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalPrice(newTotalPrice);
    }, [itens]);


    if(!itens.some(item => item.quantity > 0)) {
        return <h2> Você não tem nenhum item no carrinho</h2>
    } else{
        const list = itens.map((element, index) => { 
            return (
                <div className="mx-auto md:max-w-2xl" key={index}>
                    <Item 
                        {...element} 
                        onRemove={() => handleRemoveItem(index)}
                        onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                    />
                </div>  
            )
        });

        return (
            <ul>
                {list} 
            </ul>
            
        )
    }




}
