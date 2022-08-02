import { StyleSheet } from "react-native";

export const complaintBasketStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "rgb(204, 230, 255)"
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        color: "rgb(0, 92, 179)",
        alignSelf: 'center',
        paddingBottom: 50

    },
    cardButton: {
        margin: 20,
        marginLeft: 0,
        marginRight: 0
    }

})