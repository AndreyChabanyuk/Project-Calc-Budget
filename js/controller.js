import * as view from "./view.js";
import * as model from "./module.js";



//Start
init();


// Functions
function init() {
    displayMonth()
    insertTestData();
    view.renderBudget(model.calcBudget());
    addEventListener();

};


function addEventListener(){
    view.elements.form.addEventListener('submit', createRecord)

    // Удаление
    document.body.addEventListener('click', function (e) {
        // Кнопка удалить
        if (e.target.closest('button.item__remove')) {
            deleteRecord(e);
        }

    });
};


function createRecord(e){
	e.preventDefault();

    //Check form
    const checkResult = view.checkEmptyFields();
    if (checkResult === false) return;
    
    //Get form data
    const formData = view.getFormData()
	const record = model.createRecord(formData);

    //Отображаем запись на страницу
    view.renderRecord(record)


    // Посчитать бюджет
    view.renderBudget(model.calcBudget());
    view.clearForm();
    insertTestData();
};


function deleteRecord(e){
    const id = +view.removeRecord(e);
    model.deleteRecord(id);
	view.renderBudget(model.calcBudget());
}


function insertTestData () {

    const randomData = model.getTestData()
    view.renderTestData(randomData) 

};


function displayMonth() {
    
    const monthYear = model.getMonthYear();
    view.renderMonth(monthYear.month, monthYear.year);
};

