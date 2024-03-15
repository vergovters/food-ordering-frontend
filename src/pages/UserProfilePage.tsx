import { useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

    return (
        <UserProfileForm 
            onSave={updateUser}
            isLoading={isUpdateLoading}
        />
    );
  };
  
  export default UserProfilePage;