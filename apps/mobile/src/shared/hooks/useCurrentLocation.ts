import { useQuery } from '@tanstack/react-query';
import * as Location from 'expo-location';

export const useCurrentLocation = () => {
  return useQuery({
    queryKey: ['current-location'],
    queryFn: async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      return loc;
    },
    staleTime: 0,
    enabled: false,
  });
};
