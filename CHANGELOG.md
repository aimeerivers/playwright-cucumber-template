# Changelog

## [4.0.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.2.3...v4.0.0) (2025-06-22)


### ⚠ BREAKING CHANGES

* This project is now fully converted over to ESM style imports. CommonJS require will no longer work.
* 'npm run test' has been changed to 'npm run cucumber'

### Features

* Add a script to open cucumber report ([#95](https://github.com/aimeerivers/playwright-cucumber-template/issues/95)) ([7a6bb93](https://github.com/aimeerivers/playwright-cucumber-template/commit/7a6bb93cf69704c0dee9cbe989389cad82c92f00))
* change test examples ([#9](https://github.com/aimeerivers/playwright-cucumber-template/issues/9)) ([81afd18](https://github.com/aimeerivers/playwright-cucumber-template/commit/81afd180180e1397561ddf7e39b211d4e05489cc))
* **cucumber:** use a cucumber world for browser/page management ([#4](https://github.com/aimeerivers/playwright-cucumber-template/issues/4)) ([9c8400a](https://github.com/aimeerivers/playwright-cucumber-template/commit/9c8400ac5fa67d233363377e1f7e8424ec2f9f69))
* **cucumber:** use pretty-formatter when running wip ([#16](https://github.com/aimeerivers/playwright-cucumber-template/issues/16)) ([6e1a629](https://github.com/aimeerivers/playwright-cucumber-template/commit/6e1a6299a0bc5d42dd5c5e11c36a700883f22865))
* Switch over to use ES modules ([#91](https://github.com/aimeerivers/playwright-cucumber-template/issues/91)) ([0df79ec](https://github.com/aimeerivers/playwright-cucumber-template/commit/0df79ec5dfec822d5ce449f5bb8110f848d84a99))
* Use a 10 minute timeout when running in wip mode ([#126](https://github.com/aimeerivers/playwright-cucumber-template/issues/126)) ([616ef29](https://github.com/aimeerivers/playwright-cucumber-template/commit/616ef296e221d4e04937f0cd29f9a1f264350d1e))
* **workflows:** add release-please ([ebfc7e8](https://github.com/aimeerivers/playwright-cucumber-template/commit/ebfc7e86b06894f36a56d853eb84382c06b651ca))


### Bug Fixes

* **cucumber:** add a slowMo option ([#18](https://github.com/aimeerivers/playwright-cucumber-template/issues/18)) ([479f287](https://github.com/aimeerivers/playwright-cucumber-template/commit/479f287beb30105634e883e3194a7763df0a2fc5))
* **typescript:** use CustomWorld for type safety ([#14](https://github.com/aimeerivers/playwright-cucumber-template/issues/14)) ([a3d78f2](https://github.com/aimeerivers/playwright-cucumber-template/commit/a3d78f2550211154cf8e6971ab90e41937a5ea66))
* Update the Release Please workflow to run at the right time ([#135](https://github.com/aimeerivers/playwright-cucumber-template/issues/135)) ([5bff8a4](https://github.com/aimeerivers/playwright-cucumber-template/commit/5bff8a4ab8b03b23615d59f5627cf6a2d4cc11ee))
* **update-please:** change to new secret ([#25](https://github.com/aimeerivers/playwright-cucumber-template/issues/25)) ([70f990d](https://github.com/aimeerivers/playwright-cucumber-template/commit/70f990db0d9a6d337a9eed31f8292fa29af246fd))


### Dependencies

* Switch over to ts-node-maintained to avoid the deprecation warn… ([#93](https://github.com/aimeerivers/playwright-cucumber-template/issues/93)) ([02b85fc](https://github.com/aimeerivers/playwright-cucumber-template/commit/02b85fcdb2826ba2e9aae5398cf298f0e566998b))
* update dependencies ([#103](https://github.com/aimeerivers/playwright-cucumber-template/issues/103)) ([acccadc](https://github.com/aimeerivers/playwright-cucumber-template/commit/acccadc28b37731e260e5d186556b93938cd4c86))
* update dependencies ([#105](https://github.com/aimeerivers/playwright-cucumber-template/issues/105)) ([210d2e3](https://github.com/aimeerivers/playwright-cucumber-template/commit/210d2e3f0dbdd841ab106d8ceb84e425b70d06f0))
* update dependencies ([#107](https://github.com/aimeerivers/playwright-cucumber-template/issues/107)) ([20ab246](https://github.com/aimeerivers/playwright-cucumber-template/commit/20ab246defd5aa94e875eeae15991fef4675e3ab))
* update dependencies ([#109](https://github.com/aimeerivers/playwright-cucumber-template/issues/109)) ([dcf6012](https://github.com/aimeerivers/playwright-cucumber-template/commit/dcf60122a22fd30070fd0d32cf3dcfe5faa49d52))
* update dependencies ([#111](https://github.com/aimeerivers/playwright-cucumber-template/issues/111)) ([911e3db](https://github.com/aimeerivers/playwright-cucumber-template/commit/911e3db7dbad636a3c3010f9dea38e5e57da1e48))
* update dependencies ([#113](https://github.com/aimeerivers/playwright-cucumber-template/issues/113)) ([e3509e0](https://github.com/aimeerivers/playwright-cucumber-template/commit/e3509e04cfb40384d4b3938ce2e126a1eeaab8e2))
* update dependencies ([#43](https://github.com/aimeerivers/playwright-cucumber-template/issues/43)) ([a0541c5](https://github.com/aimeerivers/playwright-cucumber-template/commit/a0541c53c912187412361684ecf73054bfb7d0c3))
* update dependencies ([#45](https://github.com/aimeerivers/playwright-cucumber-template/issues/45)) ([466f920](https://github.com/aimeerivers/playwright-cucumber-template/commit/466f92017054c268f504061c456d63ce8b8ada57))
* update dependencies ([#48](https://github.com/aimeerivers/playwright-cucumber-template/issues/48)) ([2cd51cc](https://github.com/aimeerivers/playwright-cucumber-template/commit/2cd51ccb1329d8af3b0257f1bad8d133ede2ba6f))
* update dependencies ([#52](https://github.com/aimeerivers/playwright-cucumber-template/issues/52)) ([506dfb4](https://github.com/aimeerivers/playwright-cucumber-template/commit/506dfb41b7d5e45f37c303d3b36f052de597a6b8))
* update dependencies ([#54](https://github.com/aimeerivers/playwright-cucumber-template/issues/54)) ([4cec30a](https://github.com/aimeerivers/playwright-cucumber-template/commit/4cec30a5e79d0ca44acb244a1d1ab4c6e4a99693))
* update dependencies ([#56](https://github.com/aimeerivers/playwright-cucumber-template/issues/56)) ([f8910cd](https://github.com/aimeerivers/playwright-cucumber-template/commit/f8910cdcbbbb6055f194a9ea55c59ceb44cfb2ae))
* update dependencies ([#58](https://github.com/aimeerivers/playwright-cucumber-template/issues/58)) ([7a793d6](https://github.com/aimeerivers/playwright-cucumber-template/commit/7a793d62166e28e7f8c5bb59d7068d0be2d3056c))
* update dependencies ([#60](https://github.com/aimeerivers/playwright-cucumber-template/issues/60)) ([365e118](https://github.com/aimeerivers/playwright-cucumber-template/commit/365e1187b3e0f14c526d563bb9d48de3d3df9315))
* update dependencies ([#62](https://github.com/aimeerivers/playwright-cucumber-template/issues/62)) ([cfe54be](https://github.com/aimeerivers/playwright-cucumber-template/commit/cfe54be10a5e4e5fbc87f0a055aebb205f14b531))
* update dependencies ([#64](https://github.com/aimeerivers/playwright-cucumber-template/issues/64)) ([55105f5](https://github.com/aimeerivers/playwright-cucumber-template/commit/55105f5f9c606cf17b4105fcaeb743da3aaabca8))
* update dependencies ([#66](https://github.com/aimeerivers/playwright-cucumber-template/issues/66)) ([67c22a6](https://github.com/aimeerivers/playwright-cucumber-template/commit/67c22a6dd97f01da87167c772a0f8c62b0216f23))
* update dependencies ([#68](https://github.com/aimeerivers/playwright-cucumber-template/issues/68)) ([f178fb6](https://github.com/aimeerivers/playwright-cucumber-template/commit/f178fb69b206a0c143ceff19a3e6244bdee0f274))
* update dependencies ([#70](https://github.com/aimeerivers/playwright-cucumber-template/issues/70)) ([e8f5126](https://github.com/aimeerivers/playwright-cucumber-template/commit/e8f51263f363c4c558ef909d2a1847527ed87ac8))
* update dependencies ([#72](https://github.com/aimeerivers/playwright-cucumber-template/issues/72)) ([32355f1](https://github.com/aimeerivers/playwright-cucumber-template/commit/32355f1603985df0b79bb590dad653843c6435b6))
* update dependencies ([#74](https://github.com/aimeerivers/playwright-cucumber-template/issues/74)) ([93a3897](https://github.com/aimeerivers/playwright-cucumber-template/commit/93a38976f7a114aa22e598455bb2178d2d439686))
* update dependencies ([#76](https://github.com/aimeerivers/playwright-cucumber-template/issues/76)) ([cf55121](https://github.com/aimeerivers/playwright-cucumber-template/commit/cf55121b84ad1a6b35b4664ea679b715b9a462db))
* update dependencies ([#78](https://github.com/aimeerivers/playwright-cucumber-template/issues/78)) ([e40f18c](https://github.com/aimeerivers/playwright-cucumber-template/commit/e40f18c05735e81088018792d6b8d0f54f1ea364))
* update dependencies ([#80](https://github.com/aimeerivers/playwright-cucumber-template/issues/80)) ([53e15df](https://github.com/aimeerivers/playwright-cucumber-template/commit/53e15df71e0defa95ea953d36ebf63bc345aad5a))
* update dependencies ([#82](https://github.com/aimeerivers/playwright-cucumber-template/issues/82)) ([4fffd45](https://github.com/aimeerivers/playwright-cucumber-template/commit/4fffd45e6c8a65104b4f4c36992e331100a49e4c))
* update dependencies ([#84](https://github.com/aimeerivers/playwright-cucumber-template/issues/84)) ([50e6ea4](https://github.com/aimeerivers/playwright-cucumber-template/commit/50e6ea4e17cd6c09e54528a67f0228efcccb55f7))
* update dependencies ([#86](https://github.com/aimeerivers/playwright-cucumber-template/issues/86)) ([17e96cb](https://github.com/aimeerivers/playwright-cucumber-template/commit/17e96cb68546bcfc5ba6c2798fb11e4a87a0361b))
* update dependencies ([#88](https://github.com/aimeerivers/playwright-cucumber-template/issues/88)) ([d8981b4](https://github.com/aimeerivers/playwright-cucumber-template/commit/d8981b4e8b123e7c116fe03ec025d080f49704e2))
* update eslint-config-plus-prettier and remove explicit dependencies ([#50](https://github.com/aimeerivers/playwright-cucumber-template/issues/50)) ([d6780ae](https://github.com/aimeerivers/playwright-cucumber-template/commit/d6780aec3c8b0f050b8d2c10d51f6d1c73981885))
* Update to eslint-config-plus-prettier v4 ([#101](https://github.com/aimeerivers/playwright-cucumber-template/issues/101)) ([effa070](https://github.com/aimeerivers/playwright-cucumber-template/commit/effa0704318979d0064dfe77d0876c188810fec8))
* Update to new eslint-config-plus-prettier ([#99](https://github.com/aimeerivers/playwright-cucumber-template/issues/99)) ([00e6995](https://github.com/aimeerivers/playwright-cucumber-template/commit/00e6995167a5224b82cdac325b7d87ae78d4080e))


### Chores

* add a few changes for more awesomeness ([#12](https://github.com/aimeerivers/playwright-cucumber-template/issues/12)) ([0cb7c01](https://github.com/aimeerivers/playwright-cucumber-template/commit/0cb7c0134173cd3c5256947ba88bf0ff13ebd684))
* configure eslint and prettier ([#2](https://github.com/aimeerivers/playwright-cucumber-template/issues/2)) ([9f57084](https://github.com/aimeerivers/playwright-cucumber-template/commit/9f57084416578634e8dc1258ef68a1070330d31e))
* Create HTML reports also in wip mode ([#132](https://github.com/aimeerivers/playwright-cucumber-template/issues/132)) ([bb6c1e4](https://github.com/aimeerivers/playwright-cucumber-template/commit/bb6c1e464a1b3017a981da6024949028179e558b))
* **cucumber:** initialize cucumber ([c69a71c](https://github.com/aimeerivers/playwright-cucumber-template/commit/c69a71c3fda43a5509a52cedbbe8b386ad68989e))
* **deps:** uninstall eslint ([#22](https://github.com/aimeerivers/playwright-cucumber-template/issues/22)) ([a48217a](https://github.com/aimeerivers/playwright-cucumber-template/commit/a48217a6f590d1a9ed8e44dc409f9341f0cb0df1))
* **deps:** update dependencies ([#24](https://github.com/aimeerivers/playwright-cucumber-template/issues/24)) ([9dfd4ff](https://github.com/aimeerivers/playwright-cucumber-template/commit/9dfd4ffdd7eefb8e69c5afbfe46579e96b3ef91d))
* **deps:** update dependencies ([#27](https://github.com/aimeerivers/playwright-cucumber-template/issues/27)) ([89d3dce](https://github.com/aimeerivers/playwright-cucumber-template/commit/89d3dce06250f6d9fb52cac45d91096f24391913))
* **deps:** update dependencies ([#29](https://github.com/aimeerivers/playwright-cucumber-template/issues/29)) ([5933e8f](https://github.com/aimeerivers/playwright-cucumber-template/commit/5933e8f39370ff641536f903a0c6a1c8e0cfc15d))
* **deps:** update dependencies ([#30](https://github.com/aimeerivers/playwright-cucumber-template/issues/30)) ([f4790fc](https://github.com/aimeerivers/playwright-cucumber-template/commit/f4790fc57b269fc7343ebf3c1e06045c0f5cda30))
* **deps:** update dependencies ([#33](https://github.com/aimeerivers/playwright-cucumber-template/issues/33)) ([2b41440](https://github.com/aimeerivers/playwright-cucumber-template/commit/2b41440cb3addf4cd756d4858a584b637e199cbf))
* **deps:** update dependencies ([#34](https://github.com/aimeerivers/playwright-cucumber-template/issues/34)) ([c12eeba](https://github.com/aimeerivers/playwright-cucumber-template/commit/c12eeba5176bbd23e103ebcb1ee4f56d1b4790db))
* **deps:** update dependencies ([#35](https://github.com/aimeerivers/playwright-cucumber-template/issues/35)) ([1fcfec6](https://github.com/aimeerivers/playwright-cucumber-template/commit/1fcfec62082862884e5da8fb634cbff6823d9ac5))
* **deps:** update dependencies ([#36](https://github.com/aimeerivers/playwright-cucumber-template/issues/36)) ([d921bd4](https://github.com/aimeerivers/playwright-cucumber-template/commit/d921bd41966f08a8efc68583eb7795bd1c8682b8))
* **deps:** update dependencies ([#37](https://github.com/aimeerivers/playwright-cucumber-template/issues/37)) ([e703286](https://github.com/aimeerivers/playwright-cucumber-template/commit/e703286bd048fa9d61b16b0901e935620920f2c6))
* **deps:** update dependencies ([#40](https://github.com/aimeerivers/playwright-cucumber-template/issues/40)) ([8702f63](https://github.com/aimeerivers/playwright-cucumber-template/commit/8702f6387bdc8c3c0a5db6b45c2028af62c6e3c5))
* **main:** release 1.1.0 ([#5](https://github.com/aimeerivers/playwright-cucumber-template/issues/5)) ([57330a6](https://github.com/aimeerivers/playwright-cucumber-template/commit/57330a6eaaa46dda210532309a2e3d1cfb61e41d))
* **main:** release 2.0.0 ([#10](https://github.com/aimeerivers/playwright-cucumber-template/issues/10)) ([0e81629](https://github.com/aimeerivers/playwright-cucumber-template/commit/0e81629becf17a1ffe991894399ffad9ea52d8ec))
* **main:** release 2.0.1 ([#15](https://github.com/aimeerivers/playwright-cucumber-template/issues/15)) ([1e46068](https://github.com/aimeerivers/playwright-cucumber-template/commit/1e4606896af7c54f9797a89fbd935d73c28084c2))
* **main:** release 2.1.0 ([#17](https://github.com/aimeerivers/playwright-cucumber-template/issues/17)) ([f250cf9](https://github.com/aimeerivers/playwright-cucumber-template/commit/f250cf93b5c06382cd11d85f4aef8617acaab11f))
* **main:** release 2.1.1 ([#19](https://github.com/aimeerivers/playwright-cucumber-template/issues/19)) ([dc98fc0](https://github.com/aimeerivers/playwright-cucumber-template/commit/dc98fc04a1a79d8b516120482c33aa5c993547e5))
* **main:** release 2.1.10 ([#61](https://github.com/aimeerivers/playwright-cucumber-template/issues/61)) ([8c3ec0b](https://github.com/aimeerivers/playwright-cucumber-template/commit/8c3ec0ba67ee56acce8d22f286ac8006d5c0f1fe))
* **main:** release 2.1.11 ([#63](https://github.com/aimeerivers/playwright-cucumber-template/issues/63)) ([78cff19](https://github.com/aimeerivers/playwright-cucumber-template/commit/78cff192509b83874481ee542b158fc639db6a15))
* **main:** release 2.1.12 ([#65](https://github.com/aimeerivers/playwright-cucumber-template/issues/65)) ([410bb61](https://github.com/aimeerivers/playwright-cucumber-template/commit/410bb61132e09341b27d3e1a4af9b36a2af0408c))
* **main:** release 2.1.13 ([#67](https://github.com/aimeerivers/playwright-cucumber-template/issues/67)) ([fea1156](https://github.com/aimeerivers/playwright-cucumber-template/commit/fea1156095fe45159eb660de64b119c2f2f3e13b))
* **main:** release 2.1.14 ([#69](https://github.com/aimeerivers/playwright-cucumber-template/issues/69)) ([c3fbec9](https://github.com/aimeerivers/playwright-cucumber-template/commit/c3fbec9c3df9aefd64ad1d03f5e1980ec16c5fab))
* **main:** release 2.1.15 ([#71](https://github.com/aimeerivers/playwright-cucumber-template/issues/71)) ([44e439e](https://github.com/aimeerivers/playwright-cucumber-template/commit/44e439ed9d2a1b374772ef3fa6ea0f61481fc464))
* **main:** release 2.1.16 ([#73](https://github.com/aimeerivers/playwright-cucumber-template/issues/73)) ([55cce05](https://github.com/aimeerivers/playwright-cucumber-template/commit/55cce05b887c1fd1bb7e186205dab8848dfbdc6e))
* **main:** release 2.1.17 ([#75](https://github.com/aimeerivers/playwright-cucumber-template/issues/75)) ([6c618fc](https://github.com/aimeerivers/playwright-cucumber-template/commit/6c618fc0fd25053592752a104cb77ca4f99ca318))
* **main:** release 2.1.18 ([#77](https://github.com/aimeerivers/playwright-cucumber-template/issues/77)) ([d3bf7f3](https://github.com/aimeerivers/playwright-cucumber-template/commit/d3bf7f357af1207360485a10b3af42f42180e0e6))
* **main:** release 2.1.19 ([#79](https://github.com/aimeerivers/playwright-cucumber-template/issues/79)) ([1e4ed29](https://github.com/aimeerivers/playwright-cucumber-template/commit/1e4ed29f4e0a9d4c335f5cb29efb360c4cd203cd))
* **main:** release 2.1.2 ([#26](https://github.com/aimeerivers/playwright-cucumber-template/issues/26)) ([1150087](https://github.com/aimeerivers/playwright-cucumber-template/commit/115008731510310517bf92e02605d86750cdf911))
* **main:** release 2.1.20 ([#81](https://github.com/aimeerivers/playwright-cucumber-template/issues/81)) ([1d47b9b](https://github.com/aimeerivers/playwright-cucumber-template/commit/1d47b9be0e1f2546310dec1d019b8f56a52c05ec))
* **main:** release 2.1.21 ([#83](https://github.com/aimeerivers/playwright-cucumber-template/issues/83)) ([ea6b4bd](https://github.com/aimeerivers/playwright-cucumber-template/commit/ea6b4bdc254932baec4b9d740df502df692fe0f3))
* **main:** release 2.1.22 ([#85](https://github.com/aimeerivers/playwright-cucumber-template/issues/85)) ([cd89744](https://github.com/aimeerivers/playwright-cucumber-template/commit/cd897449a7a365deb5e8d7060d11666e2a6d5d39))
* **main:** release 2.1.23 ([#87](https://github.com/aimeerivers/playwright-cucumber-template/issues/87)) ([9743615](https://github.com/aimeerivers/playwright-cucumber-template/commit/9743615f57cf04f98166fddcae3a5150b563f922))
* **main:** release 2.1.24 ([#89](https://github.com/aimeerivers/playwright-cucumber-template/issues/89)) ([046f192](https://github.com/aimeerivers/playwright-cucumber-template/commit/046f192b60be63ef37c3a13fe211dff1023c99b0))
* **main:** release 2.1.3 ([#44](https://github.com/aimeerivers/playwright-cucumber-template/issues/44)) ([9491da4](https://github.com/aimeerivers/playwright-cucumber-template/commit/9491da4d0a8eb77c2af6e1339b52d50ac7c972ed))
* **main:** release 2.1.4 ([#49](https://github.com/aimeerivers/playwright-cucumber-template/issues/49)) ([eba8b24](https://github.com/aimeerivers/playwright-cucumber-template/commit/eba8b24a32f69e0a151b9a01dc2677e469681ac4))
* **main:** release 2.1.5 ([#51](https://github.com/aimeerivers/playwright-cucumber-template/issues/51)) ([fb6030a](https://github.com/aimeerivers/playwright-cucumber-template/commit/fb6030ac7c55db3244ee0b914c83a57acefe769c))
* **main:** release 2.1.6 ([#53](https://github.com/aimeerivers/playwright-cucumber-template/issues/53)) ([24a5333](https://github.com/aimeerivers/playwright-cucumber-template/commit/24a5333f4bc8428a8a7bf1b8e1230aded1cd3540))
* **main:** release 2.1.7 ([#55](https://github.com/aimeerivers/playwright-cucumber-template/issues/55)) ([33a7520](https://github.com/aimeerivers/playwright-cucumber-template/commit/33a75205c2c8e1f474a6724e9ca408a1b025f4b4))
* **main:** release 2.1.8 ([#57](https://github.com/aimeerivers/playwright-cucumber-template/issues/57)) ([69fc080](https://github.com/aimeerivers/playwright-cucumber-template/commit/69fc080e20d54c4840588fa63f6e954e33485c8e))
* **main:** release 2.1.9 ([#59](https://github.com/aimeerivers/playwright-cucumber-template/issues/59)) ([490558a](https://github.com/aimeerivers/playwright-cucumber-template/commit/490558a9416f3eae1a9c9b5d670e544c199cf9cd))
* **main:** release 3.0.0 ([#92](https://github.com/aimeerivers/playwright-cucumber-template/issues/92)) ([b1c1ea1](https://github.com/aimeerivers/playwright-cucumber-template/commit/b1c1ea12dd135c70dee3ea296b8c92fb465dae88))
* **main:** release 3.1.0 ([#98](https://github.com/aimeerivers/playwright-cucumber-template/issues/98)) ([0e837bc](https://github.com/aimeerivers/playwright-cucumber-template/commit/0e837bc196ddae5ee79394fa10974495b0486b26))
* **main:** release 3.1.1 ([#100](https://github.com/aimeerivers/playwright-cucumber-template/issues/100)) ([465ff56](https://github.com/aimeerivers/playwright-cucumber-template/commit/465ff568c615eba2d3cbc40c30826802d8a66414))
* **main:** release 3.1.10 ([#125](https://github.com/aimeerivers/playwright-cucumber-template/issues/125)) ([db36fb0](https://github.com/aimeerivers/playwright-cucumber-template/commit/db36fb06fb9ddffcba453941cedc742ae73cc10e))
* **main:** release 3.1.2 ([#102](https://github.com/aimeerivers/playwright-cucumber-template/issues/102)) ([d69fba2](https://github.com/aimeerivers/playwright-cucumber-template/commit/d69fba278b0a1ff51d15f2dc14379deb9a0cf59a))
* **main:** release 3.1.3 ([#104](https://github.com/aimeerivers/playwright-cucumber-template/issues/104)) ([4a235bd](https://github.com/aimeerivers/playwright-cucumber-template/commit/4a235bdb9f8b568898c95fc4992b5afa3b4c12fd))
* **main:** release 3.1.4 ([#106](https://github.com/aimeerivers/playwright-cucumber-template/issues/106)) ([caef527](https://github.com/aimeerivers/playwright-cucumber-template/commit/caef52754236dcf7f66acd42c7edaa46a3e596eb))
* **main:** release 3.1.5 ([#108](https://github.com/aimeerivers/playwright-cucumber-template/issues/108)) ([59484dc](https://github.com/aimeerivers/playwright-cucumber-template/commit/59484dce948af36481207ec204a3e45c73348ebd))
* **main:** release 3.1.6 ([#110](https://github.com/aimeerivers/playwright-cucumber-template/issues/110)) ([82798c6](https://github.com/aimeerivers/playwright-cucumber-template/commit/82798c6dd8f4b6dd6b2683ef07bf80b871ec3a0a))
* **main:** release 3.1.7 ([#112](https://github.com/aimeerivers/playwright-cucumber-template/issues/112)) ([61b5ab1](https://github.com/aimeerivers/playwright-cucumber-template/commit/61b5ab1cd66931586ee9dcf57fa296c81d8c7d01))
* **main:** release 3.1.8 ([#114](https://github.com/aimeerivers/playwright-cucumber-template/issues/114)) ([93bd53f](https://github.com/aimeerivers/playwright-cucumber-template/commit/93bd53faaf47bcb009dfd6a953a4cbb563d6c41d))
* **main:** release 3.1.9 ([#123](https://github.com/aimeerivers/playwright-cucumber-template/issues/123)) ([aebd8a1](https://github.com/aimeerivers/playwright-cucumber-template/commit/aebd8a124f0d6c7015368db578d46c276fa10371))
* **main:** release 3.2.0 ([#127](https://github.com/aimeerivers/playwright-cucumber-template/issues/127)) ([467e891](https://github.com/aimeerivers/playwright-cucumber-template/commit/467e891a74a464532dd7325af019d3f067fa84f1))
* **main:** release 3.2.1 ([#129](https://github.com/aimeerivers/playwright-cucumber-template/issues/129)) ([81eb5bd](https://github.com/aimeerivers/playwright-cucumber-template/commit/81eb5bd26962a54eeefcac6420ec9e2f2ae2fb1e))
* **main:** release 3.2.2 ([#131](https://github.com/aimeerivers/playwright-cucumber-template/issues/131)) ([7ac9d9d](https://github.com/aimeerivers/playwright-cucumber-template/commit/7ac9d9db8927853498199ca4719a647c21161b0f))
* **main:** release 3.2.3 ([#134](https://github.com/aimeerivers/playwright-cucumber-template/issues/134)) ([8104080](https://github.com/aimeerivers/playwright-cucumber-template/commit/81040801b13d745456af1d59dddae871293559c4))
* **package.json:** add a description ([721e86f](https://github.com/aimeerivers/playwright-cucumber-template/commit/721e86f884f898143d4410e27ff6adfd12daee10))
* **package.json:** back to 2.1.2 ([c81ae47](https://github.com/aimeerivers/playwright-cucumber-template/commit/c81ae4763fa66b1f9a38fed6ec610675a9deefbd))
* **package.json:** tidy up package.json and ensure it remains tidy ([#39](https://github.com/aimeerivers/playwright-cucumber-template/issues/39)) ([3c5fc7c](https://github.com/aimeerivers/playwright-cucumber-template/commit/3c5fc7c1aa4297caacd4877a144f45066adfda02))
* **package.json:** update dependencies ([#20](https://github.com/aimeerivers/playwright-cucumber-template/issues/20)) ([14dd99a](https://github.com/aimeerivers/playwright-cucumber-template/commit/14dd99a9a177b34aa1bbf2a61d108979a0c3eb90))
* **package.json:** update dependencies ([#21](https://github.com/aimeerivers/playwright-cucumber-template/issues/21)) ([cd91820](https://github.com/aimeerivers/playwright-cucumber-template/commit/cd91820c72dbc882ed6460c4f4e60e11c6dafc14))
* **package.json:** update eslint-config-plus-prettier ([#8](https://github.com/aimeerivers/playwright-cucumber-template/issues/8)) ([a86c65c](https://github.com/aimeerivers/playwright-cucumber-template/commit/a86c65c48d7d9492b06195daeaf49d5d45f459de))
* **package.json:** update to latest @types/node and eslint-config ([#13](https://github.com/aimeerivers/playwright-cucumber-template/issues/13)) ([814df95](https://github.com/aimeerivers/playwright-cucumber-template/commit/814df95b3d1d63a56fd0792852e7e54ca8f36bbf))
* **package.json:** update to latest eslint-config ([#11](https://github.com/aimeerivers/playwright-cucumber-template/issues/11)) ([584c137](https://github.com/aimeerivers/playwright-cucumber-template/commit/584c1373b91a5a622cf2eb8580ecfc98c1c09d67))
* **playwright:** add a script to install playwright ([ea7ed35](https://github.com/aimeerivers/playwright-cucumber-template/commit/ea7ed356f39186369d3a2f3a8d0de9762fc77e4e))
* **prettier:** ignore package-lock.json ([24f29c4](https://github.com/aimeerivers/playwright-cucumber-template/commit/24f29c4cfd32a9f865eec5ef077e28aea8a165c8))
* release v2.1.3 manually ([f799696](https://github.com/aimeerivers/playwright-cucumber-template/commit/f799696473edc1aa764e32eb2c04cf54ea884b36))
* Remove changelog and revert back to 3.2.2 ([#137](https://github.com/aimeerivers/playwright-cucumber-template/issues/137)) ([8ac19b4](https://github.com/aimeerivers/playwright-cucumber-template/commit/8ac19b4fc7b43199cf1d157a7f84d8902bbfa755))
* start new template project ([c26e122](https://github.com/aimeerivers/playwright-cucumber-template/commit/c26e12287d2f0c872bd9a1766d55d193413c31f5))
* **tsc:** initialize typescript config ([1d89200](https://github.com/aimeerivers/playwright-cucumber-template/commit/1d89200879737c1a5218fd4e6c0071f9bdd104c7))
* Update dependencies ([#122](https://github.com/aimeerivers/playwright-cucumber-template/issues/122)) ([4a77312](https://github.com/aimeerivers/playwright-cucumber-template/commit/4a77312aab2456be495a792576cd2f7a439129e6))
* Update dependencies ([#128](https://github.com/aimeerivers/playwright-cucumber-template/issues/128)) ([ced0a01](https://github.com/aimeerivers/playwright-cucumber-template/commit/ced0a0100aedf99d43aaa28072391d944e2b1254))
* update eslint ([#6](https://github.com/aimeerivers/playwright-cucumber-template/issues/6)) ([7375b02](https://github.com/aimeerivers/playwright-cucumber-template/commit/7375b02199b58ba79b647dbd82196b7187d71ee5))
* Update eslint-config-plus-prettier to 4.1.9 ([#120](https://github.com/aimeerivers/playwright-cucumber-template/issues/120)) ([f1d4194](https://github.com/aimeerivers/playwright-cucumber-template/commit/f1d419454cb21e4a6c032fa509701b5b54785b16))
* Update playwright to 1.53.1 ([#130](https://github.com/aimeerivers/playwright-cucumber-template/issues/130)) ([f11836a](https://github.com/aimeerivers/playwright-cucumber-template/commit/f11836a62a94ccd58bb55f66522ff70a7bcf3405))
* use share config for eslint, prettier and tsconfig ([#7](https://github.com/aimeerivers/playwright-cucumber-template/issues/7)) ([785affd](https://github.com/aimeerivers/playwright-cucumber-template/commit/785affd86e0e407227fced07273426462cababf2))
* **workflows:** run cucumber in github actions on pull request to main ([#1](https://github.com/aimeerivers/playwright-cucumber-template/issues/1)) ([f3951ea](https://github.com/aimeerivers/playwright-cucumber-template/commit/f3951ea3d8f76d8862873fcb8efe19076a0f8d01))
* **workflows:** use a PAT for creating PRs ([5b5944d](https://github.com/aimeerivers/playwright-cucumber-template/commit/5b5944d6f9249b13298f3b3fe6af7bb49465f6f7))


### Documentation

* Add step usage script and documentation ([#124](https://github.com/aimeerivers/playwright-cucumber-template/issues/124)) ([9575e9a](https://github.com/aimeerivers/playwright-cucumber-template/commit/9575e9a58ac2cb4fd2da27bdcf8fac48ccac86ea))
* **readme:** add a readme ([#3](https://github.com/aimeerivers/playwright-cucumber-template/issues/3)) ([cfe8fa4](https://github.com/aimeerivers/playwright-cucumber-template/commit/cfe8fa4f9ac436b917e9c829a9b166f1de784425))
* **readme:** add some information about the application under test ([fd6eb48](https://github.com/aimeerivers/playwright-cucumber-template/commit/fd6eb482a83ae3b584930d74634e9f82e57e435e))
* Update the README with better formatting and more information ([#97](https://github.com/aimeerivers/playwright-cucumber-template/issues/97)) ([4088d26](https://github.com/aimeerivers/playwright-cucumber-template/commit/4088d26022759a80547f85607adb2383e14351ea))

## [3.2.2](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.2.1...v3.2.2) (2025-06-20)


### Chores

* Update playwright to 1.53.1 ([#130](https://github.com/aimeerivers/playwright-cucumber-template/issues/130)) ([f11836a](https://github.com/aimeerivers/playwright-cucumber-template/commit/f11836a62a94ccd58bb55f66522ff70a7bcf3405))

## [3.2.1](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.2.0...v3.2.1) (2025-06-18)


### Chores

* Update dependencies ([#128](https://github.com/aimeerivers/playwright-cucumber-template/issues/128)) ([ced0a01](https://github.com/aimeerivers/playwright-cucumber-template/commit/ced0a0100aedf99d43aaa28072391d944e2b1254))

## [3.2.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.10...v3.2.0) (2025-06-15)


### Features

* Use a 10 minute timeout when running in wip mode ([#126](https://github.com/aimeerivers/playwright-cucumber-template/issues/126)) ([616ef29](https://github.com/aimeerivers/playwright-cucumber-template/commit/616ef296e221d4e04937f0cd29f9a1f264350d1e))

## [3.1.10](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.9...v3.1.10) (2025-06-12)


### Documentation

* Add step usage script and documentation ([#124](https://github.com/aimeerivers/playwright-cucumber-template/issues/124)) ([9575e9a](https://github.com/aimeerivers/playwright-cucumber-template/commit/9575e9a58ac2cb4fd2da27bdcf8fac48ccac86ea))

## [3.1.9](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.8...v3.1.9) (2025-06-07)


### Chores

* Update dependencies ([#122](https://github.com/aimeerivers/playwright-cucumber-template/issues/122)) ([4a77312](https://github.com/aimeerivers/playwright-cucumber-template/commit/4a77312aab2456be495a792576cd2f7a439129e6))
* Update eslint-config-plus-prettier to 4.1.9 ([#120](https://github.com/aimeerivers/playwright-cucumber-template/issues/120)) ([f1d4194](https://github.com/aimeerivers/playwright-cucumber-template/commit/f1d419454cb21e4a6c032fa509701b5b54785b16))

## [3.1.8](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.7...v3.1.8) (2025-03-24)


### Dependencies

* update dependencies ([#113](https://github.com/aimeerivers/playwright-cucumber-template/issues/113)) ([e3509e0](https://github.com/aimeerivers/playwright-cucumber-template/commit/e3509e04cfb40384d4b3938ce2e126a1eeaab8e2))

## [3.1.7](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.6...v3.1.7) (2025-02-20)


### Dependencies

* update dependencies ([#111](https://github.com/aimeerivers/playwright-cucumber-template/issues/111)) ([911e3db](https://github.com/aimeerivers/playwright-cucumber-template/commit/911e3db7dbad636a3c3010f9dea38e5e57da1e48))

## [3.1.6](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.5...v3.1.6) (2025-01-21)


### Dependencies

* update dependencies ([#109](https://github.com/aimeerivers/playwright-cucumber-template/issues/109)) ([dcf6012](https://github.com/aimeerivers/playwright-cucumber-template/commit/dcf60122a22fd30070fd0d32cf3dcfe5faa49d52))

## [3.1.5](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.4...v3.1.5) (2024-12-20)


### Dependencies

* update dependencies ([#107](https://github.com/aimeerivers/playwright-cucumber-template/issues/107)) ([20ab246](https://github.com/aimeerivers/playwright-cucumber-template/commit/20ab246defd5aa94e875eeae15991fef4675e3ab))

## [3.1.4](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.3...v3.1.4) (2024-11-29)


### Dependencies

* update dependencies ([#105](https://github.com/aimeerivers/playwright-cucumber-template/issues/105)) ([210d2e3](https://github.com/aimeerivers/playwright-cucumber-template/commit/210d2e3f0dbdd841ab106d8ceb84e425b70d06f0))

## [3.1.3](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.2...v3.1.3) (2024-11-20)


### Dependencies

* update dependencies ([#103](https://github.com/aimeerivers/playwright-cucumber-template/issues/103)) ([acccadc](https://github.com/aimeerivers/playwright-cucumber-template/commit/acccadc28b37731e260e5d186556b93938cd4c86))

## [3.1.2](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.1...v3.1.2) (2024-11-10)


### Dependencies

* Update to eslint-config-plus-prettier v4 ([#101](https://github.com/aimeerivers/playwright-cucumber-template/issues/101)) ([effa070](https://github.com/aimeerivers/playwright-cucumber-template/commit/effa0704318979d0064dfe77d0876c188810fec8))

## [3.1.1](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.1.0...v3.1.1) (2024-11-10)


### Dependencies

* Update to new eslint-config-plus-prettier ([#99](https://github.com/aimeerivers/playwright-cucumber-template/issues/99)) ([00e6995](https://github.com/aimeerivers/playwright-cucumber-template/commit/00e6995167a5224b82cdac325b7d87ae78d4080e))

## [3.1.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v3.0.0...v3.1.0) (2024-11-10)


### Features

* Add a script to open cucumber report ([#95](https://github.com/aimeerivers/playwright-cucumber-template/issues/95)) ([7a6bb93](https://github.com/aimeerivers/playwright-cucumber-template/commit/7a6bb93cf69704c0dee9cbe989389cad82c92f00))


### Dependencies

* Switch over to ts-node-maintained to avoid the deprecation warn… ([#93](https://github.com/aimeerivers/playwright-cucumber-template/issues/93)) ([02b85fc](https://github.com/aimeerivers/playwright-cucumber-template/commit/02b85fcdb2826ba2e9aae5398cf298f0e566998b))

## [3.0.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.24...v3.0.0) (2024-11-10)


### ⚠ BREAKING CHANGES

* This project is now fully converted over to ESM style imports. CommonJS require will no longer work.

### Features

* Switch over to use ES modules ([#91](https://github.com/aimeerivers/playwright-cucumber-template/issues/91)) ([0df79ec](https://github.com/aimeerivers/playwright-cucumber-template/commit/0df79ec5dfec822d5ce449f5bb8110f848d84a99))

## [2.1.24](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.23...v2.1.24) (2024-11-06)


### Dependencies

* update dependencies ([#88](https://github.com/aimeerivers/playwright-cucumber-template/issues/88)) ([d8981b4](https://github.com/aimeerivers/playwright-cucumber-template/commit/d8981b4e8b123e7c116fe03ec025d080f49704e2))

## [2.1.23](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.22...v2.1.23) (2024-10-30)


### Dependencies

* update dependencies ([#86](https://github.com/aimeerivers/playwright-cucumber-template/issues/86)) ([17e96cb](https://github.com/aimeerivers/playwright-cucumber-template/commit/17e96cb68546bcfc5ba6c2798fb11e4a87a0361b))

## [2.1.22](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.21...v2.1.22) (2024-10-23)


### Dependencies

* update dependencies ([#84](https://github.com/aimeerivers/playwright-cucumber-template/issues/84)) ([50e6ea4](https://github.com/aimeerivers/playwright-cucumber-template/commit/50e6ea4e17cd6c09e54528a67f0228efcccb55f7))

## [2.1.21](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.20...v2.1.21) (2024-10-16)


### Dependencies

* update dependencies ([#82](https://github.com/aimeerivers/playwright-cucumber-template/issues/82)) ([4fffd45](https://github.com/aimeerivers/playwright-cucumber-template/commit/4fffd45e6c8a65104b4f4c36992e331100a49e4c))

## [2.1.20](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.19...v2.1.20) (2024-10-09)


### Dependencies

* update dependencies ([#80](https://github.com/aimeerivers/playwright-cucumber-template/issues/80)) ([53e15df](https://github.com/aimeerivers/playwright-cucumber-template/commit/53e15df71e0defa95ea953d36ebf63bc345aad5a))

## [2.1.19](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.18...v2.1.19) (2024-10-02)


### Dependencies

* update dependencies ([#78](https://github.com/aimeerivers/playwright-cucumber-template/issues/78)) ([e40f18c](https://github.com/aimeerivers/playwright-cucumber-template/commit/e40f18c05735e81088018792d6b8d0f54f1ea364))

## [2.1.18](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.17...v2.1.18) (2024-10-01)


### Dependencies

* update dependencies ([#76](https://github.com/aimeerivers/playwright-cucumber-template/issues/76)) ([cf55121](https://github.com/aimeerivers/playwright-cucumber-template/commit/cf55121b84ad1a6b35b4664ea679b715b9a462db))

## [2.1.17](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.16...v2.1.17) (2024-09-18)


### Dependencies

* update dependencies ([#74](https://github.com/aimeerivers/playwright-cucumber-template/issues/74)) ([93a3897](https://github.com/aimeerivers/playwright-cucumber-template/commit/93a38976f7a114aa22e598455bb2178d2d439686))

## [2.1.16](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.15...v2.1.16) (2024-09-11)


### Dependencies

* update dependencies ([#72](https://github.com/aimeerivers/playwright-cucumber-template/issues/72)) ([32355f1](https://github.com/aimeerivers/playwright-cucumber-template/commit/32355f1603985df0b79bb590dad653843c6435b6))

## [2.1.15](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.14...v2.1.15) (2024-09-07)


### Dependencies

* update dependencies ([#70](https://github.com/aimeerivers/playwright-cucumber-template/issues/70)) ([e8f5126](https://github.com/aimeerivers/playwright-cucumber-template/commit/e8f51263f363c4c558ef909d2a1847527ed87ac8))

## [2.1.14](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.13...v2.1.14) (2024-09-04)


### Dependencies

* update dependencies ([#68](https://github.com/aimeerivers/playwright-cucumber-template/issues/68)) ([f178fb6](https://github.com/aimeerivers/playwright-cucumber-template/commit/f178fb69b206a0c143ceff19a3e6244bdee0f274))

## [2.1.13](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.12...v2.1.13) (2024-08-28)


### Dependencies

* update dependencies ([#66](https://github.com/aimeerivers/playwright-cucumber-template/issues/66)) ([67c22a6](https://github.com/aimeerivers/playwright-cucumber-template/commit/67c22a6dd97f01da87167c772a0f8c62b0216f23))

## [2.1.12](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.11...v2.1.12) (2024-08-21)


### Dependencies

* update dependencies ([#64](https://github.com/aimeerivers/playwright-cucumber-template/issues/64)) ([55105f5](https://github.com/aimeerivers/playwright-cucumber-template/commit/55105f5f9c606cf17b4105fcaeb743da3aaabca8))

## [2.1.11](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.10...v2.1.11) (2024-08-14)


### Dependencies

* update dependencies ([#62](https://github.com/aimeerivers/playwright-cucumber-template/issues/62)) ([cfe54be](https://github.com/aimeerivers/playwright-cucumber-template/commit/cfe54be10a5e4e5fbc87f0a055aebb205f14b531))

## [2.1.10](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.9...v2.1.10) (2024-08-07)


### Dependencies

* update dependencies ([#60](https://github.com/aimeerivers/playwright-cucumber-template/issues/60)) ([365e118](https://github.com/aimeerivers/playwright-cucumber-template/commit/365e1187b3e0f14c526d563bb9d48de3d3df9315))

## [2.1.9](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.8...v2.1.9) (2024-07-31)


### Dependencies

* update dependencies ([#58](https://github.com/aimeerivers/playwright-cucumber-template/issues/58)) ([7a793d6](https://github.com/aimeerivers/playwright-cucumber-template/commit/7a793d62166e28e7f8c5bb59d7068d0be2d3056c))

## [2.1.8](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.7...v2.1.8) (2024-07-24)


### Dependencies

* update dependencies ([#56](https://github.com/aimeerivers/playwright-cucumber-template/issues/56)) ([f8910cd](https://github.com/aimeerivers/playwright-cucumber-template/commit/f8910cdcbbbb6055f194a9ea55c59ceb44cfb2ae))

## [2.1.7](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.6...v2.1.7) (2024-07-17)


### Dependencies

* update dependencies ([#54](https://github.com/aimeerivers/playwright-cucumber-template/issues/54)) ([4cec30a](https://github.com/aimeerivers/playwright-cucumber-template/commit/4cec30a5e79d0ca44acb244a1d1ab4c6e4a99693))

## [2.1.6](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.5...v2.1.6) (2024-07-11)


### Dependencies

* update dependencies ([#52](https://github.com/aimeerivers/playwright-cucumber-template/issues/52)) ([506dfb4](https://github.com/aimeerivers/playwright-cucumber-template/commit/506dfb41b7d5e45f37c303d3b36f052de597a6b8))

## [2.1.5](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.4...v2.1.5) (2024-07-11)


### Dependencies

* update eslint-config-plus-prettier and remove explicit dependencies ([#50](https://github.com/aimeerivers/playwright-cucumber-template/issues/50)) ([d6780ae](https://github.com/aimeerivers/playwright-cucumber-template/commit/d6780aec3c8b0f050b8d2c10d51f6d1c73981885))

## [2.1.4](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.3...v2.1.4) (2024-07-11)


### Dependencies

* update dependencies ([#48](https://github.com/aimeerivers/playwright-cucumber-template/issues/48)) ([2cd51cc](https://github.com/aimeerivers/playwright-cucumber-template/commit/2cd51ccb1329d8af3b0257f1bad8d133ede2ba6f))

## [2.1.3](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.2...v2.1.3) (2024-07-11)


### Dependencies

* update dependencies ([#43](https://github.com/aimeerivers/playwright-cucumber-template/issues/43)) ([a0541c5](https://github.com/aimeerivers/playwright-cucumber-template/commit/a0541c53c912187412361684ecf73054bfb7d0c3))

## [2.1.2](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.1...v2.1.2) (2024-05-15)


### Bug Fixes

* **update-please:** change to new secret ([#25](https://github.com/aimeerivers/playwright-cucumber-template/issues/25)) ([70f990d](https://github.com/aimeerivers/playwright-cucumber-template/commit/70f990db0d9a6d337a9eed31f8292fa29af246fd))

## [2.1.1](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.1.0...v2.1.1) (2024-01-03)


### Bug Fixes

* **cucumber:** add a slowMo option ([#18](https://github.com/aimeerivers/playwright-cucumber-template/issues/18)) ([479f287](https://github.com/aimeerivers/playwright-cucumber-template/commit/479f287beb30105634e883e3194a7763df0a2fc5))

## [2.1.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.0.1...v2.1.0) (2023-12-21)


### Features

* **cucumber:** use pretty-formatter when running wip ([#16](https://github.com/aimeerivers/playwright-cucumber-template/issues/16)) ([6e1a629](https://github.com/aimeerivers/playwright-cucumber-template/commit/6e1a6299a0bc5d42dd5c5e11c36a700883f22865))

## [2.0.1](https://github.com/aimeerivers/playwright-cucumber-template/compare/v2.0.0...v2.0.1) (2023-12-20)


### Bug Fixes

* **typescript:** use CustomWorld for type safety ([#14](https://github.com/aimeerivers/playwright-cucumber-template/issues/14)) ([a3d78f2](https://github.com/aimeerivers/playwright-cucumber-template/commit/a3d78f2550211154cf8e6971ab90e41937a5ea66))

## [2.0.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v1.1.0...v2.0.0) (2023-12-17)


### ⚠ BREAKING CHANGES

* 'npm run test' has been changed to 'npm run cucumber'

### Features

* change test examples ([#9](https://github.com/aimeerivers/playwright-cucumber-template/issues/9)) ([81afd18](https://github.com/aimeerivers/playwright-cucumber-template/commit/81afd180180e1397561ddf7e39b211d4e05489cc))

## [1.1.0](https://github.com/aimeerivers/playwright-cucumber-template/compare/v1.0.0...v1.1.0) (2023-12-16)


### Features

* **cucumber:** use a cucumber world for browser/page management ([#4](https://github.com/aimeerivers/playwright-cucumber-template/issues/4)) ([9c8400a](https://github.com/aimeerivers/playwright-cucumber-template/commit/9c8400ac5fa67d233363377e1f7e8424ec2f9f69))
* **workflows:** add release-please ([ebfc7e8](https://github.com/aimeerivers/playwright-cucumber-template/commit/ebfc7e86b06894f36a56d853eb84382c06b651ca))
