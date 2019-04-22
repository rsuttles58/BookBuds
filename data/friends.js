var bookBuds = [
    {
        "name": "dean",
        "photo": "http://www.babson.edu/media/babson/site-assets/content-assets/about/academics/dean-of-the-undergraduate-school/lapp-ian.jpg",
        "scores": [5, 2, 3, 5, 3, 4, 3, 4, 5, 2],
        "favorite_book": "The Count of Monte Cristo"
    },
    {
        "name": "elaine",
        "photo": "https://music.columbia.edu/sites/default/files/styles/full/public/headshots/es_deck.jpg?itok=_6S9uwa3",
        "scores": [3, 3, 2, 1, 1, 1, 1, 5, 5, 3],
        "favorite_book": "The Sisterhood of the Travelling Pants"
    },
    {
        "name": "kermit",
        "photo": "http://abcnewsradioonline.com/storage/e_Kermit_08302017.jpg?__SQUARESPACE_CACHEVERSION=1504118363101",
        "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        "favorite_book": "Before You Leap"
    },
    {
        "name": "Eric",
        "photo": "https://static4.businessinsider.com/image/57ae527ddb5ce9b2008b6935/paul-szoldra.jpg",
        "scores": [5, 2, 3, 5, 3, 4, 3, 4, 5, 2],
        "favorite_book": "Wolf Pack"
    },
    {
        "name": "susan",
        "photo": "https://www.surgery.wisc.edu/wp-content/uploads/2017/08/Thibeault_Susan_PhD_400px-1-300x300.jpg",
        "scores": [5, 2, 3, 5, 3, 4, 3, 4, 5, 2],
        "favorite_book": "Cemetery Road"
    },
    {
        "name": "michael",
        "photo": "https://m.media-amazon.com/images/M/MV5BY2Q5YmMyNzAtMmYyZi00YTgzLTgxM2EtZWM3OThlMjcyNjQxXkEyXkFqcGdeQXVyNzk5ODE2NDA@._V1_.jpg",
        "scores": [1, 1, 1, 5, 5, 5, 2, 4, 1, 2],
        "favorite_book": "Harry Potter:  The Sorcerer's Stone"
    },
    {
        "name": "mel",
        "photo": "https://www.indiewire.com/wp-content/uploads/2016/11/shutterstock_6907659d.jpg?w=780",
        "scores": [1, 5, 5, 5, 3, 3, 3, 4, 5, 2],
        "favorite_book": "The Ideal Team Player"
    },
    {
        "name": "alf",
        "photo": "https://pixel.nymag.com/imgs/daily/vulture/2018/08/01/01-alf-2.w330.h330.jpg",
        "scores": [2, 1, 4, 4, 3, 2, 1, 1, 1, 2],
        "favorite_book": "We Are Legion"
    },
]

var bookBud;
var bookBudPhoto;
var totalDifference = 0

//Working draft.  The logic is not vetted to this point.
function bookBudSelector() {
    var currentDifference = 0;
    for (var i = 0; i < bookBuds.length; i++) {
        for (var j = 0; j < bookBuds[i].scores.length; j++) {
            currentDifference = currentDifference + Math.abs((userData[i].scores[j] - bookBuds[i].scores[j]));
        }

        if (currentDifference < totalDifference) {
            bookBud = bookBuds[i].name;
            bookBudPhoto = bookBuds[i].photo;
        }
    }
    console.log("BookBud is: " + bookBud + " .");
}
module.exports = bookBuds, bookBudSelector, bookBud, bookBudPhoto;