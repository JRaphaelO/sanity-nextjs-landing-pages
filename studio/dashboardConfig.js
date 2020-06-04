export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed84bca99c6216514ecb699',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7bhou9t5',
                  apiId: 'da23dd0b-7615-4fbd-aac6-e3761b063dfa'
                },
                {
                  buildHookId: '5ed84bca9f98c8b7b9b717b6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ie65xmwv',
                  apiId: '386119ff-65d7-4bb7-9eae-42083ab8117d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JRaphaelO/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ie65xmwv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
