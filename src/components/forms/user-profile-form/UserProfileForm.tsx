import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
    currentUser: User;
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};

const UserProfileForm = ({
    onSave,
    isLoading,
    currentUser,
    title = "USER PROFILE",
    buttonText = "Submit",
  }: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
      });

    useEffect(()=>{
        form.reset(currentUser)
    }, [currentUser, form])
    
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className=" bg-gray-50 rounded-lg md:p-5 border-solid border-2 border-red-500 flex"

            >
                {
                    title === "USER PROFILE" &&
                        <div>
                            <img src="https://i.pinimg.com/originals/e8/28/66/e82866c68c3dd3f148320871dbb825b3.jpg" alt="" className="rounded-l-lg hidden md:block"/>
                        </div>
                    
                }
                <div className="p-5 md:ml-[100px] md:mt-[100px]">
                        <div className="mt-2 mb-6">
                            <h2 className="text-4xl font-bold">{title}</h2>
                            <FormDescription>
                                View and change your profile information here
                            </FormDescription>
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled className="bg-white" />
                                </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} className="bg-white" />
                                </FormControl>
                                <FormMessage/>
                                </FormItem>
                        )}
                        />
                        <div className="flex flex-col md:flex-row gap-4">
                            <FormField
                                control={form.control}
                                name="addressLine1"
                                render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Address Line 1</FormLabel>
                                    <FormControl>
                                    <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                    <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                    <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </div>
                        {isLoading ? (
                            <LoadingButton />
                            ) : (
                            <button type="submit" className="bg-red-500 p-2 rounded-sm w-full md:w-[600px] text-white mt-5">
                                {buttonText}
                            </button>
                        )}
                </div>
                
            </form>
        </Form>
    )
}

export default UserProfileForm;

