export interface IBooks {
    id: string,
    title: string,
    rating: number,
    cost: number,
    description: string,
    author: string,
    cover: string,
    publicationDate: string
}

export const books: IBooks[] = [
    {
        id: '1',
        title: 'HTML5',
        rating: 4,
        cost: 10,
        description: 'ouhluy',
        author: 'Kopa',
        cover: require('../assets/images/book-1.jpg'),
        publicationDate: '2018',
    },
    {
        id: '2',
        title: 'JavaScript',
        rating: 4,
        cost: 10,
        description: 'efw',
        author: 'Erty',
        cover: require('../assets/images/book-2.jpg'),
        publicationDate: '2017',
    },
    {
        id: '3',
        title: 'Perl',
        rating: 4,
        cost: 10,
        description: 'kqef',
        author: 'Quis',
        cover: require('../assets/images/book-3.jpg'),
        publicationDate: '2012',
    },
    {
        id: '4',
        title: 'jQuery Coockbook',
        rating: 4,
        cost: 10,
        description: 'kjDWHKJW',
        author: 'Laj',
        cover: require('../assets/images/book-4.jpg'),
        publicationDate: '2098',
    },
    {
        id: '5',
        title: 'Copying and Pasting from Stack Overflow',
        rating: 4,
        cost: 10,
        description: 'wlefjh',
        author: 'Whba',
        cover: require('../assets/images/book-5.jpg'),
        publicationDate: '2000',
    },
    {
        id: '6',
        title: 'Arduino Cookbook',
        rating: 4,
        cost: 10,
        description: '',
        author: 'Macl',
        cover: require('../assets/images/book-6.jpg'),
        publicationDate: '2038',
    },
    {
        id: '7',
        title: 'Machine Learning and Security',
        rating: 4,
        cost: 10,
        description: 'qdwlkjn',
        author: 'Lakf',
        cover: require('../assets/images/book-7.jpg'),
        publicationDate: '2018',
    },
    {
        id: '8',
        title: 'Learning Swift',
        rating: 4,
        cost: 10,
        description: 'nvjenfqe',
        author: 'Anfkw',
        cover: require('../assets/images/book-8.jpg'),
        publicationDate: '2008',
    },
    {
        id: '9',
        title: 'vi and Vim',
        rating: 4,
        cost: 10,
        description: 'ewelfjn',
        author: 'Noka',
        cover: require('../assets/images/book-9.jpg'),
        publicationDate: '2003',
    },
    {
        id: '10',
        title: 'Learning React',
        rating: 4,
        cost: 10,
        description: 'lwkjefnw',
        author: 'Dan',
        cover: require('../assets/images/book-10.jpg'),
        publicationDate: '2019',
    }
]