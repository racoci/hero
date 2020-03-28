import { StyleSheet } from "react-native"
import Constants from "expo-constants"

export default StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontSize: 15,
        color: "#737380",
    },
    headerTextBold: {
        fontWeight: "bold",
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 16,
        color: "#13131A",
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380",
    },
    incidents: {
        marginTop: 32,
    },
    incident:{
        marginTop: 48,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },
    incidentProperty: {
        marginTop: 16,
        fontSize:14,
        color: "#41414d",
        fontWeight: "bold",
    },
    incidentValue: {
        fontSize: 15,
        color: "#737380",
    },
    contact: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },
    heroTitle : {
        fontWeight: "bold",
        fontSize:20,
        color: "#13131A",
        marginBottom: 16,
    },
    heroDescription : {
        marginTop: 16,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380",
    },
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    action: {
        flexDirection: "row",
        backgroundColor: "#E02041",
        borderRadius: 8,
        height: 50,
        width: 128,
        justifyContent: "center",
        alignItems: "center"
    },
    actionText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",

    },
});