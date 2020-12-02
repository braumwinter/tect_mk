const main_element = document.getElementById('main_slider');
const slider_wrapper = document.querySelector('.main_slider_wrapper');
const slider_items = document.querySelectorAll('.main_slider_item');
const slider_controls = document.querySelectorAll('.main_slider_control');
const slider_control_left = document.getElementById('main_slider_arrow_left');
const slider_control_right = document.getElementById('main_slider_arrow_right');
const wrapper_width = parseFloat(getComputedStyle(slider_wrapper).width);
const item_width = parseFloat(getComputedStyle(slider_items[0]).width);
let position_left_item = 0;
let transform = 0;
const step = item_width / wrapper_width * 100;
const items = [];
let interval = 0;
const config = {
    is_cycling: true,
    direction: 'right',
    interval: 5000,
    pause: true,
};

for (const key in config) {
    if (key in config) {
        config[key] = config[key];
    }
}

slider_items.forEach(function (item, index) {
    items.push({
        item: item,
        position: index,
        transform: 0
    });
});

const position = {
    get_item_min: function () {
        let index_item = 0;
        items.forEach(function (item, index) {
            if (item.position < items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_item_max: function () {
        let index_item = 0;
        items.forEach(function (item, index) {
            if (item.position > items[index_item].position) {
                index_item = index;
            }
        });
        return index_item;
    },
    get_min: function () {
        return items[position.get_item_min()].position;
    },
    get_max: function () {
        return items[position.get_item_max()].position;
    }
}

function transform_item(direction) {
    let next_item;
    if (direction === 'right') {
        position_left_item++;
        if ((position_left_item + wrapper_width / item_width - 1) > position.get_max()) {
            next_item = position.get_item_min();
            items[next_item].position = position.get_max() + 1;
            items[next_item].transform += items.length * 100;
            items[next_item].item.style.transform = 'translateX(' + items[next_item].transform + '%)';
        }
        transform -= step;
    }
    if (direction === 'left') {
        position_left_item--;
        if (position_left_item < position.get_min()) {
            next_item = position.get_item_max();
            items[next_item].position = position.get_min() - 1;
            items[next_item].transform -= items.length * 100;
            items[next_item].item.style.transform = 'translateX(' + items[next_item].transform + '%)';
        }
        transform += step;
    }
    slider_wrapper.style.transform = 'translateX(' + transform + '%)';
}

function cycle(direction) {
    if (!config.is_cycling) {
        return;
    }
    interval = setInterval(function () {
        transform_item(direction);
    }, config.interval);
}

cycle(config.direction);

slider_control_left.addEventListener('click', () => {
    transform_item('left');
    clearInterval(interval);
    cycle(config.direction);
}, false);

slider_control_right.addEventListener('click', () => {
    transform_item('right');
    clearInterval(interval);
    cycle(config.direction);
}, false);

main_element.addEventListener('mouseenter', function () {
    config.is_cycling = false;
        clearInterval(interval);
});

main_element.addEventListener('mouseleave', function () {
    config.is_cycling = true;
    clearInterval(interval);
    cycle(config.direction);
});