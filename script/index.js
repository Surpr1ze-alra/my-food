const modalFunc = () => {
    const modal = document.querySelector('.cart-modal_overlay');
    const cartBtn = document.querySelector('#cart-button');
    
    const openModal = () => {
        modal.classList.add("open");
    };
    const closeModal = () => {
        modal.classList.remove("open");
    };
    cartBtn.addEventListener("click", () => {
        openModal();
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains('cart-modal_overlay') ||
            event.target.closest('.cart-modal-header-close')
        ) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')
    const restArrey = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'Пицца плюс.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'Тануки.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'FoodBand.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'Жадина-пицца.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'Точка еды.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'PizzaBurger.jpg'
        }
    ]
    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }
    const randerRests = (arrey) => {
        container.innerHTML = ''
        arrey.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./index-copy.html?id=${card.id}" class="products-card">
                    <div class="products-card-image">
                        <img src="./img/Рестораны/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card-description">
                        <div class="products-card-description-row">
                            <h4 class="products-card-description-title">${card.title}</h4>
                            <div class="products-card-description-padge">${card.time} мин</div>
                        </div>
                        <div class="products-card-description-row">
                            <div class="products-card-description-info">
                                <div class="products-card-description-info-raiting">
                                    <img src="./img/Star.svg" alt="star">
                                    ${card.rating}
                                </div>
                                <div class="products-card-description-info-price">
                                    От ${card.price} ₽
                                </div>
                                <div class="products-card-description-info-group">
                                    ${card.type}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                `)
        })
    }
    if (container) {
        loading()
    setTimeout(() => {
        randerRests(restArrey)
    }, 1000)
    }
}

modalFunc()
restsFunc()