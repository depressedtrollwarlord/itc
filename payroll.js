window.onload = () => {
    tabs = document.querySelectorAll("[data-tab]");
    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let page_num = tab.dataset.tab;
        tab.addEventListener("click", () => {
            document.querySelector(".tab.active").classList.remove("active");
            tab.classList.add("active");
            changePage(page_num);
        })
    }

    

    let input = {
        employee_names: [],
        days_worked: [],
        daily_rates: [],
        deduction_amount: []
    }

   
    table = document.querySelector(".table");

    
    function showTable() {
        let tbl_header, tbl_row, gross_pay, net_pay;

        tbl_header = "<thead>";
        tbl_header += "<tr>";
        tbl_header += "<th>No.</th>";
        tbl_header += "<th>Employee Name</th>";
        tbl_header += "<th>Days Worked</th>";
        tbl_header += "<th>Daily Rate</th>";
        tbl_header += "<th>Gross Pay</th>";
        tbl_header += "<th>Deduction Amount</th>";
        tbl_header += "<th>Net Pay</th>";
        tbl_header += "</tr>"
        tbl_header += "</thead>";

        tbl_row = "<tbody>";
        tbl_row += "<tr>";
        for (let i = 0; i < input.employee_names.length; i++) {
            row_num = i + 1;

            tbl_row += "<td>"+row_num+"</td>";

            tbl_row += "<td>"+input.employee_names[i]+"</td>";
            tbl_row += "<td>"+input.days_worked[i]+"</td>";
            tbl_row += "<td>"+input.daily_rates[i]+"</td>";

            gross_pay = input.daily_rates[i] * input.days_worked[i];
            tbl_row += "<td>"+gross_pay+"</td>";

            tbl_row += "<td>"+input.deduction_amount[i]+"</td>";

            net_pay = gross_pay - input.deduction_amount[i];
            tbl_row += "<td>"+net_pay+"</td>";

            tbl_row += "</tr>"; 
        }
        tbl_row += "</tbody>";
    
        table.innerHTML = "<table>"+tbl_header+tbl_row+"</table>";
    }
    
    document.getElementById("addList").addEventListener("click", () => {
        input.employee_names.push(document.getElementById("employeeName").value);
        input.days_worked.push(document.getElementById("days").value);
        input.daily_rates.push(document.getElementById("dailyRate").value);
        input.deduction_amount.push(document.getElementById("deduction").value);
        
        showTable();

    })


    
    document.getElementById("removeList").addEventListener("click", () => {
    let removeLine = Number(document.getElementById("workerDel").value) - 1;
    input.employee_names.splice(removeLine, 1);
    input.days_worked.splice(removeLine, 1);
    input.daily_rates.splice(removeLine, 1);
    input.deduction_amount.splice(removeLine, 1);

    showTable();
})
}