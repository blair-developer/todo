export const clone =<T> (data : T) =>{
      JSON.parse(JSON.stringify(data));
};