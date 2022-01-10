# How to release

- confirm package.json (check dist dir after yarn build)
- create release PR
  ```shell
  yarn release --dry-run
  yarn release
  ```
- check auto PR by shipjs
- update changelog.md (and push it)
- merge pull request
