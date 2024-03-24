import { useCreateRestaurant, useGetRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/components/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const {createRestaurant, isLoading} = useCreateRestaurant()
  const { restaurant } = useGetRestaurant()

  return (
    <ManageRestaurantForm onSave={createRestaurant} restaurant={restaurant} isLoading={isLoading}/>
  )
}

export default ManageRestaurantPage;