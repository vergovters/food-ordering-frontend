import { useGetRestaurant } from '@/api/ResApi';
import MenuItem from '@/components/MenuItem';
import RestaurantInfo from '@/components/RestaurantInfo';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
};

const DetailPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });


    if (isLoading || !restaurant) {
        return "Loading...";
      }

    return (
        <div className="flex flex-col gap-10">
        <AspectRatio ratio={16 / 5}>
          <img
            src={restaurant.imageUrl}
            className="rounded-md object-cover h-full w-full"
          />
        </AspectRatio>
        <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
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
  
          <div>
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
      </div>
    );
  };

export default DetailPage;