import { StyleSheet, Platform } from "react-native";
import pxToDp from "./pxToDp";

export const colors = {
  primary: '#fff',
  background: '#f5f5f5',
  text: '#28282c',
  card: '#fff',
  border: '#e1e1e1',
  notification: 'rgb(255, 69, 58)'
}

export const textStyles = StyleSheet.create({
  text_xs: {
    fontSize: pxToDp(20)
  },
  text_sm: {
    fontSize: pxToDp(24)
  },
  text_df: {
    fontSize: pxToDp(28)
  },
  text_lg: {
    fontSize: pxToDp(32)
  },
  text_xl: {
    fontSize: pxToDp(36)
  },
  text_white: {
    color: '#ffffff'
  },
  text_black: {
    color: '#333333'
  },
  text_red: {
    color: '#FC1E1E'
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
  justify_end: {
    justifyContent: 'flex-end'
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
    borderColor: colors.border
  },
  solid_left: {
    borderLeftWidth: 1,
    borderLeftColor: colors.border
  },
  solid_right: {
    borderRightWidth: 1,
    borderRightColor: colors.border
  },
  solid_bottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border
  },
  solid_top: {
    borderTopWidth: 1,
    borderTopColor: colors.border
  }
});

export const marginStyles = StyleSheet.create({
  margin_xs: {
    margin: pxToDp(10)
  },
  margint_sm: {
    margin: pxToDp(20)
  },
  margin: {
    margin: pxToDp(30)
  },
  margin_lg: {
    margin: pxToDp(40)
  },
  margin_xl: {
    margin: pxToDp(50)
  },
  margin_top_xs: {
    marginTop: pxToDp(10)
  },
  margin_top_sm: {
    marginTop: pxToDp(20)
  },
  margin_top: {
    marginTop: pxToDp(30)
  },
  margin_top_lg: {
    marginTop: pxToDp(40)
  },
  margin_top_xl: {
    marginTop: pxToDp(50)
  },
  margin_bottom_xs: {
    marginBottom: pxToDp(10)
  },
  margin_bottom_sm: {
    marginBottom: pxToDp(20)
  },
  margin_bottom: {
    marginBottom: pxToDp(30)
  },
  margin_bottom_lg: {
    marginBottom: pxToDp(40)
  },
  margin_bottom_xl: {
    marginBottom: pxToDp(50)
  },
  margin_right_xs: {
    marginRight: pxToDp(10)
  },
  margin_right_sm: {
    marginRight: pxToDp(20)
  },
  margin_right: {
    marginRight: pxToDp(30)
  },
  margin_right_lg: {
    marginRight: pxToDp(40)
  },
  margin_right_xl: {
    marginRight: pxToDp(50)
  },
  margin_left_xs: {
    marginLeft: pxToDp(10)
  },
  margin_left_sm: {
    marginLeft: pxToDp(20)
  },
  margin_left: {
    marginLeft: pxToDp(30)
  },
  margin_left_lg: {
    marginLeft: pxToDp(40)
  },
  margin_left_xl: {
    marginLeft: pxToDp(50)
  }
});

export const paddingStyles = StyleSheet.create({
  padding_xs: {
    padding: pxToDp(10)
  },
  padding_sm: {
    padding: pxToDp(20)
  },
  padding: {
    padding: pxToDp(30)
  },
  padding_lg: {
    padding: pxToDp(40)
  },
  padding_xl: {
    padding: pxToDp(50)
  },
  padding_top_xs: {
    paddingTop: pxToDp(10)
  },
  padding_top_sm: {
    paddingTop: pxToDp(20)
  },
  padding_top: {
    paddingTop: pxToDp(30)
  },
  padding_top_lg: {
    paddingTop: pxToDp(40)
  },
  padding_top_xl: {
    paddingTop: pxToDp(50)
  },
  padding_bottom_xs: {
    paddingBottom: pxToDp(10)
  },
  padding_bottom_sm: {
    paddingBottom: pxToDp(20)
  },
  padding_bottom: {
    paddingBottom: pxToDp(30)
  },
  padding_bottom_lg: {
    paddingBottom: pxToDp(40)
  },
  padding_bottom_xl: {
    paddingBottom: pxToDp(50)
  },
  padding_left_xs: {
    paddingLeft: pxToDp(10)
  },
  padding_left_sm: {
    paddingLeft: pxToDp(20)
  },
  padding_left: {
    paddingLeft: pxToDp(30)
  },
  padding_left_lg: {
    paddingLeft: pxToDp(40)
  },
  padding_left_xl: {
    paddingLeft: pxToDp(50)
  },
  padding_right_xs: {
    paddingRight: pxToDp(10)
  },
  padding_right_sm: {
    paddingRight: pxToDp(20)
  },
  padding_right: {
    paddingRight: pxToDp(30)
  },
  padding_right_lg: {
    paddingRight: pxToDp(40)
  },
  padding_right_xl: {
    paddingRight: pxToDp(50)
  },
  padding_horizontal_xs: {
    paddingHorizontal: pxToDp(10)
  },
  padding_horizontal_sm: {
    paddingHorizontal: pxToDp(20)
  },
  padding_horizontal: {
    paddingHorizontal: pxToDp(30)
  },
  padding_horizontal_lg: {
    paddingHorizontal: pxToDp(40)
  },
  padding_horizontal_xl: {
    paddingHorizontal: pxToDp(50)
  }
});

export const bgStyles = StyleSheet.create({
  bg_white: {
    backgroundColor: '#ffffff'
  },
  bg_red: {
    backgroundColor: '#FC1E1E'
  }
});

export default styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  view_container: {
    backgroundColor: colors.primary
  },
  card_container: {
    backgroundColor: colors.card,
    borderRadius: pxToDp(10),
    // overflow: 'hidden',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    ...paddingStyles.padding,
  },
  text: {
    fontSize: pxToDp(28),
    color: colors.text
  },
  text_sub: {
    fontSize: pxToDp(26),
    color: '#666'
  },
  full_screen: {
    width: '100%',
    height: '100%'
  },
  full_screen_absolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  center: {
    ...flexStyles.flex_direction_row,
    ...flexStyles.align_center,
    ...flexStyles.justify_center
  },
  between: {
    ...flexStyles.flex_direction_row,
    ...flexStyles.align_center,
    ...flexStyles.justify_between
  },
  ...textStyles,
  ...flexStyles,
  ...solidStyles,
  ...marginStyles,
  ...paddingStyles,
  ...bgStyles
});
