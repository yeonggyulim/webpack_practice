async function myFunc() {
  await new Promise((res) => setTimeout(res, 1000));
  const [{ add }, { default: _ }] = await Promise.all([
    import(/* webpackPreload: true */ "./util"),
    import(/* webpackPrefetch: true */ "lodash"),
  ]);
  console.log("value", _.fill([1, 2, 3], add(30, 20)));
}
myFunc();
