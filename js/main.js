var options = {

    chart: {
        height: 350,
        type: 'line',

        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    series: [
        {
            name: "Monto atrasado",
            data: [0, 0, 0, 0, 0, 45]
        },
        {
            name: "Mes atrasados",
            type: 'column',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        }
    ],
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

    },

};

var chart = new ApexCharts(document.querySelector("#cyhart"), options);
chart.render();



var options = {
    series: [{
        name: 'Monto atrasado',
        data: [0, 0, 0, 0, 0, 45],
        

    }, {
        name: 'Mes atrasado',
        data: [0, 0, 0, 0, 0, 1]
    }],
    chart: {
        toolbar: {
            show: false,
        },
        height: 350,
        type: 'area',
    },
    colors: ['#e28413', '#ef271b'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();





var options = {
    series: [{
        name: 'Mes pagado',
        type: 'column',
        data: [35, 45, 55, 45, 55, 0]
    }, {
        name: 'Día de pagado',
        type: 'line',
        data: [15, 15, 28, 28, 15, 0]
    }],
    chart: {toolbar: {
        show: false,
    },
        height: 350,
        type: 'line',
    },
    toolbar: {
        show: false,
    },
    stroke: {

        width: [0, 4]
    },

    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },

};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();




const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40
        }
        ,

        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});