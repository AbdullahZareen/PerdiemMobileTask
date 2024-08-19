import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { DataList } from '../models/list-view'
import { useDispatch } from 'react-redux'
import { updateListViewToggle } from '../redux/slice/AppSlice'

interface IMediaItem {
    item: DataList;
    index: any;
}
const ListViewItem = ({ item, index }: IMediaItem) => {
    const dispatch = useDispatch();
    const onChange = (value: any) => {
        dispatch(updateListViewToggle(index))
    }

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Switch value={item.isToggle} onValueChange={onChange} />
        </View>)
}

export default React.memo(ListViewItem)

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
})