// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import abouts from './abouts'
import contact from './contact'
import experiences from './experiences'
import heroItems from './heroItems'
import otherTechStacks from './otherTechStacks'
import portfolios from './portfolios'
import skills from './skills'
import techStacks from './techStacks'
import testimonials from './testimonials'
import versionControls from './versionControls'
import workExperience from './workExperience'
import startYearWorkExperience from './startYearWorkExperience'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    abouts,
    contact,
    experiences,
    heroItems,
    otherTechStacks,
    portfolios,
    skills,
    techStacks,
    testimonials,
    versionControls,
    workExperience,
    startYearWorkExperience
  ]),
})
