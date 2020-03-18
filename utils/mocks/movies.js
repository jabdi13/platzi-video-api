const moviesMock = [
    {
        "id": "5e62ed0afc13ae0eae000000",
        "title": "Snake and Crane Arts of Shaolin (She hao ba bu)",
        "cover": "http://dummyimage.com/155x205.png/5fa2dd/ffffff",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "year": 2004,
        "duration": 60,
        "contentRating": "PG-13",
        "source": "http://creativecommons.org/libero/quis/orci/nullam/molestie/nibh.json",
        "tags": [
            "Drama",
            "Comedy|Drama",
            "Comedy|Drama"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000001",
        "title": "Tea For Two",
        "cover": "http://dummyimage.com/119x229.png/5fa2dd/ffffff",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "duration": 1908,
        "contentRating": "PG-13",
        "source": "https://miibeian.gov.cn/quam/a/odio/in/hac.jsp",
        "tags": [
            "Comedy",
            "Drama",
            "Comedy",
            "Romance|Western"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000002",
        "title": "Fire Birds",
        "cover": "http://dummyimage.com/134x122.jpg/5fa2dd/ffffff",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "duration": 1965,
        "contentRating": "R",
        "source": "http://skyrock.com/fusce/lacus/purus/aliquet/at/feugiat.xml",
        "tags": [
            "Drama|Sci-Fi|Thriller"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000003",
        "title": "Devil's Own, The",
        "cover": "http://dummyimage.com/125x147.jpg/dddddd/000000",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "duration": 1942,
        "contentRating": "PG",
        "source": "http://phpbb.com/ligula/vehicula/consequat/morbi/a.jsp",
        "tags": [
            "Comedy|Drama",
            "Comedy|Romance",
            "Comedy",
            "Drama"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000004",
        "title": "Air Force",
        "cover": "http://dummyimage.com/238x197.bmp/ff4444/ffffff",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "duration": 1902,
        "contentRating": "PG-13",
        "source": "http://reverbnation.com/nulla/ut/erat/id.json",
        "tags": [
            "Drama|Horror|Thriller"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000005",
        "title": "Vive L'Amour (Ai qing wan sui)",
        "cover": "http://dummyimage.com/183x105.png/5fa2dd/ffffff",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "duration": 2004,
        "contentRating": "PG",
        "source": "http://technorati.com/proin/leo/odio/porttitor/id/consequat/in.aspx",
        "tags": [
            "Drama|Romance",
            "Comedy|Fantasy",
            "Comedy",
            "Adventure|Drama|War",
            "Comedy|Drama"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000006",
        "title": "Living Will...",
        "cover": "http://dummyimage.com/153x228.bmp/5fa2dd/ffffff",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "duration": 1933,
        "contentRating": "G",
        "source": "https://microsoft.com/in/ante/vestibulum/ante/ipsum.json",
        "tags": [
            "Comedy",
            "Drama",
            "Documentary",
            "Drama|Romance",
            "Animation|Fantasy"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000007",
        "title": "Enter the Ninja (a.k.a. Ninja I)",
        "cover": "http://dummyimage.com/244x172.jpg/cc0000/ffffff",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "duration": 2034,
        "contentRating": "G",
        "source": "http://storify.com/id/justo/sit/amet.aspx",
        "tags": [
            "Drama",
            "Documentary",
            "Fantasy|Horror|Mystery|Thriller",
            "Comedy|Horror"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000008",
        "title": "Destination Moon",
        "cover": "http://dummyimage.com/137x173.png/ff4444/ffffff",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "duration": 1927,
        "contentRating": "R",
        "source": "http://amazon.com/nam/ultrices/libero/non/mattis.html",
        "tags": [
            "Musical",
            "Comedy|Crime|Drama|Romance",
            "Drama|Thriller",
            "Crime|Drama|Mystery|Thriller"
        ]
    },
    {
        "id": "5e62ed0afc13ae0eae000009",
        "title": "Dead Zone, The",
        "cover": "http://dummyimage.com/163x147.jpg/cc0000/ffffff",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "duration": 2059,
        "contentRating": "G",
        "source": "http://unblog.fr/congue/risus/semper/porta/volutpat/quam.html",
        "tags": [
            "Drama|Romance",
            "Drama"
        ]
    }
];

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async getMovie() {
        return Promise.resolve(moviesMock[0]);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0].id);
    }

    async updateMovie() {
        return Promise.resolve(moviesMock[0].id);
    }

    async deleteMovie() {
        return Promise.resolve(moviesMock[0].id);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock
};
