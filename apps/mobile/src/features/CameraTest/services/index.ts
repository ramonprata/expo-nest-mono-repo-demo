import { eComApi } from '@shared/api';

import { CameraManager } from './CameraTestManager';
import { CameraRepository } from './CameraTestRepository';
import mappers from '../utils/mappers';

const cameraRepository = new CameraRepository(eComApi);
const cameraManager = new CameraManager(cameraRepository, mappers);

export default cameraManager;
