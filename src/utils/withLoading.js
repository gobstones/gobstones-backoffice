export default (promise, component) => {
  component.setState({ isLoading: true });
  promise.finally(() => {
    component.setState({ isLoading: false });
  });
  return promise;
};
