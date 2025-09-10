import { eComApi } from '@shared/api';

import { LocationManager } from './LocationManager';
import { LocationRepository } from './LocationRepository';

const locationRepository = new LocationRepository(eComApi);
const locationManager = new LocationManager(locationRepository);

export default locationManager;
