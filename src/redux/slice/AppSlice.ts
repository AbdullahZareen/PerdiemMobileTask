import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataList } from '../../models/list-view';

interface IAppState {
    dataList: DataList[];
    userData: any[];
    value: any;
    isNotOnboardScreens: boolean
}

const initialState: IAppState = {
    dataList: [
        { name: 'Switch A', isToggle: false },
        { name: 'Switch B', isToggle: false },
        { name: 'Switch C', isToggle: false },
        { name: 'Switch D', isToggle: false },
        { name: 'Switch E', isToggle: false },
        { name: 'Switch F', isToggle: false },
        { name: 'Switch G', isToggle: false },
        { name: 'Switch H', isToggle: false },
        { name: 'Switch I', isToggle: false },
        { name: 'Switch J', isToggle: false },
    ],
    isNotOnboardScreens: false,
    userData: [],
    value: null
};

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateListViewToggle: (state, action: PayloadAction<Partial<IAppState>>) => {
            const index = action.payload
            const updatedData = state.dataList.map((item, i) =>
                i === index ? { ...item, isToggle: !item.isToggle } : item
            );
            state.dataList = updatedData
        },
        setUserData: (state, action: PayloadAction<string>) => {
            state.userData = [...state.userData, action.payload]
        },
        setIsNotOnboardScreens(state, action) {
            state.isNotOnboardScreens = action?.payload
        }
    },
});

export const { updateListViewToggle, setUserData, setIsNotOnboardScreens } = AppSlice.actions;

export const selectApp = (state: { app: IAppState }) => state.app;

export default AppSlice.reducer;
