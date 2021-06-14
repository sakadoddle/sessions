/*

layout:  Base template integration
partials: Common template integration


To define partials path (In default express generator it doesn't provide the partials path so we should mention the path of partials)

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

*/


/*

To import partials

{{> PARTIAL_FILE_NAME_HERE}}

*/



/*

Template Conditions

if Condtions
{{#if CONDITION_HERE}}

{{else}}

{{/if}}

unless Condtions: (Opposite of if conditions)
{{#unless license}}

{{/unless}}


Loop
{{#each ARRAY}}
    {{this}}
{{/each}}
*/