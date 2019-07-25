
const varCss = ['--bg-color', '--text-color'];
const formThem = document.forms['customThemeFrom'];

const themes = {
    white: {
        '--bg-color': 'white',
        '--text-color': 'black',
    },
    black: {
        '--bg-color': 'black',
        '--text-color': 'white',
    },
};

const themeSelect = document.getElementById('themes');
const form = document.forms['customThemeFrom'];

const inputName = document.createElement('input');
inputName.setAttribute('name','themeName');
inputName.setAttribute('type','text');
inputName.setAttribute('id','themeName');
formThem.appendChild(inputName);

const newArray = varCss.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('controls-item');
    const label = document.createElement('label');
    label.for = `${item}`;
    label.textContent = `${item}`;
    label.setAttribute('for',`${item}`);
    const input = document.createElement('input');
    input.style = 'margin-left: 10px';
    input.setAttribute('id',`${item}`);
    input.setAttribute('name','color');
    input.setAttribute('type','color');
    input.setAttribute('data-var',`${item}`);

    div.appendChild(label);
    div.appendChild(input);
    formThem.appendChild(div);

});
const button = document.createElement('button');
button.textContent = 'Create custom threm';
button.setAttribute('type', 'submit');
formThem.appendChild(button);

const colorInputs = document.querySelectorAll('[data-var]');
const inputThemeName = form.elements['themeName'];

themeSelect.addEventListener('change', e => {
    const themeVariables = themes[themeSelect.value];
    Object.entries(themeVariables).forEach(([key, value]) => {
        document.body.style.setProperty(key, value);
    });
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const newTheme = {};
    const newThemeName = inputThemeName.value;
    colorInputs.forEach(input => {
        const key = input.dataset.var;
        const value = input.value;
        newTheme[key] = value;
    });

    themes[newThemeName] = newTheme;
    const newSelectOption = new Option(newThemeName, newThemeName);
    themeSelect.appendChild(newSelectOption);
    form.reset();
});






