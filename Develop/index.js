const inquirer = require("inquirer")
function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: ['addManager', 'addIntern', 'addEngineer']
            },

        ])
        .then((response) => {
            if (response.choice === 'addManager') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Managers name?',
                        name: 'name',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your email?',
                        name: 'email',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your office number?',
                        name: 'officenumber',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your id?',
                        name: 'id',
                       
                    },
                ])

            }
            if (response.choice === 'addIntern') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'interns name?',
                        name: 'name',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your email?',
                        name: 'email',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your office number?',
                        name: 'officenumber',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your id?',
                        name: 'id',
                       
                    },
                ])

            }
            if (response.choice === 'addEngineer') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'engineers name?',
                        name: 'name',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your email?',
                        name: 'email',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your office number?',
                        name: 'officenumber',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your id?',
                        name: 'id',
                       
                    },
                ])
            }
        }
        )

}
menu()