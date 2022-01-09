module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['libs/*'],
    packagesToPublish: ['libs/chakra'],
  },
}
