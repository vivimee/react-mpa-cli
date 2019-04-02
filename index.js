#!/usr/bin/env node

const commander = require('commander');
const { exec } = require('child_process');
const package = require('./package.json');

commander
    .version(package.version)
    .description('A cli to create multiple pages react application.');

// define option
commander
    .command('new <project>')
    .action((projectName, cmd) => {
        exec(`git clone https://github.com/vivimee/react-mpa-template.git ${projectName}`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`
            To start use:

                cd ${projectName}
                yarn
                yarn dev
                
            Have fun!
            `);
        });
    });

commander.parse(process.argv);
