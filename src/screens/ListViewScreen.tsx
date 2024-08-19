import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button, ListViewItem } from '../components';
import { setUserData } from '../redux/slice/AppSlice';
import { ColorConst } from '../constants';

const ListViewScreen = () => {
    const { dataList, userData } = useSelector((state: RootState) => state.app);
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    const renderItem = ({ item, index }: any) => {
        return <ListViewItem item={item} index={index} />
    }
    const handleAddData = () => {
        if (input) {
            dispatch(setUserData(input));
            setInput('');
        }
    };
    const RenderFLatListFooter = () => {
        return (<>
        </>)
    }
    return (
        <View>
            <FlatList
                data={dataList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <RenderFLatListFooter />}
                keyboardShouldPersistTaps={'handled'}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    placeholder="Enter data"
                    value={input}
                    onChangeText={setInput}
                    style={{ borderColor: 'gray', flex: 1, borderWidth: 1, padding: 10, margin: 10, marginBottom: 10 }}
                />
                <Button buttonStyle={{
                    backgroundColor: ColorConst.primaryColor, padding: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                }} buttonText="Submit" handlePress={handleAddData} />
            </View>
            <FlatList
                data={userData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>
    );
};


export default ListViewScreen;
