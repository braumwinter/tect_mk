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
const activities_slider_controls = document.querySelectorAll('.main_slider_control');
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