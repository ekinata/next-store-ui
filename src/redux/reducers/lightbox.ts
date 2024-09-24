import { AnyAction } from 'redux';

// Define action types
const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';

// Define the initial state
interface LightboxState {
    isOpen: boolean;
    content: string | null;
}

const initialState: LightboxState = {
    isOpen: false,
    content: null,
};

// Define the reducer
const lightboxReducer = (state = initialState, action: AnyAction): LightboxState => {
    switch (action.type) {
        case OPEN_LIGHTBOX:
            return {
                ...state,
                isOpen: true,
                content: action.payload,
            };
        case CLOSE_LIGHTBOX:
            return {
                ...state,
                isOpen: false,
                content: null,
            };
        default:
            return state;
    }
};

// Action creators
export const openLightbox = (content: string) => ({
    type: OPEN_LIGHTBOX,
    payload: content,
});

export const closeLightbox = () => ({
    type: CLOSE_LIGHTBOX,
});

export default lightboxReducer;