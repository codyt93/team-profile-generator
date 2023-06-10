const inquirer = require("inquirer")
const employees = []
const {Manager,Intern,Engineer} = require("./lib")
const generateHtml = require("./util/generateHtml")
const fs = require("fs")
function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: ['addManager', 'addIntern', 'addEngineer','finish']
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
                .then(res => {
                    let manager = new Manager (res.name,res.id,res.email,res.officenumber)
                    employees.push(manager)
                    menu()
                })

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
                        message: 'what is your school?',
                        name: 'school',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your id?',
                        name: 'id',
                       
                    },
                ])
                                .then(res => {
                    let intern = new Intern (res.name,res.id,res.email,res.school)
                    employees.push(intern)
                    menu()
                })

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
                        message: 'what is your github?',
                        name: 'github',
                       
                    },
                    {
                        type: 'input',
                        message: 'what is your id?',
                        name: 'id',
                       
                    },
                ])
                                .then(res => {
                    let engineer = new Engineer (res.name,res.id,res.email,res.github)
                    employees.push(engineer)
                    menu()
                })
               
            }
            if (response.choice === 'finish') {
              let html =  generateHtml(employees) 
              console.log (html)
fs.writeFileSync("./employees.Html",html)
            }
        }
        )

}
menu()