import { useGetRestaurant } from '@/api/ResApi';
import { useParams } from 'react-router-dom';

// Assuming your URL parameter is named 'id'
const DetailPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);

    return (
        <div>
            {isLoading ? <p>Loading...</p> : restaurant && (
                <div>
                  {restaurantId}
                </div>
            )}
        </div>
    );
}

export default DetailPage;