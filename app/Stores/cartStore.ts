import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import { type CartStoreType } from '../types/types'




interface CartItemProps{
    items: CartStoreType[] 
    setItemCart: (item: CartStoreType) => void
    deleteItem: (item: CartStoreType) => void
}

export const CartStore = create<CartItemProps>()(
    persist(
        (set, get) => ({
            items: [],
            setItemCart: (item: CartStoreType) =>{
                const currentItems = get().items;


                set(() =>({
                    items: [...currentItems, item]
                }))
            },
            deleteItem: (itemDelete: CartStoreType) =>{
                const currentItems = get().items;


                const filterItems = currentItems.filter((item) => item.id !== itemDelete.id)


                set(() => ({
                    items: [...filterItems]
                }))

            }

        }),
        {
            name: 'cart-store',
            partialize: (state) => ({items: state.items})
        }


    )
)