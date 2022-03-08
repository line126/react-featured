function add(x: number, y: number) {
  return x * y;
}

export { add as default }; // ===> export default add;
// export default add;

/**
 * A module cannot have multiple default exports.ts(2528)
   re.ts(5, 17): The first export default is here.
   A module cannot have multiple default exports.ts(2528)
   re.ts(6, 16): Another export default is here.
 */
