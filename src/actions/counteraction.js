export const increment = () => {
    return {
      type: "INCREMENT",
      payload: 2,
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };