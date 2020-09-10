import yargs = require('yargs')
import calcWallStuds from './GeraldsHouse/BradleysSolution';

yargs.command(

    'calc-wall-studs',
    
    'Calculate the number of studs to frame a house for Gerald',
    
    function( yargs ){
        return yargs.options({
            w:{
                type: 'number',
                alias: 'width',
                description: 'The width of the house'
            },
            l:{
                type: 'number',
                alias: 'length',
                description: 'The length of the house'
            }
            
        });
    },

        function(args){
          console.log(calcWallStuds(Number(args.width), Number(args.length)));
        }
);

yargs.help().parse();