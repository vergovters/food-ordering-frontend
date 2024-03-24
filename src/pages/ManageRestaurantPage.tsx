import { useCreateRestaurant, useGetRestaurant, useUpdateRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/components/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const {createRestaurant, isLoading: isCreateLoading} = useCreateRestaurant()
  const { restaurant } = useGetRestaurant()
  const {updateRestaurant, isLoading: isUpdateLoading } = useUpdateRestaurant()

  const isEditing = !!restaurant

  return (
    <ManageRestaurantForm onSave={isEditing ? updateRestaurant : createRestaurant} restaurant={restaurant} isLoading={isUpdateLoading || isCreateLoading}/>
  )
}

export default ManageRestaurantPage;