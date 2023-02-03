import { scaler } from '../helper/scaler';
import { typography } from './typography';
import { white, gray, black, green, primary } from './palette';

const colors = {
    white,
    gray,
    black,
    green,
    primary,
};

const base = {
    templatePadding: scaler(16),
    // Component padding
    smallComponentPadding: scaler(8),
    mediumComponentPadding: scaler(12),
    largeComponentPadding: scaler(16),
    // Component radius
    smallRadius: scaler(6),
    mediumRadius: scaler(7),
    largeRadius: scaler(8),
};

export default {
    colors,
    base,
    typography,
};