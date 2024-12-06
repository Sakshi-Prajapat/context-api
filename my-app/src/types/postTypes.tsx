export  interface Idata  {
    userId : number,
    id : string,
    title : string,
    body : string
}

export  type PostContextType = {
    data: Idata[];
  };