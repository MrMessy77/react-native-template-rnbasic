import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
    text_xs: {
        fontSize: 10
    },
    text_sm: {
        fontSize: 12
    },
    text_df: {
        fontSize: 14
    },
    text_lg: {
        fontSize: 16
    },
    text_xl: {
        fontSize: 18
    },
    text_white: {
        color: '#ffffff'
    },
    text_black: {
        color: '#333333'
    },
    text_gray: {
        color: '#aaaaaa'
    },
    text_red: {
        color: '#e54d42'
    },
    text_grey: {
        color: '#8799a3'
    }
});

export const flexStyles = StyleSheet.create({
    flex: {
        display: 'flex'
    },
    flex_sub: {
        flex: 1
    },
    flex_wrap: {
        flexWrap: 'wrap'
    },
    flex_direction_row: {
        flexDirection: 'row'
    },
    flex_direction_column: {
        flexDirection: 'column'
    },
    col_1: {
        width: '100%'
    },
    col_2: {
        width: '50%'
    },
    col_3: {
        width: '33.3%'
    },
    col_4: {
        width: '25%'
    },
    align_start: {
        alignItems: 'flex-start'
    },
    align_end: {
        alignItems: 'flex-end'
    },
    align_center: {
        alignItems: 'center'
    },
    align_stretch: {
        alignItems: 'stretch'
    },
    justify_start: {
        justifyContent: 'flex-start'
    },
    justify_center: {
        justifyContent: 'center'
    },
    justify_around: {
        justifyContent: 'space-around'
    },
    justify_between: {
        justifyContent: 'space-between'
    }
});

export const solidStyles = StyleSheet.create({
    solid: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    solid_bottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    solid_Left: {
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(0,0,0,0.1)'
    },
    solid_Top: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)'
    }
});

export const marginStyles = StyleSheet.create({
    margin_xs: {
        margin: 5
    },
    margint_sm: {
        margin: 10
    },
    margin: {
        margin: 15
    },
    margin_lg: {
        margin: 20
    },
    margin_xl: {
        margin: 25
    },
    margin_top_xs: {
        marginTop: 5
    },
    margin_top_sm: {
        marginTop: 10
    },
    margin_top: {
        marginTop: 15
    },
    margin_top_lg: {
        marginTop: 20
    },
    margin_top_xl: {
        marginTop: 25
    },
    margin_bottom_xs: {
        marginBottom: 5
    },
    margin_bottom_sm: {
        marginBottom: 10
    },
    margin_bottom: {
        marginBottom: 15
    },
    margin_bottom_lg: {
        marginBottom: 20
    },
    margin_bottom_xl: {
        marginBottom: 25
    },
    margin_right_xs: {
        marginRight: 5
    },
    margin_right_sm: {
        marginRight: 10
    },
    margin_right: {
        marginRight: 15
    },
    margin_right_lg: {
        marginRight: 20
    },
    margin_right_xl: {
        marginRight: 25
    },
    margin_left_xs: {
        marginLeft: 5
    },
    margin_left_sm: {
        marginLeft: 10
    },
    margin_left: {
        marginLeft: 15
    },
    margin_left_lg: {
        marginLeft: 20
    },
    margin_left_xl: {
        marginLeft: 25
    }
});

export const paddingStyles = StyleSheet.create({
    padding_xs: {
        padding: 5
    },
    padding_sm: {
        padding: 10
    },
    padding: {
        padding: 15
    },
    padding_lg: {
        padding: 20
    },
    padding_xl: {
        padding: 25
    },
    padding_top_xs: {
        paddingTop: 5
    },
    padding_top_sm: {
        paddingTop: 10
    },
    padding_top: {
        paddingTop: 15
    },
    padding_top_lg: {
        paddingTop: 20
    },
    padding_top_xl: {
        paddingTop: 25
    },
    padding_bottom_xs: {
        paddingBottom: 5
    },
    padding_bottom_sm: {
        paddingBottom: 10
    },
    padding_bottom: {
        paddingBottom: 15
    },
    padding_bottom_lg: {
        paddingBottom: 20
    },
    padding_bottom_xl: {
        paddingBottom: 25
    },
    padding_left_xs: {
        paddingLeft: 5
    },
    padding_left_sm: {
        paddingLeft: 10
    },
    padding_left: {
        paddingLeft: 15
    },
    padding_left_lg: {
        paddingLeft: 20
    },
    padding_left_xl: {
        paddingLeft: 25
    },
    padding_right_xs: {
        paddingRight: 5
    },
    padding_right_sm: {
        paddingRight: 10
    },
    padding_right: {
        paddingRight: 15
    },
    padding_right_lg: {
        paddingRight: 20
    },
    padding_right_xl: {
        paddingRight: 25
    }
});

export const bgStyles = StyleSheet.create({
    bg_white: {
        backgroundColor: '#ffffff'
    }
});

export const lineStyles = StyleSheet.create({
    line_gray: {
        borderColor: '#aaaaaa'
    },
    line_orange: {
        borderColor: '#f37b1d'
    }
});

export const themeStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    theme_color: {
        color: '#0D9DEF'
    },
    theme_bg: {
        backgroundColor: '#0D9DEF'
    },
    theme_text: {
        color: '#28282C'
    }
});

export default styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#ffffff'
    },
    card_container: {
        backgroundColor: '#f5222d',
        borderRadius: 5,
        overflow: 'hidden'
    },
    line_df: {
        borderColor: '#f5222d'
    },
    radius: {
        borderRadius: 5
    },
    round: {
        borderRadius: 5000
    },
    ...textStyles,
    ...flexStyles,
    ...solidStyles,
    ...marginStyles,
    ...paddingStyles,
    ...bgStyles,
    ...lineStyles,
    ...themeStyles
});
