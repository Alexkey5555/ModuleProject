
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


timer('31 april 2022, 24:00');
menu()
modal()
validate()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
