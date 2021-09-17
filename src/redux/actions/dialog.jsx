import * as type from '../types';

export const openDialog = ({data, mode}) => {
    return {
        data, mode,
        type: type.OPEN_DIAGLOG
    }
}

export const closeDialog = (data) => {
    return {
        data,
        type: type.CLOSE_DIALOG
    }
}