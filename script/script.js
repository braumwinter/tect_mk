const main_slider = document.getElementById('main_slider');
const main_slider_wrapper = document.querySelector('.main_slider_wrapper');
const main_slider_items = document.querySelectorAll('.main_slider_item');
const main_slider_controls = document.querySelectorAll('.main_slider_control');
const main_slider_control_left = document.getElementById('main_slider_arrow_left');
const main_slider_control_right = document.getElementById('main_slider_arrow_right');
const main_slider_wrapper_width = parseFloat(getComputedStyle(main_slider_wrapper).width);
const main_slider_item_width = parseFloat(getComputedStyle(main_slider_items[0]).width);
let main_slider_position_left_item = 0;
let main_slider_transform = 0;
const main_slider_step = main_slider_item_width / main_slider_wrapper_width * 100;
const main_slider_arr_items = [];
let main_slider_interval = 0;
const main_slider_config = {
    is_cycling: true,
    direction: 'right',
    interval: 5000,
    pause: true,
};

for (const key in main_slider_config) {
    if (key in main_slider_config) {
        main_slider_config[key] = main_slider_config[key];
    }
}

main_slider_items.forEach(function (item, index) {
    main_slider_arr_items.push({
        item: item,
        position: index,
        transform: 0
    });
});

const main_slider_position = {
    get_item_min: function () {
        let index_item = 0;
        main_slider_arr_items.forEach(function (item, index) {
            if (item.position < main_slider_arr_items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_item_max: function () {
        let index_item = 0;
        main_slider_arr_items.forEach(function (item, index) {
            if (item.position > main_slider_arr_items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_min: function () {
        return main_slider_arr_items[main_slider_position.get_item_min()].position;
    },
    get_max: function () {
        return main_slider_arr_items[main_slider_position.get_item_max()].position;
    }
}

function main_slider_transform_item(direction) {
    let next_item;
    if (direction === 'right') {
        main_slider_position_left_item++;
        if ((main_slider_position_left_item + main_slider_wrapper_width / main_slider_item_width - 1) > main_slider_position.get_max()) {
            next_item = main_slider_position.get_item_min();
            main_slider_arr_items[next_item].position = main_slider_position.get_max() + 1;
            main_slider_arr_items[next_item].transform += main_slider_arr_items.length * 100;
            main_slider_arr_items[next_item].item.style.transform = 'translateX(' + main_slider_arr_items[next_item].transform + '%)';
        }
        main_slider_transform -= main_slider_step;
    }
    if (direction === 'left') {
        main_slider_position_left_item--;
        if (main_slider_position_left_item < main_slider_position.get_min()) {
            next_item = main_slider_position.get_item_max();
            main_slider_arr_items[next_item].position = main_slider_position.get_min() - 1;
            main_slider_arr_items[next_item].transform -= main_slider_arr_items.length * 100;
            main_slider_arr_items[next_item].item.style.transform = 'translateX(' + main_slider_arr_items[next_item].transform + '%)';
        }
        main_slider_transform += main_slider_step;
    }
    main_slider_wrapper.style.transform = 'translateX(' + main_slider_transform + '%)';
}

function main_slider_cycle(direction) {
    if (!main_slider_config.is_cycling) {
        return;
    }
    main_slider_interval = setInterval(function () {
        main_slider_transform_item(direction);
    }, main_slider_config.interval);
}

main_slider_cycle(main_slider_config.direction);

main_slider_control_left.addEventListener('click', () => {
    main_slider_transform_item('left');
    clearInterval(main_slider_interval);
    main_slider_cycle(main_slider_config.direction);
}, false);

main_slider_control_right.addEventListener('click', () => {
    main_slider_transform_item('right');
    clearInterval(main_slider_interval);
    main_slider_cycle(main_slider_config.direction);
}, false);

main_slider.addEventListener('mouseenter', function () {
    main_slider_config.is_cycling = false;
    clearInterval(main_slider_interval);
});

main_slider.addEventListener('mouseleave', function () {
    main_slider_config.is_cycling = true;
    clearInterval(main_slider_interval);
    main_slider_cycle(main_slider_config.direction);
});

//--------------------------------------------------

const activities_slider = document.getElementById('activities_slider');
const activities_slider_wrapper = document.querySelector('.activities_slider_wrapper');
const activities_slider_items = document.querySelectorAll('.activities_slider_img');
const activities_slider_controls = document.querySelectorAll('.activities_slider_control');
const activities_slider_control_left = document.getElementById('activities_slider_arrow_left');
const activities_slider_control_right = document.getElementById('activities_slider_arrow_right');
const activities_slider_wrapper_width = parseFloat(getComputedStyle(activities_slider_wrapper).width);
const activities_slider_item_width = parseFloat(getComputedStyle(activities_slider_items[0]).width);
let activities_slider_position_left_item = 0;
let activities_slider_transform = 0;
const activities_slider_step = activities_slider_item_width / activities_slider_wrapper_width * 100;
const activities_slider_arr_items = [];
let activities_slider_interval = 0;
const activities_slider_config = {
    is_cycling: true,
    direction: 'right',
    interval: 5000,
    pause: true,
};

for (const key in activities_slider_config) {
    if (key in activities_slider_config) {
        activities_slider_config[key] = activities_slider_config[key];
    }
}

activities_slider_items.forEach(function (item, index) {
    activities_slider_arr_items.push({
        item: item,
        position: index,
        transform: 0
    });
});

const activities_slider_position = {
    get_item_min: function () {
        let index_item = 0;
        activities_slider_arr_items.forEach(function (item, index) {
            if (item.position < activities_slider_arr_items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_item_max: function () {
        let index_item = 0;
        activities_slider_arr_items.forEach(function (item, index) {
            if (item.position > activities_slider_arr_items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_min: function () {
        return activities_slider_arr_items[activities_slider_position.get_item_min()].position;
    },
    get_max: function () {
        return activities_slider_arr_items[activities_slider_position.get_item_max()].position;
    }
}

function activities_slider_transform_item(direction) {
    let next_item;
    if (direction === 'right') {
        activities_slider_position_left_item++;
        if ((activities_slider_position_left_item + activities_slider_wrapper_width / activities_slider_item_width - 1) > activities_slider_position.get_max()) {
            next_item = activities_slider_position.get_item_min();
            activities_slider_arr_items[next_item].position = activities_slider_position.get_max() + 1;
            activities_slider_arr_items[next_item].transform += activities_slider_arr_items.length * 100;
            activities_slider_arr_items[next_item].item.style.transform = 'translateX(' + activities_slider_arr_items[next_item].transform + '%)';
        }
        activities_slider_transform -= activities_slider_step;
    }
    if (direction === 'left') {
        activities_slider_position_left_item--;
        if (activities_slider_position_left_item < activities_slider_position.get_min()) {
            next_item = activities_slider_position.get_item_max();
            activities_slider_arr_items[next_item].position = activities_slider_position.get_min() - 1;
            activities_slider_arr_items[next_item].transform -= activities_slider_arr_items.length * 100;
            activities_slider_arr_items[next_item].item.style.transform = 'translateX(' + activities_slider_arr_items[next_item].transform + '%)';
        }
        activities_slider_transform += activities_slider_step;
    }
    activities_slider_wrapper.style.transform = 'translateX(' + activities_slider_transform + '%)';
}

function activities_slider_cycle(direction) {
    if (!activities_slider_config.is_cycling) {
        return;
    }
    activities_slider_interval = setInterval(function () {
        activities_slider_transform_item(direction);
    }, activities_slider_config.interval);
}

activities_slider_cycle(activities_slider_config.direction);

activities_slider_control_left.addEventListener('click', () => {
    activities_slider_transform_item('left');
    clearInterval(activities_slider_interval);
    activities_slider_cycle(activities_slider_config.direction);
}, false);

activities_slider_control_right.addEventListener('click', () => {
    activities_slider_transform_item('right');
    clearInterval(activities_slider_interval);
    activities_slider_cycle(activities_slider_config.direction);
}, false);

activities_slider.addEventListener('mouseenter', function () {
    activities_slider_config.is_cycling = false;
    clearInterval(activities_slider_interval);
});

activities_slider.addEventListener('mouseleave', function () {
    activities_slider_config.is_cycling = true;
    clearInterval(activities_slider_interval);
    activities_slider_cycle(activities_slider_config.direction);
});


/////////////////////////////////////////////////////////////////////

const review_slider = document.getElementById('review_slider');
const review_slider_wrapper = document.querySelector('.review_slider_wrapper');
const review_slider_items = document.querySelectorAll('.review_card');
const review_slider_controls = document.querySelectorAll('.review_slider_control');
const review_slider_control_left = document.getElementById('review_slider_navigation_arrow_left');
const review_slider_control_right = document.getElementById('review_slider_navigation_arrow_right');
const review_slider_navigation_list = document.getElementById('review_slider_navigation_list');
const review_slider_wrapper_width = parseFloat(getComputedStyle(review_slider_wrapper).width);
const review_slider_item_width = parseFloat(getComputedStyle(review_slider_items[0]).width);
let review_slider_position_left_item = 0;
let review_slider_transform = 0;
const review_slider_step = review_slider_item_width / review_slider_wrapper_width * 100;
let review_slider_arr_items = [];
let review_slide_active_number = 0;

review_slider_items.forEach(function (item, index) {
    item.setAttribute('review_slider_number', index);
    if(index === 0) {
        item.setAttribute('is_review_slider_activ', true);
    } else {
        item.setAttribute('is_review_slider_activ', false);
    }
    
    review_slider_arr_items.push({
        id: index,
        item: item,
        position: index,
        transform: 0
    });

    const review_navigation_item = document.createElement('li');
    review_navigation_item.className = 'review_slider_navigation_item';

    review_navigation_item.setAttribute('review_slider_navigation_number', index);

    if(index === 0) {
        review_navigation_item.classList.add('review_slider_navigation_item_active');
    }

    review_slider_navigation_list.appendChild(review_navigation_item);
});

let init_review_slider_arr_items = JSON.parse(JSON.stringify(review_slider_arr_items));

const review_slider_navigation_items = document.querySelectorAll('.review_slider_navigation_item');

const review_slider_position = {
    get_item_min: function () {
        let index_item = 0;
        review_slider_arr_items.forEach(function (item, index) {
            if (item.position < review_slider_arr_items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_item_max: function () {
        let index_item = 0;
        review_slider_arr_items.forEach(function (item, index) {
            if (item.position > review_slider_arr_items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_min: function () {
        return review_slider_arr_items[review_slider_position.get_item_min()].position;
    },
    get_max: function () {
        return review_slider_arr_items[review_slider_position.get_item_max()].position;
    }
}

function review_slider_transform_item (direction) {
    let next_item;
    if (direction === 'right') {
        review_slider_position_left_item++;
        review_slide_active_number++;

        console.log('review_slider_position_left_item', review_slider_position_left_item);
        console.log('review_slide_active_number', review_slide_active_number);

        if ((review_slider_position_left_item + review_slider_wrapper_width / review_slider_item_width - 1) > review_slider_position.get_max()) {


            next_item = review_slider_position.get_item_min();
            review_slider_arr_items[next_item].position = review_slider_position.get_max() + 1;
            review_slider_arr_items[next_item].transform += review_slider_arr_items.length * 100;
            review_slider_arr_items[next_item].item.style.transform = 'translateX(' + review_slider_arr_items[next_item].transform + '%)';
        }
    
        review_slider_transform -= review_slider_step;
    }
    if (direction === 'left') {
        review_slider_position_left_item--;
        review_slide_active_number--;

        if (review_slider_position_left_item < review_slider_position.get_min()) {
            
            
            next_item = review_slider_position.get_item_max();
            review_slider_arr_items[next_item].position = review_slider_position.get_min() - 1;
            review_slider_arr_items[next_item].transform -= review_slider_arr_items.length * 100;
            review_slider_arr_items[next_item].item.style.transform = 'translateX(' + review_slider_arr_items[next_item].transform + '%)';
        }

        review_slider_transform += review_slider_step;
    }
    review_slider_wrapper.style.transform = 'translateX(' + review_slider_transform + '%)';

    if(review_slide_active_number > 2) {
        review_slide_active_number -= 3;
    }

    review_slider_navigation_items.forEach(function (item) {
        item.classList.remove('review_slider_navigation_item_active');

        if(+item.getAttribute('review_slider_navigation_number') === review_slide_active_number) {
            item.classList.add('review_slider_navigation_item_active');
        }
    });
}

review_slider_control_left.addEventListener('click', () => {
    review_slider_transform_item('left');
}, false);

review_slider_control_right.addEventListener('click', () => {
    review_slider_transform_item('right');
}, false);

review_slider_navigation_items.forEach(function (item, index) {
    item.addEventListener('click', () => {
        console.log(index, 'navigation');
        review_slider_position_left_item = item.getAttribute('review_slider_navigation_number');
        review_slide_active_number = item.getAttribute('review_slider_navigation_number');
        review_slider_arr_items = JSON.parse(JSON.stringify(init_review_slider_arr_items));
        review_slider_wrapper.style.transform = 'translateX(' + ( -review_slider_step * index) + '%)';
        console.log(review_slider_arr_items);
    }, false);
});
