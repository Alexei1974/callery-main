import { createCardPhoto } from "./createCardPhoto.js";
import { createElem } from "./createElem.js";
import { scrollLoad } from "./scrollLoad.js";


export const renderGallery = (wrapper, photos) => {
    const gallery = createElem('ul', {
        className: 'grid'
    });

    const endElem = createElem('div');


    wrapper.append(gallery);

    const grid = new Masonry(gallery, {
        gutter: 10,
        columnWidth: 200,
        itemSelector: '.card',
        isFitWidth: true,
    });

    const cards = photos.map(createCardPhoto);

    Promise.all(cards)
        .then(cards => {
            // console.log(cards);

            gallery.append(...cards);
            grid.appended(cards);
            wrapper.append(endElem);
            scrollLoad(gallery, grid, endElem)
        })


};