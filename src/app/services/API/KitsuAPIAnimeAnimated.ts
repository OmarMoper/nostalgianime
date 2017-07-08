import {Anime} from '../../models/Anime';

/**
 * Get genres from kitsu api.
 *
 * https://kitsu.io/api/edge/anime/650?fields[anime]=startDate,coverImage,canonicalTitle
 */
export class KitsuAPIAnimeAnimated {

   /**
    * Get static animes list.
    *
    * Better than caching, better than requesting everytime, we have static
    * list, and only request the images.
    *
    * @TODO: minify!
    *
    * @return array
    *   Static list.
    */
   public getStaticList() {
       return [
            {
id: "3936",
type: "anime",
links: {
self: "https://kitsu.io/api/edge/anime/3936"
},
attributes: {
startDate: "2009-04-05",
coverImage: {
tiny: "https://media.kitsu.io/anime/cover_images/3936/tiny.jpg?1416235870",
small: "https://media.kitsu.io/anime/cover_images/3936/small.jpg?1416235870",
large: "https://media.kitsu.io/anime/cover_images/3936/large.jpg?1416235870",
original: "https://media.kitsu.io/anime/cover_images/3936/original.jpg?1416235870"
},
canonicalTitle: "Fullmetal Alchemist: Brotherhood"
}
}
,
{
id: "5853",
type: "anime",
links: {
self: "https://kitsu.io/api/edge/anime/5853"
},
attributes: {
startDate: "2011-01-07",
coverImage: {
tiny: "https://media.kitsu.io/anime/cover_images/5853/tiny.jpg?1426299089",
small: "https://media.kitsu.io/anime/cover_images/5853/small.jpg?1426299089",
large: "https://media.kitsu.io/anime/cover_images/5853/large.jpg?1426299089",
original: "https://media.kitsu.io/anime/cover_images/5853/original.jpg?1426299089"
},
canonicalTitle: "Mahou Shoujo Madokaâ˜…Magica"
}
},
{
id: "220",
type: "anime",
links: {
self: "https://kitsu.io/api/edge/anime/220"
},
attributes: {
startDate: "1999-06-30",
coverImage: {
tiny: "https://media.kitsu.io/anime/cover_images/220/tiny.jpg?1416413593",
small: "https://media.kitsu.io/anime/cover_images/220/small.jpg?1416413593",
large: "https://media.kitsu.io/anime/cover_images/220/large.jpg?1416413593",
original: "https://media.kitsu.io/anime/cover_images/220/original.jpg?1416413593"
},
canonicalTitle: "Great Teacher Onizuka"
}
},
{
id: "123",
type: "anime",
links: {
self: "https://kitsu.io/api/edge/anime/123"
},
attributes: {
startDate: "1998-10-02",
coverImage: {
tiny: "https://media.kitsu.io/anime/cover_images/123/tiny.jpg?1464470201",
small: "https://media.kitsu.io/anime/cover_images/123/small.jpg?1464470201",
large: "https://media.kitsu.io/anime/cover_images/123/large.jpg?1464470201",
original: "https://media.kitsu.io/anime/cover_images/123/original.jpg?1464470201"
},
canonicalTitle: "Kareshi Kanojo no Jijou"
}
},
        ];
   }

   public getList() {
       let animeStatic = this.getStaticList(), animeList = [];
       animeStatic.forEach(function(value, key, array) {
           animeList.push(new Anime(value));
       });
       return animeList;
   }

}
