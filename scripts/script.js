// Функція для створення панелі управління стилями
const createStylePanel = () => {
    const body = document.body; // Отримуємо body сайту
    if (!body) return;

    // Створюємо контейнер для панелі і кнопки
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '1000';

    // Кнопка для приховування/показу панелі у вигляді хрестика на чорному колі
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '×';  // Символ хрестика
    toggleButton.style.fontSize = '24px';
    toggleButton.style.fontWeight = 'bold';
    toggleButton.style.backgroundColor = 'black';  // Чорний фон
    toggleButton.style.border = 'none';
    toggleButton.style.color = 'white';  // Білий хрестик
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.padding = '10px';
    toggleButton.style.width = '35px'; // Ширина кнопки
    toggleButton.style.height = '35px'; // Висота кнопки
    toggleButton.style.borderRadius = '100%';  // Округлі краї для кола
    toggleButton.style.lineHeight = '0';
    toggleButton.style.transition = 'background-color 0.3s';

    const panel = document.createElement('div');
    panel.id = 'stylePanel';
    panel.style.display = 'flex'; // Панель спочатку відображається
    Object.assign(panel.style, {
        backgroundColor: 'black',
        color: 'white',
        flexDirection: 'column',
        gap: '8px',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        width: '220px', // Зменшена ширина панелі
    });

    // Відображення/приховування панелі
    toggleButton.addEventListener('click', () => {
        if (panel.style.display === 'none') {
            panel.style.display = 'flex'; // Показуємо панель
            toggleButton.textContent = '×';  // Залишаємо хрестик
        } else {
            panel.style.display = 'none'; // Приховуємо панель
            toggleButton.textContent = '+';  // Замінимо хрестик на плюсик
        }
    });

    // Додаємо кнопку та панель до контейнера
    container.appendChild(toggleButton);
    container.appendChild(panel);
    body.appendChild(container);

    // 1. Створення панелі для зміни кольору фону
    const backgroundPanel = document.createElement('div');
    const labelBackgroundColor = document.createElement('label');
    labelBackgroundColor.textContent = 'Колір фону:';
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = 'backgroundColorPicker';
    Object.assign(colorInput.style, {
        width: '100%',
        padding: '4px',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
    });

    backgroundPanel.appendChild(labelBackgroundColor);
    backgroundPanel.appendChild(colorInput);
    panel.appendChild(backgroundPanel);

    // 2. Створення панелі для зміни кольору тексту
    const textColorPanel = document.createElement('div');
    const labelTextColor = document.createElement('label');
    labelTextColor.textContent = 'Колір тексту:';
    const textColorInput = document.createElement('input');
    textColorInput.type = 'color';
    textColorInput.id = 'textColorPicker';
    Object.assign(textColorInput.style, {
        width: '100%',
        padding: '4px',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
    });

    textColorPanel.appendChild(labelTextColor);
    textColorPanel.appendChild(textColorInput);
    panel.appendChild(textColorPanel);

    // 3. Створення панелі для зміни розміру шрифтів
    const fontSizePanel = document.createElement('div');
    const labelFontSize = document.createElement('label');
    labelFontSize.textContent = 'Розмір шрифту:';
    const fontSizeInput = document.createElement('input');
    fontSizeInput.type = 'range';
    fontSizeInput.id = 'fontSizePicker';
    fontSizeInput.min = '10';
    fontSizeInput.max = '50';
    fontSizeInput.value = '16';
    Object.assign(fontSizeInput.style, {
        width: '100%',
        padding: '4px',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
    });

    fontSizePanel.appendChild(labelFontSize);
    fontSizePanel.appendChild(fontSizeInput);
    panel.appendChild(fontSizePanel);

    // 4. Кнопка для застосування змін
    const applyButton = document.createElement('button');
    applyButton.textContent = 'Застосувати';
    Object.assign(applyButton.style, {
        padding: '6px',
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    });

    applyButton.addEventListener('click', () => {
        const backgroundColor = colorInput.value;
        const textColor = textColorInput.value;
        const fontSize = fontSizeInput.value;

        // Застосовуємо зміни
        body.style.backgroundColor = backgroundColor;
        const textElements = document.querySelectorAll('h1, p');
        textElements.forEach(el => {
            el.style.color = textColor;
            el.style.fontSize = `${fontSize}px`;
        });
    });

    panel.appendChild(applyButton);
};

// Ініціалізація після завантаження сторінки
window.onload = () => {
    createStylePanel();
};
