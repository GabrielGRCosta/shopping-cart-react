import {ItensList} from './ItensList';
import { useState } from 'react';

export function Header() {
    const [itens, setItens] = useState(3);

    const handleQnt = (qnt:number) => {
        setItens(qnt);
    };

    return ( 
    <> 
        <div className="mt-10 py-4">
            <h1 className='text-3xl font-mono pb-1'>Carrinho de compras</h1>
            <p className='font-mono'>Você tem {itens} itens no carrinho</p>
        </div>
        <div className='flex flex-row'>
            <div className='w-full'>
                <ItensList onHandleQnt={(qnt) => handleQnt(qnt)}></ItensList>
            </div>
        </div>
    </>
    )
}