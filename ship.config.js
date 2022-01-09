module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['libs/*'],
    packagesToPublish: ['dist/libs/chakra'],
  },
}
