Domain ⮂ _[Bundle ID]_
=======================
Generate a macOS _[bundle identifier][bundle id]_ from a [URL]/[domain].

Usage
-----
~~~ js
import {genBundleId, getDomain} from '@danielbayley/domain-bundle-id'

const domain = 'https://domain.com/App?q=uery#anchor'

genBundleId(domain) // com.domain.App

genBundleId(domain, true) // com.domain.app

genBundleId('www.someapp.com') // com.someapp.Some

getDomain('com.domain.App') // domain.com/App
~~~

[Install]
---------
Assuming you already [configured] `npm` to work with [GitHub Packages]:
~~~ sh
npm config set @danielbayley:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com:_authToken ${GITHUB_TOKEN}
npm install @danielbayley/domain-bundle-id #--save-dev
~~~

Contribute
----------
~~~ sh
git config core.hooksPath .github/hooks
~~~

License
-------
[MIT] © [Daniel Bayley]

[MIT]:              LICENSE.md
[Daniel Bayley]:    https://github.com/danielbayley

[alfred]:           https://alfredapp.com
[powerpack]:        https://alfredapp.com/powerpack
[workflows]:        https://alfredapp.com/workflows

[github packages]:  https://github.com/features/packages
[configured]:       https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[install]:          https://github.com/danielbayley/domain-bundle-id/pkgs/npm/domain-bundle-id

[bundle id]:        https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier
[url]:              https://developer.mozilla.org/docs/Learn/Common_questions/What_is_a_URL
[domain]:           https://developer.mozilla.org/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png
