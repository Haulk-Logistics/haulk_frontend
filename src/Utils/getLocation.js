export const getLocation = (array, instance) => {
    const result = array.find(x => x.state === instance);
    return result;
}