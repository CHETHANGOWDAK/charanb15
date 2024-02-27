class addJobSubMenuPage{

    jobSubmenuItem(){

        return "Job"

}
    addJobTitleSubmenuItem(){

        return "Job Titles"
    }

    AddMenuItem(){

        return " Add "
    }

    FirstNameInput(){

        return 'input[class="oxd-input oxd-input--active"]'
    }

    LastNameInput(){

        return 'textarea[placeholder="Type description here"]'
    }

}

const job = new addJobSubMenuPage()

export default job