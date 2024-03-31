import { useState } from 'react';
import {Quantity} from './Quantity'

export interface ItemProp {
    name: string;
    description: string;
    price: number;
    quantity: number
    onQuantityChange?: (newQuantity: number) => void
    onRemove?: () => void
}

export function Item(props: ItemProp) {
    const [quant, setQuant] = useState(props.quantity)
    const [total, setTotal] = useState(props.price)
    


    function updateQuantity(quantity: number) {
        setQuant(quantity)
        setTotal(quantity * props.price)
        props.onQuantityChange?.(quantity)
      }

    function removeItem() {
        props.onRemove?.();
    }


        return <>
            <hr></hr>
            <li className='p-2 flex flex-row gap-2'>
                <img className='md:w-10 lg:w-20 sm:h-8 lg:h-20 rounded-lg' src='https://picsum.photos/70/70'></img>
                <div className='flex-1 flex flex-col min-w-0 flex-wrap'>
                    <p className='w-full'>  {props.name}  </p>
                    <p  className='w-full'> {props.description}</p>
                    <p  className='w-full'>  {props.price} </p>
                </div>
                <div className='w-1/4 pt-4'>
                    <Quantity num={quant} onInc={updateQuantity} onDec={updateQuantity}></Quantity>
                </div>
                <div className="flex justify-center items-center mr-4 w-20">
                    {total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                </div>
                <button  onClick={removeItem} className="fa-solid fa-trash "></button>
            </li>
        </>

    }
