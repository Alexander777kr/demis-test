
let initialState = {
    newsPreview: [
        {
            id: 1,
            imgUrl: "https://i.ytimg.com/vi/LoZiD6NcLZE/hqdefault.jpg",
            newsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            id: 2,
            imgUrl: "https://plamya-truda.ru/wp-content/uploads/2019/02/horoshie-novosti.jpg",
            newsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            id: 3,
            imgUrl: "https://www.postsovet.ru/uploads/images/0/5/f/e/1/cb2cade71d.png",
            newsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        

    ]
}


export const homePageReducer = (state = initialState, action) => {
    return state;
}