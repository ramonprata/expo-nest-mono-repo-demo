import { useMutation } from '@tanstack/react-query';

import locationManager from '../services';

export const useGeofencingResult = () => {
  const mutation = useMutation({
    mutationFn: ({
      latitude,
      longitude,
    }: {
      latitude: number;
      longitude: number;
    }) => locationManager.isUserInsideResort(latitude, longitude),
  });

  return {
    ...mutation,
    isInsideResort: mutation.data ?? null,
  };
};
