import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useGetUser } from "@/api/UserApi";
import UserProfileForm,{ UserFormData }  from "./forms/user-profile-form/UserProfileForm";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in to check out
      </button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button disabled={disabled} className="bg-[#F54748] text-white py-3 px-6 rounded-[32px] hidden md:block transform hover:translate-y-[-3px] transition-all duration-300">
          Go to checkout
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[850px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Deliery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;