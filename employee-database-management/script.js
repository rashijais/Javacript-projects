(async function(){
    const res = await fetch("./constants/data.json");
    const data = await res.json();

    const employees = data;
    const empList = document.querySelector(".employee-list");
    const empSingle = document.querySelector(".single-employee");
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const createEmployee = document.querySelector(".createEmployee");
    const addEmployeeModal = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".addEmployee_create");

    createEmployee.addEventListener("click", () => {
        addEmployeeModal.style.display = "flex";
    });

    addEmployeeModal.addEventListener("click", (e) => {
        if (e.target.className.includes("addEmployee") && !e.target.closest(".form")) {
            addEmployeeModal.style.display = "none";
        }
    });

    addEmployeeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newEmployee = Object.fromEntries(formData.entries());
        newEmployee.id = employees.length ? employees[employees.length - 1].id + 1 : 1;
        employees.push(newEmployee);
        renderEmployees();
        addEmployeeModal.style.display = "none";
    });

    const renderSingleEmployee = () => {
        empSingle.innerHTML = `<div>ID: ${selectedEmployee.id}</div>
                                <div>Name: ${selectedEmployee.name}</div>
                                <div>Age: ${selectedEmployee.age}</div>
                                <div>City: ${selectedEmployee.city}</div>`;
    };

    const renderEmployees = () => {
        empList.innerHTML = '';
        employees.forEach(emp => {
            const empl = document.createElement("span");
            empl.id = emp.id;
            empl.textContent = emp.name;
            if(parseInt(selectedEmployeeId, 10) === emp.id){
                empl.classList.add("selected");
                selectedEmployee = emp;
            }
            empList.appendChild(empl);
        });
    };

    empList.addEventListener("click", (e) => {
        const target = e.target;
        if(target.tagName === 'SPAN' && selectedEmployeeId != target.id){
            selectedEmployeeId = target.id;
            selectedEmployee = employees.find(emp => emp.id.toString() === target.id);
            renderEmployees();
            renderSingleEmployee();
        }
    });

    renderEmployees();
    renderSingleEmployee();
})();
