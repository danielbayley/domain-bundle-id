import parse from 'url-parse-lax'
import {genBundleId, getDomain} from './index'

const domain = 'https://domain.com/App?q=uery#anchor'
const {protocol, host, pathname, path, hash} = parse(domain)

const expected = 'com.domain.App'

test('generates a bundle ID from a domain', () => expect(genBundleId(domain)).toBe(expected))

test('generates a lower case bundle ID from a domain if specified', () => {
  expect(genBundleId(domain, true)).toBe(expected.toLowerCase())
})

test('ignores subdomains', () => {
  expect(genBundleId(`${protocol}//www.${host + path + hash}`)).toBe(expected)
})

test('handles bare domains', () => expect(genBundleId(host + path + hash)).toBe(expected))

test('handles base domains', () => {
  expect(genBundleId(`${protocol}//someapp.com`)).toBe('com.someapp.Some')
})

test('gets the domain from a bundle ID', () => expect(getDomain(expected)).toBe(host + pathname))
