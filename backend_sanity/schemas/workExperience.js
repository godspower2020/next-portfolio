export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {
                name:'position',
                title:'Position',
                type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
              name:'color',
              title:'Color',
              type:'string'
            },
            {
              name:'desc',
              title:'Desc',
              type:'string'
            }, 
            {
                name: 'points',
                title: 'Points',
               type:'array',
               of: [
                 {
                  name:'point',
                  title:'Point',
                  type:'string'
                 }
               ]
              }
    ]
}