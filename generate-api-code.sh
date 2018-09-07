yarn global add swaggy-c
swaggy-c --api-spec 'https://128.koronacloud.com/web/api/v3/swagger.yaml' --conf-file ./codegen-conf.json  --out-dir ./ javascript-gen
yarn install
yarn upgrade --latest
yarn add --dev grunt grunt-cli grunt-bump
