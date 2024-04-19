import { useGetRestaurant } from '@/api/ResApi';
import MenuItem from '@/components/MenuItem';
import OrderSummary from '@/components/OrderSummary';
import RestaurantInfo from '@/components/RestaurantInfo';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuItem as MenuItemType } from "../types";
import CheckoutButton from '@/components/CheckoutButton';
import { UserFormData } from '@/components/forms/user-profile-form/UserProfileForm';
import { useCreateCheckoutSession } from '@/api/OrderApi';
import Loader from '@/components/Loader/Loader';

export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
};

const DetailPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);
    const { createCheckoutSession, isLoading: isCheckoutLoading } =
    useCreateCheckoutSession();

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    const addToCart = (menuItem: MenuItemType) => {
        setCartItems((prevCartItems) => {
          const existingCartItem = prevCartItems.find(
            (cartItem) => cartItem._id === menuItem._id
          );
    
          let updatedCartItems;
    
          if (existingCartItem) {
            updatedCartItems = prevCartItems.map((cartItem) =>
              cartItem._id === menuItem._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
          } else {
            updatedCartItems = [
              ...prevCartItems,
              {
                _id: menuItem._id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: 1,
              },
            ];
          }
    
          sessionStorage.setItem(
            `cartItems-${restaurantId}`,
            JSON.stringify(updatedCartItems)
          );
    
          return updatedCartItems;
        });
      };

      const removeFromCart = (cartItem: CartItem) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.filter(
            (item) => cartItem._id !== item._id
          );
    
          sessionStorage.setItem(
            `cartItems-${restaurantId}`,
            JSON.stringify(updatedCartItems)
          );
    
          return updatedCartItems;
        });
      };


      const onCheckout = async (userFormData: UserFormData) => {
        if (!restaurant) {
          return;
        }
    
        const checkoutData = {
          cartItems: cartItems.map((cartItem) => ({
            menuItemId: cartItem._id,
            name: cartItem.name,
            quantity: cartItem.quantity.toString(),
          })),
          restaurantId: restaurant._id,
          deliveryDetails: {
            name: userFormData.name,
            addressLine1: userFormData.addressLine1,
            city: userFormData.city,
            country: userFormData.country,
            email: userFormData.email as string,
          },
        };
    
        const data = await createCheckoutSession(checkoutData);
        window.location.href = data.url;
      };

    if (isLoading || !restaurant) {
        return <Loader/>;
      }

    return (

      <div className='flex relative gap-[500px]'>
        <div className='mt-[150px] z-10'>
          <h2 className='text-6xl font-body font-bold'>Food made from<br/> the <span className='text-red-500'>heart</span></h2>
          <p className='fotn-body font-bold text-gray-500 text-lg'>and here to feed the soul</p> 

          <div className="flex flex-col gap-10 ml-3">
            <div className="flex flex-col gap-4">
                <RestaurantInfo restaurant={restaurant} />
                <span className="text-2xl font-bold tracking-tight">Menu</span>
                {restaurant.menuItems.map((menuItem) => (
                  <MenuItem
                    menuItem={menuItem}
                    addToCart={() => addToCart(menuItem)}
                  />
                ))}
              </div>
          </div>
        </div>
        <div className='bg-red-500 w-[1400px] h-[1400px] absolute rounded-full z-0 right-[-600px] top-[-800px]'>

        </div>
         <div className='mt-[300px] z-10'>
               <AspectRatio ratio={16 / 9}>
                  <img
                    src={restaurant.imageUrl}
                    className="rounded-md object-cover h-full w-full"
                  />
                </AspectRatio>
                    <Card>
                      <OrderSummary
                        restaurant={restaurant}
                        cartItems={cartItems}
                        removeFromCart={removeFromCart}
                      />
                      <CardFooter>
                        <CheckoutButton
                        
                          disabled={cartItems.length === 0}
                          onCheckout={onCheckout}
                          isLoading={isCheckoutLoading}
                        />
                      </CardFooter>
                    </Card>
          </div>
        </div>
    );
  };

export default DetailPage;


