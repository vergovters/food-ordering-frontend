import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <div className="border-sla max-w-[600px] mt-5">
      <div className="flex flex-row border-none align-middle">
        <h3 className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </h3>
        <CardDescription className="text-xl ml-2 mt-1">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </div>
      <CardContent className="flex mt-1">
        {restaurant.cuisines.map((item, index) => (
          <span className="flex">
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
      <CardDescription className="text-xl ml-4 mb-2 mt-[-25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </CardDescription>
    </div>
  );
};

export default RestaurantInfo;