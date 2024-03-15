import { useGetUser, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetLoading} = useGetUser();

  if(isGetLoading){
    return <span>Loading...</span>
  }

  if(!currentUser){
    return <span>Unable to load user profile</span>
  }

    return (
        <UserProfileForm 
            onSave={updateUser}
            isLoading={isUpdateLoading}
            currentUser={currentUser}
        />
    );
  };
  
  export default UserProfilePage;