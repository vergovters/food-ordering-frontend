import { useCreateRestaurant, useGetMyRestaurantOrders, useGetRestaurant, useUpdateRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/components/forms/manage-restaurant-form/ManageRestaurantForm";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";

const ManageRestaurantPage = () => {
  const {createRestaurant, isLoading: isCreateLoading} = useCreateRestaurant()
  const { restaurant } = useGetRestaurant()
  const {updateRestaurant, isLoading: isUpdateLoading } = useUpdateRestaurant()

  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};


export default ManageRestaurantPage;