import parse from 'url-parse-lax'
import {pascalCase} from 'pascal-case'

const genBundleId = (domain, lowerCase = false) => {
  const {host, pathname, query, hash} = parse(domain)
  const [name, tld] = host.replace('www.', '').split('.')
  const app = (pathname ?? query ?? hash).replace(/\W/, '') || pascalCase(name).replace('app', '')
  const bundleId = [tld, name, app].join('.')
  return lowerCase ? bundleId.toLowerCase() : bundleId
}

const getDomain = bundleId => {
  const [tld, name, app] = bundleId.split('.')
  return `${name}.${tld}/${app}`
}

export {genBundleId, getDomain}
